"use client";

import Link from "next/link";
import type { HTMLAttributeAnchorTarget, MouseEvent, ReactNode } from "react";

import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
  ariaLabel?: string;
  target?: HTMLAttributeAnchorTarget;
  rel?: string;
};

const variants = {
  primary:
    "bg-secondary-container text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_44px_rgba(5,102,217,0.28)] hover:bg-[#0b74f4]",
  secondary:
    "bg-white/[0.065] text-on-surface shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)] hover:bg-white/[0.11]",
  ghost: "text-tertiary hover:text-white",
};

function getCleanHashUrl(hash: string) {
  return `${window.location.pathname}${window.location.search}${hash}`;
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  ariaLabel,
  target,
  rel,
}: ButtonLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#") || href.length <= 1 || target) {
      return;
    }

    const targetElement = document.getElementById(decodeURIComponent(href.slice(1)));

    if (!targetElement) {
      return;
    }

    event.preventDefault();
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", getCleanHashUrl(href));
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-label={ariaLabel}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      className={cn(
        "inline-flex min-h-12 items-center justify-center rounded-full px-7 text-sm font-bold tracking-[-0.01em] transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
