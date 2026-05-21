import { Badge } from "@/components/ui/badge";
import { TechIcon } from "@/components/ui/tech-icon";
import { cn } from "@/lib/cn";

type TechBadgeProps = {
  name: string;
  className?: string;
  iconClassName?: string;
  tone?: "neutral" | "accent";
};

export function TechBadge({
  name,
  className,
  iconClassName,
  tone = "neutral",
}: TechBadgeProps) {
  return (
    <Badge className={cn("gap-1.5", className)} tone={tone}>
      <TechIcon name={name} className={cn("h-3.5 w-3.5", iconClassName)} />
      {name}
    </Badge>
  );
}
