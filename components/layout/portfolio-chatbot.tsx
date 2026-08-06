"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/language/language-provider";
import type { LandingContent } from "@/content/landing";

type ChatbotQuestionId = LandingContent["chatbot"]["questions"][number]["id"];

function ChatBubbleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.5 5.5h13a2.5 2.5 0 0 1 2.5 2.5v7a2.5 2.5 0 0 1-2.5 2.5H11l-4.7 3v-3H5.5A2.5 2.5 0 0 1 3 15V8a2.5 2.5 0 0 1 2.5-2.5Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M8 11.5h.01M12 11.5h.01M16 11.5h.01"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="m7 7 10 10M17 7 7 17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M5.75 19c.7-3.15 3.05-5 6.25-5s5.55 1.85 6.25 5"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className="h-4 w-4 shrink-0">
      <path
        d="m7.5 5 5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function PortfolioChatbot() {
  const { content } = useLanguage();
  const chatbot = content.chatbot;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestionId, setSelectedQuestionId] =
    useState<ChatbotQuestionId | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const resetButtonRef = useRef<HTMLButtonElement>(null);
  const firstQuestionButtonRef = useRef<HTMLButtonElement>(null);
  const pendingFocusTargetRef = useRef<"response" | "questions" | null>(null);

  const selectedQuestion = selectedQuestionId
    ? chatbot.questions.find((question) => question.id === selectedQuestionId)
    : undefined;

  const closeAssistant = useCallback(() => {
    pendingFocusTargetRef.current = null;
    setIsOpen(false);
    queueMicrotask(() => triggerRef.current?.focus());
  }, []);

  const selectQuestion = (questionId: ChatbotQuestionId) => {
    pendingFocusTargetRef.current = "response";
    setSelectedQuestionId(questionId);
  };

  const resetConversation = () => {
    pendingFocusTargetRef.current = "questions";
    setSelectedQuestionId(null);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeAssistant();
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [closeAssistant, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    if (pendingFocusTargetRef.current === "response" && selectedQuestionId) {
      pendingFocusTargetRef.current = null;
      resetButtonRef.current?.focus();
      return;
    }

    if (pendingFocusTargetRef.current === "questions" && !selectedQuestionId) {
      pendingFocusTargetRef.current = null;
      firstQuestionButtonRef.current?.focus();
    }
  }, [isOpen, selectedQuestionId]);

  return (
    <div className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-50 sm:bottom-6 sm:right-6">
      {isOpen ? (
        <section
          id="portfolio-chatbot-panel"
          role="dialog"
          aria-modal="false"
          aria-labelledby="portfolio-chatbot-title"
          aria-describedby="portfolio-chatbot-description"
          className="fixed bottom-[calc(9rem+env(safe-area-inset-bottom))] right-4 flex max-h-[calc(100dvh-10rem-env(safe-area-inset-bottom))] w-[calc(100vw-2rem)] max-w-96 flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0b1018]/95 text-on-surface shadow-[0_28px_90px_rgba(0,0,0,0.58),inset_0_1px_0_rgba(255,255,255,0.08)] supports-[backdrop-filter]:backdrop-blur-md sm:bottom-[9.5rem] sm:right-6 sm:max-h-[36rem] motion-safe:transition motion-safe:duration-200"
        >
          <div className="flex min-h-16 items-center gap-3 border-b border-white/[0.08] bg-white/[0.035] px-4">
            <div className="flex shrink-0 items-center gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>

            <div className="min-w-0 flex-1 text-center">
              <h2
                id="portfolio-chatbot-title"
                className="truncate text-sm font-semibold tracking-[-0.01em]"
              >
                {chatbot.title}
              </h2>
              <p className="mt-0.5 flex items-center justify-center gap-1.5 text-[0.68rem] text-on-surface-variant">
                <span className="h-1.5 w-1.5 rounded-full bg-[#28c840]" aria-hidden="true" />
                {chatbot.statusLabel}
              </p>
            </div>

            <button
              ref={closeButtonRef}
              type="button"
              onClick={closeAssistant}
              aria-label={chatbot.closeLabel}
              className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-on-surface-variant transition-colors duration-200 hover:bg-white/[0.08] hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
            >
              <CloseIcon />
            </button>
          </div>

          <p
            role="status"
            aria-live="polite"
            aria-atomic="true"
            className="sr-only"
          >
            {selectedQuestion?.answer ?? ""}
          </p>

          <div className="min-h-0 overflow-y-auto overscroll-contain p-4 sm:p-5">
            <div className="flex items-end gap-2.5" data-message-direction="received">
              <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-secondary-container text-white shadow-[0_10px_28px_rgba(5,102,217,0.28)]">
                <ChatBubbleIcon className="h-5 w-5" />
              </div>
              <p
                id="portfolio-chatbot-description"
                className="max-w-[82%] rounded-[1.15rem] rounded-bl-md border border-white/[0.065] bg-white/[0.065] px-4 py-3 text-sm leading-6 text-on-surface-variant"
              >
                {chatbot.subtitle}
              </p>
            </div>

            {selectedQuestion ? (
              <div className="mt-5 space-y-4">
                <div
                  className="flex items-end justify-end gap-2.5"
                  data-message-direction="sent"
                >
                  <p className="max-w-[82%] rounded-[1.15rem] rounded-br-md bg-secondary-container px-4 py-3 text-sm font-medium leading-6 text-white shadow-[0_10px_28px_rgba(5,102,217,0.22)]">
                    {selectedQuestion.question}
                  </p>
                  <div
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-secondary-container/35 bg-secondary-container/15 text-tertiary"
                    aria-hidden="true"
                  >
                    <UserIcon />
                  </div>
                </div>

                <div className="flex items-end gap-2.5" data-message-direction="received">
                  <div
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-tertiary/20 bg-tertiary/10 text-tertiary"
                    aria-hidden="true"
                  >
                    <ChatBubbleIcon className="h-4 w-4" />
                  </div>
                  <div
                    data-message-role="assistant-answer"
                    className="max-w-[82%] rounded-[1.15rem] rounded-bl-md border border-tertiary/15 bg-tertiary/[0.07] px-4 py-3 text-sm leading-6 text-on-surface-variant"
                  >
                    {selectedQuestion.answer}
                  </div>
                </div>
                <button
                  ref={resetButtonRef}
                  type="button"
                  onClick={resetConversation}
                  className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/[0.045] px-4 text-sm font-semibold text-on-surface transition-colors duration-200 hover:bg-white/[0.09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                >
                  {chatbot.resetLabel}
                </button>
              </div>
            ) : (
              <div className="mt-5">
                <p className="label-caps text-[0.65rem] text-tertiary">
                  {chatbot.questionsLabel}
                </p>
                <div className="mt-3 grid gap-2">
                  {chatbot.questions.map((question, index) => (
                    <button
                      key={question.id}
                      ref={index === 0 ? firstQuestionButtonRef : undefined}
                      type="button"
                      onClick={() => selectQuestion(question.id)}
                      className="group flex min-h-11 w-full cursor-pointer items-center justify-between gap-3 rounded-2xl border border-white/[0.075] bg-white/[0.035] px-4 py-3 text-left text-sm font-medium leading-5 text-on-surface-variant transition-colors duration-200 hover:border-tertiary/30 hover:bg-tertiary/[0.07] hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                    >
                      <span>{question.question}</span>
                      <span className="text-tertiary transition-transform duration-200 motion-safe:group-hover:translate-x-0.5">
                        <ArrowIcon />
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      ) : null}

      <button
        ref={triggerRef}
        type="button"
        aria-label={chatbot.triggerLabel}
        aria-controls="portfolio-chatbot-panel"
        aria-expanded={isOpen}
        onClick={() => (isOpen ? closeAssistant() : setIsOpen(true))}
        className="relative inline-flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-tertiary/30 bg-secondary-container text-white shadow-[0_18px_50px_rgba(5,102,217,0.38),inset_0_1px_0_rgba(255,255,255,0.22)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0b74f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary motion-reduce:transform-none"
      >
        <ChatBubbleIcon className="h-6 w-6" />
        <span
          className="absolute right-0.5 top-0.5 h-3 w-3 rounded-full border-2 border-secondary-container bg-[#28c840]"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
