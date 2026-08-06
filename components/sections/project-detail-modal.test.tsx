import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useState } from "react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { LanguageProvider } from "@/components/language/language-provider";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { landingContent } from "@/content/landing";

const project = landingContent.es.projects[0];

vi.mock("next/image", () => ({
  default: ({ alt, src }: { alt: string; src: string }) =>
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} src={src} />,
}));

function ModalHarness() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <LanguageProvider>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open project
      </button>
      {isOpen ? (
        <ProjectDetailModal project={project} isOpen onClose={() => setIsOpen(false)} />
      ) : null}
    </LanguageProvider>
  );
}

afterEach(() => {
  document.body.style.overflow = "";
  vi.restoreAllMocks();
});

describe("ProjectDetailModal", () => {
  it("focuses close, traps focus, locks scroll, and restores the opener", async () => {
    const user = userEvent.setup();
    document.body.style.overflow = "auto";
    render(<ModalHarness />);

    const opener = screen.getByRole("button", { name: "Open project" });
    await user.click(opener);

    const dialog = screen.getByRole("dialog", { name: project.title });
    const closeButton = within(dialog).getByRole("button", { name: "Cerrar modal" });

    await waitFor(() => expect(closeButton).toHaveFocus());
    expect(document.body.style.overflow).toBe("hidden");

    await user.tab({ shift: true });
    expect(dialog).toContainElement(document.activeElement as HTMLElement);

    const focusableElements = dialog.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    focusableElements[focusableElements.length - 1].focus();
    await user.tab();
    expect(closeButton).toHaveFocus();

    await user.keyboard("{Escape}");

    await waitFor(() => expect(screen.queryByRole("dialog")).not.toBeInTheDocument());
    expect(opener).toHaveFocus();
    expect(document.body.style.overflow).toBe("auto");
  });

  it("preserves fullscreen keyboard behavior and restores its trigger", async () => {
    const user = userEvent.setup();
    render(<ModalHarness />);

    await user.click(screen.getByRole("button", { name: "Open project" }));
    const outerDialog = screen.getByRole("dialog", { name: project.title });
    const firstCapture = within(outerDialog).getByRole("button", {
      name: `Abrir captura 1 de ${project.title} en pantalla completa`,
    });

    await user.click(firstCapture);

    const fullscreenDialog = screen.getByRole("dialog", { name: /pantalla completa/i });
    expect(
      within(fullscreenDialog).getByRole("button", { name: "Cerrar pantalla completa" }),
    ).toHaveFocus();

    await user.keyboard("{ArrowRight}");
    expect(within(fullscreenDialog).getByText("Imagen 2 de 4")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog", { name: /pantalla completa/i })).not.toBeInTheDocument();
    expect(screen.getByRole("dialog", { name: project.title })).toBeInTheDocument();
    await waitFor(() => expect(firstCapture).toHaveFocus());
  });
});
