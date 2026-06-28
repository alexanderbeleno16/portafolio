"use client";

import Link from "next/link";
import { type MouseEvent, useEffect, useState } from "react";

import { useLanguage } from "@/components/language/language-provider";
import { cn } from "@/lib/cn";

const HEADER_OFFSET = 112;
const MAX_SECTION_ACTIVATION_OFFSET = 220;
type NavItem = { href: string; label: string };
type NavHref = string;

function isNavHref(hash: string, navItems: readonly NavItem[]): hash is NavHref {
  return navItems.some((item) => item.href === hash);
}

function resolveActiveHash(navItems: readonly NavItem[]): NavHref {
  const viewportBottom = window.scrollY + window.innerHeight;
  const pageBottom = document.documentElement.scrollHeight;

  if (viewportBottom >= pageBottom - 4) {
    return navItems[navItems.length - 1].href;
  }

  const activationLine =
    HEADER_OFFSET + Math.min(MAX_SECTION_ACTIVATION_OFFSET, window.innerHeight * 0.22);
  let activeHash: NavHref = navItems[0].href;

  for (const item of navItems) {
    const section = document.querySelector<HTMLElement>(item.href);

    if (!section) {
      continue;
    }

    const sectionRect = section.getBoundingClientRect();

    if (sectionRect.top <= activationLine && sectionRect.bottom > HEADER_OFFSET) {
      activeHash = item.href;
    }
  }

  return activeHash;
}

function getCurrentHash(navItems: readonly NavItem[]): NavHref {
  return isNavHref(window.location.hash, navItems) ? window.location.hash : navItems[0].href;
}

function getCleanHashUrl(hash: NavHref) {
  return `${window.location.pathname}${window.location.search}${hash}`;
}

export function ActiveNavLinks() {
  const { content } = useLanguage();
  const navItems = content.navItems;
  const [activeHash, setActiveHash] = useState<NavHref>("#inicio");

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: NavHref) => {
    const targetElement = document.getElementById(decodeURIComponent(href.slice(1)));

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", getCleanHashUrl(href));
    setActiveHash(href);
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateFromScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setActiveHash(resolveActiveHash(navItems));
      });
    };

    const updateFromHash = () => {
      setActiveHash(getCurrentHash(navItems));
      updateFromScroll();
    };

    updateFromHash();
    window.addEventListener("scroll", updateFromScroll, { passive: true });
    window.addEventListener("resize", updateFromScroll);
    window.addEventListener("hashchange", updateFromHash);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
      window.removeEventListener("hashchange", updateFromHash);
    };
  }, [navItems]);

  return (
    <div className="hidden items-center gap-1 justify-self-center lg:flex">
      {navItems.map((item) => {
        const isActive = activeHash === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(event) => handleNavClick(event, item.href)}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "rounded-full px-3 py-2 text-sm font-semibold tracking-[-0.01em] transition duration-300",
              isActive
                ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-on-surface-variant hover:bg-white/[0.06] hover:text-on-surface",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
