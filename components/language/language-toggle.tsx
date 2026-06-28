"use client";

import { languages, type Language } from "@/content/landing";
import { useLanguage } from "@/components/language/language-provider";
import { cn } from "@/lib/cn";

export function LanguageToggle() {
  const { content, language, setLanguage } = useLanguage();

  return (
    <div
      className="inline-flex h-11 max-w-full items-center justify-center gap-0.5 rounded-full bg-white/[0.065] p-1 text-[0.62rem] font-black tracking-[0.08em] text-on-surface-variant shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl min-[360px]:h-12 min-[360px]:gap-1 min-[360px]:text-[0.68rem] min-[360px]:tracking-[0.12em] sm:h-14 sm:text-xs"
      role="group"
      aria-label={content.languageToggle.label}
    >
      {languages.map((item) => {
        const isActive = language === item;
        const label = item.toUpperCase();

        return (
          <button
            key={item}
            type="button"
            aria-label={content.languageToggle.optionLabels[item]}
            aria-pressed={isActive}
            onClick={() => setLanguage(item as Language)}
              className={cn(
              "inline-flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-full px-1.5 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary min-[360px]:h-9 min-[360px]:min-w-9 min-[360px]:px-2 sm:h-10 sm:min-w-11 sm:px-3",
              isActive
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "hover:bg-white/[0.06] hover:text-on-surface",
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
