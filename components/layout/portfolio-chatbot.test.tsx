import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it } from "vitest";

import { LanguageProvider, useLanguage } from "@/components/language/language-provider";
import { PortfolioChatbot } from "@/components/layout/portfolio-chatbot";

function LanguageSwitcher() {
  const { setLanguage } = useLanguage();

  return (
    <button type="button" onClick={() => setLanguage("en")}>
      Switch test language
    </button>
  );
}

function renderChatbot() {
  return render(
    <LanguageProvider>
      <LanguageSwitcher />
      <PortfolioChatbot />
    </LanguageProvider>,
  );
}

describe("PortfolioChatbot", () => {
  beforeEach(() => {
    window.localStorage.clear();
    document.documentElement.lang = "es";
  });

  it("opens and closes the assistant panel", async () => {
    const user = userEvent.setup();
    renderChatbot();

    const trigger = screen.getByRole("button", {
      name: "Abrir asistente del portafolio",
    });

    await user.click(trigger);

    expect(
      screen.getByRole("dialog", { name: "Asistente del portafolio" }),
    ).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    await user.click(
      screen.getByRole("button", { name: "Cerrar asistente" }),
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("answers a predetermined question with portfolio content", async () => {
    const user = userEvent.setup();
    renderChatbot();

    await user.click(
      screen.getByRole("button", { name: "Abrir asistente del portafolio" }),
    );
    const liveRegion = screen.getByRole("status");
    const selectedQuestionButton = screen.getByRole("button", {
      name: /proyectos destacados ha desarrollado/,
    });

    expect(liveRegion).toBeEmptyDOMElement();
    await user.click(selectedQuestionButton);

    const question = screen.getByText(/proyectos destacados ha desarrollado/);
    const answer = screen.getByText(
      /Colombia Monitor, EduNotas, DuoLuxe Essence, Optic-AI y MyKondo/,
      { selector: '[data-message-role="assistant-answer"]' },
    );
    const resetButton = screen.getByRole("button", { name: "Elegir otra pregunta" });

    expect(screen.getByRole("status")).toBe(liveRegion);
    expect(liveRegion).toHaveTextContent(
      /Colombia Monitor, EduNotas, DuoLuxe Essence, Optic-AI y MyKondo/,
    );
    expect(question.closest('[data-message-direction="sent"]')).toBeInTheDocument();
    expect(answer.closest('[data-message-direction="received"]')).toBeInTheDocument();
    expect(
      question.compareDocumentPosition(answer) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBe(Node.DOCUMENT_POSITION_FOLLOWING);
    await waitFor(() => expect(resetButton).toHaveFocus());

    await user.click(resetButton);

    expect(liveRegion).toBeEmptyDOMElement();
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: /perfil profesional de Alexander/ }),
      ).toHaveFocus(),
    );
  });

  it("keeps the selected topic synchronized when the language changes", async () => {
    const user = userEvent.setup();
    renderChatbot();

    await user.click(
      screen.getByRole("button", { name: "Abrir asistente del portafolio" }),
    );
    await user.click(
      screen.getByRole("button", {
        name: /perfil profesional de Alexander/,
      }),
    );
    await user.click(
      screen.getByRole("button", { name: "Switch test language" }),
    );

    expect(
      screen.getByRole("dialog", { name: "Portfolio assistant" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("What is Alexander's professional profile?"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/more than 5 years of experience/, {
        selector: '[data-message-role="assistant-answer"]',
      }),
    ).toBeInTheDocument();
  });

  it("closes on Escape and restores focus to the trigger", async () => {
    const user = userEvent.setup();
    renderChatbot();

    const trigger = screen.getByRole("button", {
      name: "Abrir asistente del portafolio",
    });
    await user.click(trigger);

    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "Cerrar asistente" }),
      ).toHaveFocus(),
    );

    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    await waitFor(() => expect(trigger).toHaveFocus());
  });
});
