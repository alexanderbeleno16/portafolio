"use client";

import Image from "next/image";
import { useEffect, useId } from "react";
import { createPortal } from "react-dom";

import type { projects } from "@/content/landing";
import { XIcon } from "@/components/ui/icons";
import { TechBadge } from "@/components/ui/tech-badge";

type Project = (typeof projects)[number];

type ProjectDetailModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export function ProjectDetailModal({
  project,
  isOpen,
  onClose,
}: ProjectDetailModalProps) {
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen || typeof document === "undefined") {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center px-4 py-6">
      <button
        type="button"
        aria-label={`Cerrar detalle de ${project.title}`}
        className="absolute inset-0 cursor-default bg-background/85 backdrop-blur-md"
        onClick={onClose}
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
            <p className="label-caps text-tertiary">Detalle del proyecto</p>
            <h3
              id={titleId}
              className="mt-2 text-3xl font-black tracking-[-0.05em] text-on-surface md:text-5xl"
            >
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            aria-label="Cerrar modal"
            onClick={onClose}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.05] text-on-surface transition hover:border-tertiary/60 hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-6 md:px-7 md:py-8">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p
                id={descriptionId}
                className="text-lg leading-8 text-on-surface-variant"
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
            </div>

            <div className="rounded-2xl border border-white/10 bg-background/45 p-4">
              <p className="label-caps text-tertiary">Galería completa</p>
              <p className="mt-2 text-sm leading-6 text-on-surface-variant">
                Todas las capturas del proyecto visibles sin recortes.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {project.gallery.map((photo, index) => (
              <figure
                key={`${photo}-modal`}
                className="overflow-hidden rounded-2xl border border-white/10 bg-background/70"
              >
                <div className="relative aspect-video">
                  <Image
                    src={photo}
                    alt={`${project.title} — captura ${index + 1}`}
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-contain p-2"
                  />
                </div>
                <figcaption className="label-caps border-t border-white/10 px-4 py-3 text-on-surface-variant">
                  Imagen {index + 1} de {project.gallery.length}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}
