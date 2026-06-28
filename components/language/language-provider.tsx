"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  defaultLanguage,
  landingContent,
  languages,
  type LandingContent,
  type Language,
} from "@/content/landing";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

type LanguageContextValue = {
  content: LandingContent;
  language: Language;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLanguage(value: string | null): value is Language {
  return languages.some((language) => language === value);
}

function getStoredLanguage(): Language {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  try {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);

    return isLanguage(storedLanguage) ? storedLanguage : defaultLanguage;
  } catch {
    return defaultLanguage;
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  const setLanguage = (nextLanguage: Language) => {
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    } catch {
      // Keep the in-memory language state when persistent storage is unavailable.
    }

    setLanguageState(nextLanguage);
    document.documentElement.lang = nextLanguage;
    window.dispatchEvent(
      new CustomEvent<Language>(LANGUAGE_CHANGE_EVENT, { detail: nextLanguage }),
    );
  };

  useEffect(() => {
    let isMounted = true;

    queueMicrotask(() => {
      if (isMounted) {
        setLanguageState(getStoredLanguage());
      }
    });

    const syncLanguage = (event: Event) => {
      if (event instanceof CustomEvent && isLanguage(event.detail)) {
        setLanguageState(event.detail);
        return;
      }

      setLanguageState(getStoredLanguage());
    };

    window.addEventListener("storage", syncLanguage);
    window.addEventListener(LANGUAGE_CHANGE_EVENT, syncLanguage);

    return () => {
      isMounted = false;
      window.removeEventListener("storage", syncLanguage);
      window.removeEventListener(LANGUAGE_CHANGE_EVENT, syncLanguage);
    };
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      content: landingContent[language],
      language,
      setLanguage,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}
