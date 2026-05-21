import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = "left",
  className,
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
        <p className="label-caps mb-4 text-tertiary">{eyebrow}</p>
      ) : null}
      <h2 id={titleId} className="section-title text-balance text-on-surface">
        {title}
      </h2>
      {description ? (
        <p className="body-large mt-5 text-on-surface-variant">{description}</p>
      ) : null}
    </div>
  );
}
