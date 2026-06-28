"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useState } from "react";

import { ActiveNavLinks } from "@/components/layout/active-nav-links";
import { LanguageToggle } from "@/components/language/language-toggle";
import { useLanguage } from "@/components/language/language-provider";
import { externalLinks } from "@/content/landing";

function getCleanHashUrl(hash: string) {
  return `${window.location.pathname}${window.location.search}${hash}`;
}

export function SiteHeader() {
  const { content } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const targetElement = document.getElementById(decodeURIComponent(href.slice(1)));

    if (!targetElement) {
      setIsMobileMenuOpen(false);
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", getCleanHashUrl(href));
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-2 sm:px-4">
      <div className="mx-auto grid w-full max-w-[calc(100vw-1rem)] grid-cols-[auto_minmax(0,1fr)_auto] items-start gap-1.5 sm:max-w-6xl sm:gap-2 lg:flex lg:w-fit lg:max-w-full lg:items-center lg:justify-center lg:gap-3">
        <div className="relative justify-self-start lg:hidden">
          <button
            type="button"
            aria-label={isMobileMenuOpen ? content.header.mobileMenuCloseLabel : content.header.mobileMenuOpenLabel}
            aria-controls="mobile-navigation-menu"
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/[0.065] text-on-surface-variant shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-300 hover:bg-white/[0.1] hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary min-[360px]:h-12 min-[360px]:w-12 sm:h-14 sm:w-14"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                  isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>

          <nav
            id="mobile-navigation-menu"
            aria-label={content.header.mobileNavigationLabel}
            aria-hidden={!isMobileMenuOpen}
            className={`absolute left-0 top-16 w-[min(calc(100vw-2rem),19rem)] overflow-hidden rounded-[1.75rem] border border-white/10 bg-background/85 p-2 text-left shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition duration-300 ${
              isMobileMenuOpen
                ? "pointer-events-auto translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-2 opacity-0"
            }`}
          >
            <div className="grid gap-1">
              {content.navItems.map((item) => (
                <Link
                  key={item.href}
                  href={`/${item.href}`}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                  onClick={(event) => handleMobileNavClick(event, item.href)}
                  className="rounded-full px-4 py-3 text-sm font-semibold tracking-[-0.01em] text-on-surface-variant transition duration-300 hover:bg-white/[0.08] hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <nav
          aria-label={content.header.primaryNavigationLabel}
          className="hidden h-14 items-center rounded-full bg-white/[0.065] px-4 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl lg:flex"
        >
          <ActiveNavLinks />
        </nav>

        <Link
          href={externalLinks.cv}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={content.header.cvLabel}
          className="inline-flex h-11 items-center justify-center justify-self-center rounded-full bg-white/[0.065] px-3 text-sm font-semibold tracking-[-0.01em] text-on-surface-variant shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition duration-300 hover:bg-white/[0.1] hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary min-[360px]:h-12 min-[360px]:px-4 sm:h-14 sm:px-5 lg:justify-self-auto"
        >
          CV
        </Link>

        <div className="min-w-0 justify-self-end">
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
