import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import { hydrateRoot } from "react-dom/client";
import { renderToString } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { LanguageProvider, useLanguage } from "@/components/language/language-provider";
import { LanguageToggle } from "@/components/language/language-toggle";

const languageStorageKey = "portfolio-language";

function LanguageProbe() {
  const { content, language } = useLanguage();

  return (
    <div>
      <p data-testid="language">{language}</p>
      <p data-testid="hero-title">{content.hero.title}</p>
    </div>
  );
}

function renderLanguageContract() {
  return render(
    <LanguageProvider>
      <LanguageProbe />
      <LanguageToggle />
    </LanguageProvider>,
  );
}

describe("language provider and toggle", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "";
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("uses Spanish as the default fallback language", () => {
    renderLanguageContract();

    expect(screen.getByTestId("language")).toHaveTextContent("es");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hola, soy");
    expect(screen.getByRole("group", { name: "Cambiar idioma" })).toBeInTheDocument();
    expect(document.documentElement).toHaveAttribute("lang", "es");
  });

  it("matches the Spanish fallback during hydration before applying persisted language", async () => {
    window.localStorage.setItem(languageStorageKey, "en");
    const onRecoverableError = vi.fn();
    const consoleError = vi.spyOn(console, "error").mockImplementation(() => {});
    const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {});
    const container = document.createElement("div");

    container.innerHTML = renderToString(
      <LanguageProvider>
        <LanguageProbe />
        <LanguageToggle />
      </LanguageProvider>,
    );
    document.body.append(container);

    const root = hydrateRoot(
      container,
      <LanguageProvider>
        <LanguageProbe />
        <LanguageToggle />
      </LanguageProvider>,
      { onRecoverableError },
    );

    expect(within(container).getByTestId("language")).toHaveTextContent("es");
    expect(within(container).getByTestId("hero-title")).toHaveTextContent("Hola, soy");
    expect(within(container).getByRole("group", { name: "Cambiar idioma" })).toBeInTheDocument();

    await waitFor(() => {
      expect(within(container).getByTestId("language")).toHaveTextContent("en");
      expect(within(container).getByTestId("hero-title")).toHaveTextContent("Hi, I'm");
      expect(within(container).getByRole("group", { name: "Change language" })).toBeInTheDocument();
      expect(document.documentElement).toHaveAttribute("lang", "en");
    });
    expect(onRecoverableError).not.toHaveBeenCalled();
    expect(consoleError).not.toHaveBeenCalled();
    expect(consoleWarn).not.toHaveBeenCalled();

    await act(async () => {
      root.unmount();
    });
    container.remove();
  });

  it("applies a persisted language preference from localStorage after mount", async () => {
    window.localStorage.setItem(languageStorageKey, "en");

    renderLanguageContract();

    await screen.findByRole("group", { name: "Change language" });

    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hi, I'm");
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });

  it("falls back to Spanish after mount when localStorage contains an invalid language", async () => {
    window.localStorage.setItem(languageStorageKey, "fr");
    const getItem = vi.spyOn(Storage.prototype, "getItem");

    renderLanguageContract();

    await waitFor(() => {
      expect(getItem).toHaveBeenCalledWith(languageStorageKey);
    });

    expect(screen.getByTestId("language")).toHaveTextContent("es");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hola, soy");
    expect(document.documentElement).toHaveAttribute("lang", "es");
  });

  it("falls back to Spanish after mount when localStorage reads fail", async () => {
    const getItem = vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new Error("localStorage read failed");
    });

    renderLanguageContract();

    await waitFor(() => {
      expect(getItem).toHaveBeenCalledWith(languageStorageKey);
    });

    expect(screen.getByTestId("language")).toHaveTextContent("es");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hola, soy");
    expect(document.documentElement).toHaveAttribute("lang", "es");
  });

  it("persists language changes and updates the html lang attribute", async () => {
    const user = userEvent.setup();

    renderLanguageContract();

    await user.click(screen.getByRole("button", { name: "Cambiar a inglés" }));

    expect(window.localStorage.getItem(languageStorageKey)).toBe("en");
    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hi, I'm");
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });

  it("updates in-memory language state when localStorage writes fail", async () => {
    const user = userEvent.setup();

    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new Error("localStorage write failed");
    });

    renderLanguageContract();

    await user.click(screen.getByRole("button", { name: "Cambiar a inglés" }));

    expect(screen.getByTestId("language")).toHaveTextContent("en");
    expect(screen.getByTestId("hero-title")).toHaveTextContent("Hi, I'm");
    expect(document.documentElement).toHaveAttribute("lang", "en");
  });

  it("renders visible toggle labels with accessible pressed state", async () => {
    const user = userEvent.setup();

    renderLanguageContract();

    const spanishButton = screen.getByRole("button", { name: "Cambiar a español" });
    const englishButton = screen.getByRole("button", { name: "Cambiar a inglés" });

    expect(spanishButton).toHaveTextContent("ES");
    expect(englishButton).toHaveTextContent("EN");
    expect(spanishButton).toHaveAttribute("aria-pressed", "true");
    expect(englishButton).toHaveAttribute("aria-pressed", "false");

    await user.click(englishButton);

    expect(screen.getByRole("button", { name: "Switch to English" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "Switch to Spanish" })).toHaveAttribute("aria-pressed", "false");
  });
});
