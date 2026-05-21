import Link from "next/link";
import type { HTMLAttributeAnchorTarget, ReactNode } from "react";

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
    "bg-secondary-container text-white shadow-[0_0_0_rgba(59,130,246,0)] hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.32)]",
  secondary:
    "border border-white/15 text-on-surface hover:-translate-y-0.5 hover:bg-white/[0.06]",
  ghost: "text-tertiary hover:text-white",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  ariaLabel,
  target,
  rel,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
      className={cn(
        "label-caps inline-flex min-h-12 items-center justify-center rounded-xl px-7 transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
