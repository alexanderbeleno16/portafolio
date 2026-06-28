"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const TYPE_DURATION_MS = 2900;
const PAUSE_AFTER_TYPE_MS = 3000;

type HeroEyebrowLoopProps = {
  texts: readonly string[];
  isActive?: boolean;
};

export function HeroEyebrowLoop({ texts, isActive = true }: HeroEyebrowLoopProps) {
  const [textIndex, setTextIndex] = useState(0);
  const text = texts[textIndex] ?? texts[0] ?? "";

  useEffect(() => {
    const shouldReduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion || !isActive || texts.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setTextIndex((currentIndex) => (currentIndex + 1) % texts.length);
    }, TYPE_DURATION_MS + PAUSE_AFTER_TYPE_MS);

    return () => window.clearInterval(interval);
  }, [isActive, texts.length]);

  return (
    <span
      key={text}
      className="typing-text"
      style={
        {
          "--typing-characters": text.length,
        } as CSSProperties
      }
    >
      {text}
    </span>
  );
}
