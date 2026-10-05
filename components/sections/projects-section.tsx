"use client";

import { useState } from "react";

import { useLanguage } from "@/components/language/language-provider";
import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";
import { externalLinks, projectCategories, type ProjectCategory } from "@/content/landing";

export function ProjectsSection() {
  const { content } = useLanguage();
  const [category, setCategory] = useState<ProjectCategory | "all">("all");
  const [layout, setLayout] = useState<"cards" | "list">("cards");
  const labels = content.projectsSection;
  const visibleProjects = content.projects.filter(
    (project) => category === "all" || project.category === category,
  );
  const filterOptions = [
    { id: "all" as const, label: labels.allLabel, count: content.projects.length },
    ...projectCategories.map((id) => ({
      id, label: labels.categories[id],
      count: content.projects.filter((project) => project.category === id).length,
    })),
  ];
  const controlClass = (active: boolean, iconOnly = false) => cn(
    "inline-flex min-h-10 items-center justify-center gap-2 rounded-full border text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary",
    iconOnly ? "h-10 w-10 px-0" : "px-4",
    active ? "border-tertiary/60 bg-tertiary/10 text-tertiary" : "border-white/15 bg-white/[0.03] text-on-surface-variant hover:border-white/30 hover:text-on-surface",
  );

  return (
    <section id="proyectos" className="section-shell" aria-labelledby="projects-title">
      <SectionHeading
        titleId="projects-title"
        align="center"
        title={<>{content.projectsSection.titlePrefix}{" "}<span className="text-gradient-blue">{content.projectsSection.titleHighlight}</span></>}
        description={content.projectsSection.description}
      />

      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div role="group" aria-label={labels.filterLabel} className="flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              aria-pressed={category === option.id}
              onClick={() => setCategory(option.id)}
              className={controlClass(category === option.id)}
            >
              {option.label}{" "}
              <span className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1 text-xs">{option.count}</span>
            </button>
          ))}
        </div>
        <div role="group" aria-label={labels.viewLabel} className="hidden gap-1 rounded-full border border-white/10 p-1 md:flex">
          {(["cards", "list"] as const).map((view) => (
            <button
              key={view}
              type="button"
              aria-label={view === "cards" ? labels.cardsLabel : labels.listLabel}
              title={view === "cards" ? labels.cardsLabel : labels.listLabel}
              aria-pressed={layout === view}
              onClick={() => setLayout(view)}
              className={controlClass(layout === view, true)}
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                {view === "cards" ? <path d="M2 2h6v6H2zM12 2h6v6h-6zM2 12h6v6H2zM12 12h6v6h-6z" /> : <path d="M2 4h2m3 0h11M2 10h2m3 0h11M2 16h2m3 0h11" />}
              </svg>
            </button>
          ))}
        </div>
      </div>
      <p role="status" aria-live="polite" aria-atomic="true" className="mt-3 text-sm text-on-surface-variant sm:text-right">
        {labels.resultCount.replace("{count}", String(visibleProjects.length))}
      </p>
      <div className={cn("mt-5 grid gap-6", layout === "cards" && "md:grid-cols-2 md:auto-rows-fr")}>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} layout={layout} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonLink
          href={externalLinks.githubRepositories}
          target="_blank"
          variant="secondary"
          className="gap-3 px-8"
        >
          <GitHubIcon className="h-5 w-5" />
          {content.projectsSection.moreLabel}
        </ButtonLink>
      </div>
    </section>
  );
}
