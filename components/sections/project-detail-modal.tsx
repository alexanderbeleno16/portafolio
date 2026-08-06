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
const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

function formatTemplate(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

function getFocusableElements(container: HTMLElement | null) {
  if (!container) {
    return [];
  }

  return Array.from(container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("hidden") && element.getAttribute("aria-hidden") !== "true",
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
  const dialogRef = useRef<HTMLElement>(null);
  const fullscreenDialogRef = useRef<HTMLDivElement>(null);
  const closeModalButtonRef = useRef<HTMLButtonElement>(null);
  const closeFullscreenButtonRef = useRef<HTMLButtonElement>(null);
  const fullscreenTriggerRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement>(null);
  const wasFullscreenOpenRef = useRef(false);
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
    const activeElement = document.activeElement;

    previouslyFocusedElementRef.current =
      activeElement instanceof HTMLElement ? activeElement : null;
    document.body.style.overflow = "hidden";
    closeModalButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocusedElementRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleDialogKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();

        if (isFullscreenOpen) {
          closeFullscreen();
          return;
        }

        closeModal();
        return;
      }

      if (event.key === "Tab") {
        const focusScope = isFullscreenOpen
          ? fullscreenDialogRef.current
          : dialogRef.current;
        const focusableElements = getFocusableElements(focusScope);

        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        const activeElement = document.activeElement;
        const focusIsOutsideScope =
          !(activeElement instanceof Node) || !focusScope?.contains(activeElement);

        if (event.shiftKey && (activeElement === firstElement || focusIsOutsideScope)) {
          event.preventDefault();
          lastElement.focus();
          return;
        }

        if (!event.shiftKey && (activeElement === lastElement || focusIsOutsideScope)) {
          event.preventDefault();
          firstElement.focus();
          return;
        }
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

    document.addEventListener("keydown", handleDialogKeyDown);

    return () => {
      document.removeEventListener("keydown", handleDialogKeyDown);
    };
  }, [
    closeFullscreen,
    closeModal,
    isFullscreenOpen,
    isOpen,
    showNextImage,
    showPreviousImage,
  ]);

  useEffect(() => {
    if (isFullscreenOpen) {
      wasFullscreenOpenRef.current = true;
      closeFullscreenButtonRef.current?.focus();
      return;
    }

    if (wasFullscreenOpenRef.current) {
      wasFullscreenOpenRef.current = false;
      fullscreenTriggerRef.current?.focus();
    }
  }, [isFullscreenOpen, fullscreenIndex]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-0 sm:px-4 sm:py-6">
      <button
        type="button"
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 cursor-default bg-background/90"
        onClick={closeModal}
      />

      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        aria-hidden={isFullscreenOpen || undefined}
        className="project-modal-window relative z-10 flex h-[100dvh] max-h-[100dvh] w-full flex-col overflow-hidden border border-white/10 bg-[#101114] shadow-[0_32px_120px_rgba(0,0,0,0.62)] sm:h-auto sm:max-h-[88vh] sm:max-w-6xl sm:rounded-[1.5rem]"
      >
        <div className="project-modal-titlebar relative flex min-h-14 shrink-0 items-center border-b border-white/10 bg-[#1b1d21] px-4">
          <div className="flex items-center gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full border border-black/20 bg-[#ff5f57] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]" />
            <span className="h-3 w-3 rounded-full border border-black/20 bg-[#febc2e] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]" />
            <span className="h-3 w-3 rounded-full border border-black/20 bg-[#28c840] shadow-[inset_0_1px_0_rgba(255,255,255,0.28)]" />
          </div>
          <p className="pointer-events-none absolute left-1/2 max-w-[52%] -translate-x-1/2 truncate font-mono text-xs font-medium tracking-[0.02em] text-white/60 sm:max-w-[62%]">
            {project.title}
          </p>
          <button
            ref={closeModalButtonRef}
            type="button"
            aria-label={projectActions.closeModal}
            onClick={closeModal}
            className="ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-on-surface transition-colors duration-200 hover:border-white/20 hover:bg-white/[0.08] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="project-modal-content min-h-0 flex-1 overflow-y-auto px-5 py-6 md:px-8 md:py-8">
          <header>
            <p className="label-caps text-tertiary">{projectActions.projectDetailLabel}</p>
            <h3
              id={titleId}
              className="mt-3 text-3xl font-black tracking-[-0.05em] text-on-surface md:text-5xl"
            >
              {project.title}
            </h3>
            <p
              id={descriptionId}
              className="mt-5 max-w-4xl text-lg leading-8 text-on-surface-variant"
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
          </header>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {visibleGallery.map((photo, index) => (
              <figure
                key={`${photo}-modal`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#090a0c]"
              >
                <button
                  type="button"
                  onClick={(event) => {
                    fullscreenTriggerRef.current = event.currentTarget;
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
                    className="object-contain p-2 transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <span className="label-caps absolute bottom-3 right-3 rounded-full border border-white/15 bg-[#101114]/95 px-3 py-2 text-xs text-on-surface">
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
          ref={fullscreenDialogRef}
          className="project-fullscreen-gallery fixed inset-0 z-[90] flex flex-col bg-background/98 px-4 py-5"
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
              className="absolute left-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-surface text-on-surface shadow-lg transition-colors hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:left-4"
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
              className="absolute right-0 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-surface text-on-surface shadow-lg transition-colors hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary md:right-4"
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
