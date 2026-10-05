"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { GlassPanel } from "@/components/ui/glass-panel";
import { useLanguage } from "@/components/language/language-provider";
import { ProjectPhotoSlider } from "@/components/sections/project-photo-slider";
import { TechBadge } from "@/components/ui/tech-badge";
import { cn } from "@/lib/cn";
import type { Project } from "@/content/landing";

const loadProjectDetailModal = () =>
  import("@/components/sections/project-detail-modal");
const ProjectDetailModal = dynamic(
  () => loadProjectDetailModal().then((module) => module.ProjectDetailModal),
  { ssr: false },
);

function formatTemplate(template: string, values: Record<string, string>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, value),
    template,
  );
}

const actionButtonClassName =
  "h-10 min-w-[6rem] rounded-xl px-5";
const secondaryButtonClassName =
  "inline-flex h-10 min-w-[6rem] items-center justify-center rounded-xl border border-white/15 px-5 text-sm font-bold tracking-[-0.01em] text-on-surface transition duration-300 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary";

function ProjectDemoAction({
  project,
  ariaLabel,
}: {
  project: Project;
  ariaLabel: string;
}) {
  if (!("demoHref" in project) || !project.demoHref) {
    return null;
  }

  return (
    <ButtonLink
      href={project.demoHref}
      target="_blank"
      ariaLabel={ariaLabel}
      className={actionButtonClassName}
    >
      {project.primaryAction}
    </ButtonLink>
  );
}

export function ProjectCard({ project, layout = "cards" }: {
  project: Project;
  layout?: "cards" | "list";
}) {
  const { content } = useLanguage();
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const viewDetailLabel = formatTemplate(content.projectActions.viewDetail, {
    project: project.title,
  });
  const openDemoLabel = formatTemplate(content.projectActions.openDemo, {
    project: project.title,
  });
  const preloadProjectDetail = () => {
    void loadProjectDetailModal();
  };

  return (
    <>
      <GlassPanel
        as="article"
        data-layout={layout}
        className={cn(
          "reveal group flex h-full min-w-0 flex-col overflow-hidden p-3 transition duration-300 hover:-translate-y-1 hover:border-tertiary/30",
          layout === "list" && "md:flex-row md:items-center md:gap-6",
        )}
      >
        <div className={cn("overflow-hidden rounded-xl", layout === "list" && "md:w-80 md:shrink-0")}>
          <ProjectPhotoSlider
            gallery={project.gallery}
            alt={project.alt}
            title={project.title}
          />
        </div>

        <div className="flex min-w-0 flex-1 flex-col px-1 pb-1 pt-4">
          <p className="mb-1 text-xs text-on-surface-variant">{content.projectsSection.categories[project.category]}</p>
          <h3 className="text-[22px] leading-tight font-bold tracking-[-0.05em] text-on-surface">
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              onFocus={preloadProjectDetail}
              onPointerEnter={preloadProjectDetail}
              aria-label={viewDetailLabel}
              className="text-left transition hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
            >
              {project.title}
            </button>
          </h3>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-on-surface-variant">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <TechBadge
                key={tag}
                name={tag}
                className="font-mono text-[0.65rem]"
              />
            ))}
            {project.tags.length > 4 ? (
              <button
                type="button"
                onClick={() => setIsDetailOpen(true)}
                onFocus={preloadProjectDetail}
                onPointerEnter={preloadProjectDetail}
                className="rounded text-xs text-on-surface-variant transition hover:text-tertiary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                {content.projectsSection.moreTechnologies.replace("{count}", String(project.tags.length - 4))}
              </button>
            ) : null}
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-3 pt-4">
            <ProjectDemoAction project={project} ariaLabel={openDemoLabel} />
            <button
              type="button"
              onClick={() => setIsDetailOpen(true)}
              onFocus={preloadProjectDetail}
              onPointerEnter={preloadProjectDetail}
              className={secondaryButtonClassName}
              aria-label={viewDetailLabel}
            >
              {content.projectActions.detail}
            </button>
          </div>
        </div>
      </GlassPanel>

      {isDetailOpen ? (
        <ProjectDetailModal
          project={project}
          isOpen
          onClose={() => setIsDetailOpen(false)}
        />
      ) : null}
    </>
  );
}
