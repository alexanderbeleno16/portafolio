"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { navItems } from "@/content/landing";
import { cn } from "@/lib/cn";

const HEADER_OFFSET = 112;
type NavHref = (typeof navItems)[number]["href"];

function isNavHref(hash: string): hash is NavHref {
  return navItems.some((item) => item.href === hash);
}

function resolveActiveHash(): NavHref {
  const scrollY = window.scrollY;
  const viewportBottom = scrollY + window.innerHeight;
  const pageBottom = document.documentElement.scrollHeight;

  if (viewportBottom >= pageBottom - 4) {
    return navItems[navItems.length - 1].href;
  }

  let activeHash: NavHref = navItems[0].href;

  for (const item of navItems) {
    const section = document.querySelector<HTMLElement>(item.href);

    if (!section) {
      continue;
    }

    if (scrollY >= section.offsetTop - HEADER_OFFSET) {
      activeHash = item.href;
    }
  }

  return activeHash;
}

function getCurrentHash(): NavHref {
  return isNavHref(window.location.hash) ? window.location.hash : navItems[0].href;
}

export function ActiveNavLinks() {
  const [activeHash, setActiveHash] = useState<NavHref>("#inicio");

  useEffect(() => {
    let animationFrame = 0;

    const updateFromScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setActiveHash(resolveActiveHash());
      });
    };

    const updateFromHash = () => {
      setActiveHash(getCurrentHash());
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
  }, []);

  return (
    <div className="hidden items-center gap-7 justify-self-center lg:flex">
      {navItems.map((item) => {
        const isActive = activeHash === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "label-caps border-b-2 pb-1 transition duration-300",
              isActive
                ? "border-tertiary text-tertiary"
                : "border-transparent text-on-surface-variant hover:border-white/25 hover:text-on-surface",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
