"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "@/components/ui/icons";
import { cn } from "@/lib/cn";

const SLIDE_INTERVAL_MS = 4000;

type ProjectPhotoSliderProps = {
  gallery: readonly string[];
  alt: string;
  title: string;
};

export function ProjectPhotoSlider({
  gallery,
  alt,
  title,
}: ProjectPhotoSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
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
    if (!hasMultiplePhotos) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % gallery.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [gallery.length, hasMultiplePhotos]);

  if (!activePhoto) {
    return null;
  }

  return (
    <div className="group/slider relative aspect-video overflow-hidden">
      <Image
        key={activePhoto}
        src={activePhoto}
        alt={alt}
        fill
        sizes="(min-width: 1536px) 40rem, (min-width: 1024px) 46vw, 92vw"
        className="project-photo-image object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/55 to-transparent" />

      {hasMultiplePhotos ? (
        <>
          <button
            type="button"
            aria-label={`Ver imagen anterior de ${title}`}
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
            aria-label={`Ver imagen siguiente de ${title}`}
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
        aria-label={`Imagen ${safeActiveIndex + 1} de ${gallery.length} de ${title}`}
        className="absolute bottom-4 left-5 flex gap-1.5"
      >
        {gallery.map((photo, index) => (
          <button
            key={`${photo}-indicator`}
            type="button"
            aria-label={`Ver imagen ${index + 1} de ${title}`}
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
