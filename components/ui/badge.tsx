import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: "neutral" | "accent";
};

export function Badge({ children, className, tone = "neutral" }: BadgeProps) {
  return (
    <span
      className={cn(
        "label-caps inline-flex items-center rounded-full border px-3 py-1.5",
        tone === "accent"
          ? "border-tertiary/25 bg-tertiary/10 text-tertiary"
          : "border-white/[0.06] bg-surface-container-high text-on-surface-variant",
        className,
      )}
    >
      {children}
    </span>
  );
}
