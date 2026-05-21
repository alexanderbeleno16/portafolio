"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const EYEBROW_TEXTS = [
  "Ingeniería de sistemas y computación",
  "Full Stack",
  "Web developer with IA",
] as const;

const TYPE_DURATION_MS = 2900;
const PAUSE_AFTER_TYPE_MS = 3000;

export function HeroEyebrowLoop() {
  const [textIndex, setTextIndex] = useState(0);
  const text = EYEBROW_TEXTS[textIndex];

  useEffect(() => {
    const shouldReduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (shouldReduceMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setTextIndex((currentIndex) => (currentIndex + 1) % EYEBROW_TEXTS.length);
    }, TYPE_DURATION_MS + PAUSE_AFTER_TYPE_MS);

    return () => window.clearInterval(interval);
  }, []);

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
