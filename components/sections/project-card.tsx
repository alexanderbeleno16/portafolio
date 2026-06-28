"use client";

import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { useLanguage } from "@/components/language/language-provider";
import { ProjectDetailModal } from "@/components/sections/project-detail-modal";
import { ProjectPhotoSlider } from "@/components/sections/project-photo-slider";
import { TechBadge } from "@/components/ui/tech-badge";
import type { Project } from "@/content/landing";

function formatTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}

const actionButtonClassName =
  "h-12 min-w-[7.5rem] flex-1 rounded-full px-5 sm:flex-none sm:min-w-[8rem]";
const secondaryButtonClassName =
  "inline-flex h-12 min-w-[7.5rem] flex-1 items-center justify-center rounded-full border border-white/15 px-5 text-sm font-bold tracking-[-0.01em] text-on-surface transition duration-300 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary sm:flex-none sm:min-w-[8rem]";

function ProjectDemoAction({ project }: { project: Project }) {
  const { content } = useLanguage();

  if (!("demoHref" in project) || !project.demoHref) {
    return null;
  }

  return (
    <ButtonLink
      href={project.demoHref}
      target="_blank"
      ariaLabel={formatTemplate(content.projectActions.openDemo, { project: project.title })}
      className={actionButtonClassName}
    >
      {project.primaryAction}
    </ButtonLink>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const { content } = useLanguage();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const viewDetailLabel = formatTemplate(content.projectActions.viewDetail, {
    project: project.title,
  });

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
              aria-label={viewDetailLabel}
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
              aria-label={viewDetailLabel}
            >
              {content.projectActions.detail}
            </button>
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
