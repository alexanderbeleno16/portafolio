import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon } from "@/components/ui/icons";
import { ProjectCard } from "@/components/sections/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { externalLinks, projects } from "@/content/landing";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="section-shell" aria-labelledby="projects-title">
      <SectionHeading
        titleId="projects-title"
        align="center"
        title={<>Proyectos <span className="text-gradient-blue">Destacados</span></>}
        description="Casos diseñados como sistemas: producto, datos, infraestructura y experiencia visual funcionando en una sola pieza."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:auto-rows-fr">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
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
          Ver más
        </ButtonLink>
      </div>
    </section>
  );
}
