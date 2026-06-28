"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { Project } from "@/content/landing";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XIcon,
} from "@/components/ui/icons";
import { ButtonLink } from "@/components/ui/button-link";
import { useLanguage } from "@/components/language/language-provider";
import { TechBadge } from "@/components/ui/tech-badge";

type ProjectDetailModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

const MIN_ZOOM_LEVEL = 0.75;
const MAX_ZOOM_LEVEL = 2;
const ZOOM_STEP = 0.25;
const INITIAL_VISIBLE_GALLERY_ITEMS = 6;
const GALLERY_ITEMS_BATCH = 4;

function formatTemplate(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const { content } = useLanguage();
  const projectActions = content.projectActions;
  const titleId = useId();
  const descriptionId = useId();
  const [fullscreenIndex, setFullscreenIndex] = useState<number | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [expandedGalleryBatches, setExpandedGalleryBatches] = useState(0);
  const closeFullscreenButtonRef = useRef<HTMLButtonElement>(null);
  const isFullscreenOpen = fullscreenIndex !== null;
  const visibleGalleryCount = Math.min(
    project.gallery.length,
    INITIAL_VISIBLE_GALLERY_ITEMS + expandedGalleryBatches * GALLERY_ITEMS_BATCH,
  );
  const hasHiddenGalleryItems = visibleGalleryCount < project.gallery.length;
  const visibleGallery = project.gallery.slice(0, visibleGalleryCount);

  const closeFullscreen = useCallback(() => {
    setFullscreenIndex(null);
    setZoomLevel(1);
  }, []);

  const closeModal = useCallback(() => {
    closeFullscreen();
    setExpandedGalleryBatches(0);
    onClose();
  }, [closeFullscreen, onClose]);

  const showPreviousImage = useCallback(() => {
    setFullscreenIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      setZoomLevel(1);
      return (currentIndex - 1 + project.gallery.length) % project.gallery.length;
    });
  }, [project.gallery.length]);

  const showNextImage = useCallback(() => {
    setFullscreenIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex;
      }

      setZoomLevel(1);
      return (currentIndex + 1) % project.gallery.length;
    });
  }, [project.gallery.length]);

  const zoomOut = () => {
    setZoomLevel((currentZoom) => Math.max(MIN_ZOOM_LEVEL, currentZoom - ZOOM_STEP));
  };

  const zoomIn = () => {
    setZoomLevel((currentZoom) => Math.min(MAX_ZOOM_LEVEL, currentZoom + ZOOM_STEP));
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        if (isFullscreenOpen) {
          closeFullscreen();
          return;
        }

        closeModal();
      }

      if (!isFullscreenOpen) {
        return;
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [
    closeFullscreen,
    isFullscreenOpen,
    isOpen,
    closeModal,
    showNextImage,
    showPreviousImage,
  ]);

  useEffect(() => {
    if (isFullscreenOpen) {
      closeFullscreenButtonRef.current?.focus();
    }
  }, [isFullscreenOpen, fullscreenIndex]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label={formatTemplate(projectActions.closeDetail, { project: project.title })}
        className="absolute inset-0 cursor-default bg-background/85 backdrop-blur-md"
        onClick={closeModal}
      />

      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative z-10 flex max-h-[88vh] w-full max-w-6xl flex-col overflow-hidden rounded-3xl border border-tertiary/25 bg-surface shadow-[0_32px_120px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-5 py-5 md:px-7">
          <div>
            <p className="label-caps text-tertiary">{projectActions.projectDetailLabel}</p>
            <h3
              id={titleId}
              className="mt-2 text-3xl font-black tracking-[-0.05em] text-on-surface md:text-5xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label={projectActions.closeModal}
            onClick={closeModal}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-on-surface transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 md:px-7 md:py-8">
          <div>
            <p
              id={descriptionId}
              className="max-w-4xl text-lg leading-8 text-on-surface-variant"
            >
              {project.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <TechBadge
                  key={tag}
                  name={tag}
                  className="font-mono text-[0.65rem]"
                />
              ))}
            </div>
            {"demoHref" in project && project.demoHref ? (
              <div className="mt-6">
                <ButtonLink
                  href={project.demoHref}
                  target="_blank"
                  ariaLabel={formatTemplate(projectActions.openDemo, { project: project.title })}
                  className="h-12 min-w-[8rem] rounded-full px-5"
                >
                  Demo
                </ButtonLink>
              </div>
            ) : null}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleGallery.map((photo, index) => (
              <figure
                key={`${photo}-modal`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-background/70"
              >
                <button
                  type="button"
                  onClick={() => {
                    setFullscreenIndex(index);
                    setZoomLevel(1);
                  }}
                  className="group relative block aspect-video w-full overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                  aria-label={formatTemplate(projectActions.openCapture, {
                    index: index + 1,
                    project: project.title,
                  })}
                >
                  <Image
                    src={photo}
                    alt={formatTemplate(projectActions.captureAlt, {
                      index: index + 1,
                      project: project.title,
                    })}
                    fill
                    sizes="(min-width: 1536px) 36rem, (min-width: 768px) 44vw, 92vw"
                    className="object-contain p-2 transition duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="label-caps absolute bottom-3 right-3 rounded-full border border-white/15 bg-background/80 px-3 py-2 text-xs text-on-surface backdrop-blur-md">
                    {projectActions.expand}
                  </span>
                </button>
                <figcaption className="label-caps border-t border-white/10 px-4 py-3 text-on-surface-variant">
                  {formatTemplate(projectActions.imageCount, {
                    index: index + 1,
                    total: project.gallery.length,
                  })}
                </figcaption>
              </figure>
            ))}
          </div>

          {hasHiddenGalleryItems ? (
            <div className="mt-5 flex justify-center">
              <button
                type="button"
                onClick={() => {
                  setExpandedGalleryBatches((currentBatches) => {
                    return currentBatches + 1;
                  });
                }}
                className="label-caps inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 text-on-surface transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                {formatTemplate(projectActions.showMoreCaptures, {
                  count: project.gallery.length - visibleGalleryCount,
                })}
              </button>
            </div>
          ) : null}
        </div>
      </section>

      {isFullscreenOpen && (
        <div
          className="fixed inset-0 z-[90] flex flex-col bg-background/95 px-4 py-5 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={formatTemplate(projectActions.fullscreenGallery, { project: project.title })}
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
            <p className="label-caps text-on-surface-variant">
              {formatTemplate(projectActions.imageCount, {
                index: (fullscreenIndex ?? 0) + 1,
                total: project.gallery.length,
              })}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={zoomOut}
                disabled={zoomLevel <= MIN_ZOOM_LEVEL}
                className="label-caps inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-on-surface transition hover:border-tertiary/60 hover:text-tertiary disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                {projectActions.zoomOut}
              </button>
              <button
                type="button"
                onClick={zoomIn}
                disabled={zoomLevel >= MAX_ZOOM_LEVEL}
                className="label-caps inline-flex h-10 items-center justify-center rounded-full border border-white/15 px-4 text-on-surface transition hover:border-tertiary/60 hover:text-tertiary disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                {projectActions.zoomIn}
              </button>
              <button
                ref={closeFullscreenButtonRef}
                type="button"
                aria-label={projectActions.closeFullscreen}
                onClick={closeFullscreen}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-on-surface transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                <XIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden py-5">
            <button
              type="button"
              onClick={showPreviousImage}
              aria-label={projectActions.previousImage}
              className="absolute left-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-surface/75 text-on-surface shadow-lg backdrop-blur-md transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:left-4"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>

            <div className="relative h-full w-full max-w-6xl overflow-auto rounded-2xl border border-white/10 bg-black/20">
              <div
                className="relative h-full min-h-[28rem] w-full transition-transform duration-200"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <Image
                  src={project.gallery[fullscreenIndex ?? 0]}
                  alt={formatTemplate(projectActions.expandedCaptureAlt, {
                    index: (fullscreenIndex ?? 0) + 1,
                    project: project.title,
                  })}
                  fill
                  sizes="(min-width: 1536px) 1200px, (min-width: 1024px) calc(100vw - 8rem), calc(100vw - 2rem)"
                  className="object-contain p-4"
                />
              </div>
            </div>

            <button
              type="button"
              onClick={showNextImage}
              aria-label={projectActions.nextImage}
              className="absolute right-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-surface/75 text-on-surface shadow-lg backdrop-blur-md transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:right-4"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>,
    document.body,
  );
}
