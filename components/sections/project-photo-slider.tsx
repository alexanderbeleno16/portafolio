"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/language/language-provider";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const SLIDE_INTERVAL_MS = 4000;
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

type ProjectPhotoSliderProps = {
  gallery: readonly string[];
  alt: string;
  title: string;
};

function formatTemplate(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

export function ProjectPhotoSlider({
  gallery,
  alt,
  title,
}: ProjectPhotoSliderProps) {
  const { content } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isIntersecting, setIsIntersecting] = useState(
    () => typeof IntersectionObserver === "undefined",
  );
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const safeActiveIndex = gallery.length > 0 ? activeIndex % gallery.length : 0;
  const activePhoto = gallery[safeActiveIndex];
  const hasMultiplePhotos = gallery.length > 1;

  const showPreviousPhoto = () => {
    setActiveIndex((currentIndex) => {
      return (currentIndex - 1 + gallery.length) % gallery.length;
    });
  };

  const showNextPhoto = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % gallery.length);
  };

  useEffect(() => {
    const sliderElement = sliderRef.current;

    if (!sliderElement) {
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(Boolean(entry?.isIntersecting)),
      { threshold: 0.1 },
    );

    observer.observe(sliderElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateDocumentVisibility = () => {
      setIsDocumentVisible(document.visibilityState !== "hidden");
    };

    updateDocumentVisibility();
    document.addEventListener("visibilitychange", updateDocumentVisibility);
    return () => document.removeEventListener("visibilitychange", updateDocumentVisibility);
  }, []);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia(REDUCED_MOTION_QUERY);
    const updateMotionPreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updateMotionPreference);
      return () => mediaQuery.removeEventListener("change", updateMotionPreference);
    }

    mediaQuery.addListener(updateMotionPreference);
    return () => mediaQuery.removeListener(updateMotionPreference);
  }, []);

  useEffect(() => {
    if (
      !hasMultiplePhotos ||
      !isIntersecting ||
      !isDocumentVisible ||
      prefersReducedMotion ||
      isUserInteracting
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % gallery.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [
    gallery.length,
    hasMultiplePhotos,
    isDocumentVisible,
    isIntersecting,
    isUserInteracting,
    prefersReducedMotion,
  ]);

  if (!activePhoto) {
    return null;
  }

  return (
    <div
      ref={sliderRef}
      data-testid="project-photo-slider"
      className="project-photo-slider group/slider relative aspect-video overflow-hidden"
      onMouseEnter={() => setIsUserInteracting(true)}
      onMouseLeave={() => setIsUserInteracting(false)}
      onFocusCapture={() => setIsUserInteracting(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsUserInteracting(false);
        }
      }}
    >
      <Image
        key={activePhoto}
        src={activePhoto}
        alt={alt}
        fill
        sizes="(min-width: 1536px) 40rem, (min-width: 1024px) 46vw, 92vw"
        className="project-photo-image object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {hasMultiplePhotos ? (
        <>
          <button
            type="button"
            aria-label={formatTemplate(content.projectActions.previousProjectImage, { project: title })}
            onClick={showPreviousPhoto}
            className={cn(
              "absolute left-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
              "border border-white/15 bg-background/55 text-on-surface shadow-[0_0_22px_rgba(0,0,0,0.32)] backdrop-blur-md",
              "opacity-90 transition duration-300 hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:opacity-0 md:group-hover/slider:opacity-100 md:group-focus-within/slider:opacity-100",
            )}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label={formatTemplate(content.projectActions.nextProjectImage, { project: title })}
            onClick={showNextPhoto}
            className={cn(
              "absolute right-4 top-1/2 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full",
              "border border-white/15 bg-background/55 text-on-surface shadow-[0_0_22px_rgba(0,0,0,0.32)] backdrop-blur-md",
              "opacity-90 transition duration-300 hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:opacity-0 md:group-hover/slider:opacity-100 md:group-focus-within/slider:opacity-100",
            )}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </>
      ) : null}

      <div
        aria-label={formatTemplate(content.projectActions.imageSetLabel, {
          index: safeActiveIndex + 1,
          total: gallery.length,
          project: title,
        })}
        className="absolute bottom-4 left-5 flex gap-1.5 rounded-full bg-background/70 px-2.5 py-2 backdrop-blur-md"
      >
        {gallery.map((photo, index) => (
          <button
            key={`${photo}-indicator`}
            type="button"
            aria-label={formatTemplate(content.projectActions.viewProjectImage, {
              index: index + 1,
              project: title,
            })}
            aria-current={index === safeActiveIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-1.5 w-5 rounded-full transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary",
              index === safeActiveIndex
                ? "bg-tertiary shadow-[0_0_18px_rgba(76,215,246,0.42)]"
                : "bg-white/25",
            )}
          />
        ))}
      </div>
    </div>
  );
}
