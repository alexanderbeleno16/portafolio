"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon } from "@/components/ui/icons";
import { GlassPanel } from "@/components/ui/glass-panel";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { ProjectPhotoSlider } from "@/components/sections/project-photo-slider";
import { TechBadge } from "@/components/ui/tech-badge";
import type { projects } from "@/content/landing";
import { cn } from "@/lib/cn";

type Project = (typeof projects)[number];

const actionButtonClassName =
  "h-12 min-w-[7.5rem] flex-1 rounded-xl px-5 sm:flex-none sm:min-w-[8rem]";
const repositoryButtonClassName =
  "h-12 min-w-[7.5rem] flex-1 rounded-xl px-5 sm:flex-none sm:min-w-[8rem]";
const secondaryButtonClassName =
  "label-caps inline-flex h-12 min-w-[7.5rem] flex-1 items-center justify-center rounded-xl border border-white/15 px-5 text-on-surface transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary sm:flex-none sm:min-w-[8rem]";

function ProjectDemoAction({ project }: { project: Project }) {
  if ("demoStatus" in project && project.demoStatus === "offline") {
    return (
      <span
        role="link"
        aria-disabled="true"
        aria-label={`Demo de ${project.title} no disponible`}
        className={cn(
          "label-caps relative inline-flex h-12 min-w-[7.5rem] flex-1 items-center justify-center rounded-xl px-5 sm:flex-none sm:min-w-[8rem]",
          "border border-white/15 bg-white/[0.08] text-on-surface-variant shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]",
        )}
      >
        {project.primaryAction}
        <span
          aria-hidden="true"
          className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-surface shadow-[0_0_14px_rgba(239,68,68,0.85)]"
        />
      </span>
    );
  }

  return (
    <ButtonLink
      href={"demoHref" in project ? project.demoHref : "#contacto"}
      target={"demoHref" in project ? "_blank" : undefined}
      ariaLabel={`Abrir demo de ${project.title}`}
      className={actionButtonClassName}
    >
      {project.primaryAction}
    </ButtonLink>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <>
      <GlassPanel
        as="article"
        className="reveal group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-tertiary/30"
      >
        <ProjectPhotoSlider
          gallery={project.gallery}
          alt={project.alt}
          title={project.title}
        />

        <div className="flex flex-1 flex-col p-7 md:p-8">
          <h3 className="text-3xl font-bold tracking-[-0.05em] text-on-surface">
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              aria-label={`Ver detalle de ${project.title}`}
              className="text-left transition hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
            >
              {project.title}
            </button>
          </h3>
          <p className="mt-4 leading-7 text-on-surface-variant">
            {project.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TechBadge
                key={tag}
                name={tag}
                className="font-mono text-[0.65rem]"
              />
            ))}
          </div>
          <div className="mt-auto flex min-h-[4.5rem] flex-wrap items-center gap-3 pt-7 sm:gap-4">
            <ProjectDemoAction project={project} />
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              className={secondaryButtonClassName}
              aria-label={`Ver detalle de ${project.title}`}
            >
              Detalle
            </button>
            <ButtonLink
              href="#contacto"
              variant="secondary"
              ariaLabel={`Código privado de ${project.title}`}
              className={cn("gap-2", repositoryButtonClassName)}
            >
              <GitHubIcon className="h-4 w-4" />
              Privado
            </ButtonLink>
          </div>
        </div>
      </GlassPanel>

      <ProjectDetailModal
        project={project}
        isOpen={isDetailOpen}
        onClose={() => setIsDetailOpen(false)}
      />
    </>
  );
}
