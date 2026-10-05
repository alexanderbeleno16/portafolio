import { render, screen, within, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LanguageProvider, useLanguage } from "@/components/language/language-provider";
import { ProjectsSection } from "@/components/sections/projects-section";
import { landingContent } from "@/content/landing";

vi.mock("next/image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) =>
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />,
}));
vi.mock("next/dynamic", () => ({
  default: () => function DetailStub({ project, onClose }: {
    project: { title: string; description: string; tags: readonly string[] };
    onClose: () => void;
  }) {
    return <div role="dialog" aria-label={project.title}>
      <p>{project.description}</p><p>{project.tags.join(", ")}</p>
      <button onClick={onClose}>Close</button>
    </div>;
  },
}));

function Harness() {
  const { setLanguage } = useLanguage();
  return <><button onClick={() => setLanguage("en")}>English</button><ProjectsSection /></>;
}
function renderProjects() {
  render(<LanguageProvider><Harness /></LanguageProvider>);
}
afterEach(() => { cleanup(); localStorage.clear(); });

describe("project browsing", () => {
  it("shows all seven compact cards with category counts and a default card view", () => {
    renderProjects();
    expect(screen.getAllByRole("article")).toHaveLength(7);
    expect(screen.getByRole("button", { name: "Todos 7" })).toHaveAttribute("aria-pressed", "true");
    for (const name of ["Comercio 2", "IA y datos 2", "Gestión 3"])
      expect(screen.getByRole("button", { name })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Tarjetas" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("7 proyectos");
    const payment = screen.getAllByRole("article").find((article) => article.textContent?.includes("ShopiFast"))!;
    expect(within(payment).getByRole("button", { name: "+10 tecnologías" })).toBeInTheDocument();
    expect(within(payment).queryByText("AWS RDS")).not.toBeInTheDocument();
  });

  it("gives Demo and Details the same project-local action dimensions", async () => {
    const user = userEvent.setup(); renderProjects();
    for (const language of ["es", "en"] as const) {
      if (language === "en") await user.click(screen.getByRole("button", { name: "English" }));
      const card = screen.getAllByRole("article").find((article) => article.textContent?.includes("Colombia Monitor"))!;
      const demo = within(card).getByRole("link");
      const detail = within(card).getAllByRole("button", { name: language === "es" ? "Ver detalle de Colombia Monitor" : "View details for Colombia Monitor" }).find((button) => button.textContent === (language === "es" ? "Detalle" : "Details"))!;
      for (const action of [demo, detail]) {
        expect(action).toHaveClass("h-10", "min-h-10!", "w-28", "px-0!", "rounded-xl");
      }
    }
  });

  it("filters every category and restores all projects", async () => {
    const user = userEvent.setup(); renderProjects();
    for (const [category, titles] of [
      ["Comercio 2", ["DuoLuxe Essence", "Product Payment — ShopiFast"]],
      ["IA y datos 2", ["Colombia Monitor", "KOA Verify"]],
      ["Gestión 3", ["EduNotas", "Optic-AI", "MyKondo"]],
    ] as const) {
      await user.click(screen.getByRole("button", { name: category }));
      expect(screen.getAllByRole("article")).toHaveLength(titles.length);
      for (const title of titles) expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
    }
    await user.click(screen.getByRole("button", { name: "Todos 7" }));
    expect(screen.getAllByRole("article")).toHaveLength(7);
  });

  it("keeps category and list selection when changing language", async () => {
    const user = userEvent.setup(); renderProjects();
    await user.click(screen.getByRole("button", { name: "Comercio 2" }));
    await user.click(screen.getByRole("button", { name: "Lista" }));
    expect(screen.getAllByRole("article")[0]).toHaveAttribute("data-layout", "list");
    await user.click(screen.getByRole("button", { name: "English" }));
    expect(screen.getByRole("button", { name: "Commerce 2" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "List" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("status")).toHaveTextContent("2 projects");
    await user.click(screen.getByRole("button", { name: "Cards" }));
    expect(screen.getAllByRole("article")[0]).toHaveAttribute("data-layout", "cards");
    expect(screen.getAllByRole("article")).toHaveLength(2);
  });

  it("opens the complete technology detail while preserving real demo links", async () => {
    const user = userEvent.setup(); renderProjects();
    await user.click(screen.getByRole("button", { name: "Comercio 2" }));
    expect(screen.getByRole("link", { name: /Abrir demo de Product Payment/ })).toHaveAttribute("href", "https://d12hv8vhtndguc.cloudfront.net/");
    await user.click(screen.getByRole("button", { name: "+10 tecnologías" }));
    const dialog = screen.getByRole("dialog", { name: "Product Payment — ShopiFast" });
    expect(dialog).toHaveTextContent("AWS RDS");
    expect(dialog).toHaveTextContent("arquitectura hexagonal");
    await user.click(within(dialog).getByRole("button", { name: "Close" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Gestión 3" }));
    expect(screen.queryByRole("link", { name: /MyKondo|EduNotas/ })).not.toBeInTheDocument();
  });

  it("keeps category identities consistent across both locales", () => {
    for (const language of ["es", "en"] as const) {
      const categories = landingContent[language].projects.map((project) => (project as { category?: string }).category);
      expect(categories).toEqual(["ai-data", "management", "ai-data", "commerce", "management", "commerce", "management"]);
    }
  });
});
