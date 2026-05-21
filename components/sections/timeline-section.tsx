import { TimelineScroller } from "@/components/sections/timeline-scroller";
import { timeline } from "@/content/landing";

export function TimelineSection() {
  return <TimelineScroller items={timeline} />;
}
