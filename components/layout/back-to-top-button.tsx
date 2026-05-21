"use client";

import Link from "next/link";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";

import { ArrowUpIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const SHOW_AFTER_SCROLL = 520;

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToStart = (event: MouseEvent<HTMLAnchorElement>) => {
    const startSection = document.getElementById("inicio");

    if (!startSection) {
      return;
    }

    event.preventDefault();
    startSection.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", "#inicio");
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateVisibility = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        setIsVisible(window.scrollY > SHOW_AFTER_SCROLL);
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateVisibility);
    };
  }, []);

  return (
    <Link
      href="#inicio"
      onClick={scrollToStart}
      aria-label="Volver al inicio"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      className={cn(
        "fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-tertiary/35 bg-surface/70 text-tertiary shadow-[0_0_28px_rgba(76,215,246,0.18)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-tertiary hover:bg-tertiary hover:text-on-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary",
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0",
      )}
    >
      <ArrowUpIcon className="h-5 w-5" />
    </Link>
  );
}
