"use client";

import { useLanguage } from "@/components/language/language-provider";
import { TimelineScroller } from "@/components/sections/timeline-scroller";

export function TimelineSection() {
  const { content } = useLanguage();

  return <TimelineScroller items={content.timeline} labels={content.timelineSection} />;
}
