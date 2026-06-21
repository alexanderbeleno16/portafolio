import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className,
  titleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "reveal max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="label-caps mb-4 inline-flex rounded-full bg-tertiary/10 px-4 py-2 text-tertiary shadow-[inset_0_0_0_1px_rgba(76,215,246,0.24)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cn("section-title text-balance text-on-surface", titleClassName)}
      >
        {title}
      </h2>
      {description ? (
        <p className="body-large mt-5 text-on-surface-variant">{description}</p>
      ) : null}
    </div>
  );
}
