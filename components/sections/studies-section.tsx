import type { SVGProps } from "react";

import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";

type StudyIconName = "graduation" | "shield" | "code" | "terminal";
type IconProps = SVGProps<SVGSVGElement>;

const studies = [
  {
    icon: "graduation",
    title: "Ingeniería de Sistemas y Computación",
    institution: "Corporación Universitaria Latinoamericana CUL",
    location: "Colombia, Barranquilla",
    year: "Diciembre 2024",
    description:
      "Formación universitaria en desarrollo de software, arquitectura, gestión de proyectos tecnológicos y soluciones computacionales.",
  },
  {
    icon: "shield",
    title: "Diplomado seguridad en redes informáticas",
    institution: "Corporación Universitaria Latinoamericana CUL",
    location: "Colombia, Barranquilla",
    year: "Diciembre 2024",
    description:
      "Profundización en protección de infraestructura, redes, controles de seguridad y buenas prácticas defensivas.",
  },
  {
    icon: "code",
    title: "Tecnólogo en análisis y desarrollo de sistemas de información",
    institution: "Servicio Nacional de Aprendizaje SENA",
    location: "Colombia, Barranquilla",
    year: "Mayo 2021",
    description:
      "Base técnica en análisis, diseño, construcción y mantenimiento de sistemas de información.",
  },
  {
    icon: "terminal",
    title: "Técnico en desarrollo de software",
    institution: "Servicio Nacional de Aprendizaje SENA",
    location: "Colombia, Barranquilla",
    year: "Diciembre 2018",
    description:
      "Fundamentos prácticos de programación, paradigmas de desarrollo, bases de datos, lógica y construcción de aplicaciones.",
  },
] as const satisfies readonly {
  icon: StudyIconName;
  title: string;
  institution: string;
  location: string;
  year: string;
  description: string;
}[];

function StudyIcon({ name, ...props }: IconProps & { name: StudyIconName }) {
  if (name === "graduation") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="m3 8 9-4 9 4-9 4-9-4Z" />
        <path d="m7 10.5v4.25c0 1.8 2.24 3.25 5 3.25s5-1.45 5-3.25V10.5" />
        <path d="M21 8v5" />
      </svg>
    );
  }

  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="M12 3 5 6v5c0 4.6 2.9 8.6 7 10 4.1-1.4 7-5.4 7-10V6l-7-3Z" />
        <path d="m9.5 12 1.7 1.7 3.8-4" />
      </svg>
    );
  }

  if (name === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m13.5 5-3 14" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m8 10 2.5 2L8 14" />
      <path d="M13 14h4" />
    </svg>
  );
}

export function StudiesSection() {
  return (
    <section id="estudios" className="section-shell" aria-labelledby="studies-title">
      <SectionHeading
        titleId="studies-title"
        align="center"
        eyebrow="Formación"
        title={<>Mis <span className="text-gradient-blue">Estudios</span></>}
        description="Bases académicas y técnicas que sostienen mi trabajo como ingeniero de software."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 md:grid-cols-2">
        {studies.map((study) => (
          <GlassPanel
            key={study.title}
            as="article"
            className="reveal flex gap-4 p-5 transition duration-300 hover:-translate-y-1 hover:border-tertiary/30 md:p-6"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-tertiary/10 text-tertiary shadow-[inset_0_0_0_1px_rgba(76,215,246,0.22)]">
              <StudyIcon name={study.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-1">
                <h3 className="min-w-0 text-lg font-bold leading-6 tracking-[-0.025em] text-on-surface">
                  {study.title}
                </h3>
                <span className="shrink-0 justify-self-end whitespace-nowrap rounded-full bg-tertiary/10 px-3 py-1 text-xs font-bold text-tertiary shadow-[inset_0_0_0_1px_rgba(76,215,246,0.2)]">
                  {study.year}
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold leading-6 text-on-surface">
                {study.institution}
              </p>
              <p className="text-sm leading-6 text-on-surface-variant">
                {study.location}
              </p>
              <p className="mt-3 text-sm leading-6 text-on-surface-variant">
                {study.description}
              </p>
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
