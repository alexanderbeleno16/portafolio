import Image from "next/image";

import { HeroEyebrowLoop } from "@/components/sections/hero-eyebrow-loop";
import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { externalLinks, hero } from "@/content/landing";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="hero-grid relative isolate min-h-[100svh] overflow-hidden pt-20"
      aria-labelledby="hero-title"
    >
      <div className="glow-orb absolute left-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-secondary-container/25" />
      <div className="glow-orb absolute bottom-[10%] right-[10%] -z-10 h-96 w-96 rounded-full bg-tertiary/15 [animation-delay:900ms]" />

      <div className="page-container grid min-h-[calc(100svh-5rem)] items-center gap-10 py-10 text-center sm:py-14 lg:grid-cols-[1fr_0.95fr] lg:gap-12 lg:py-20 lg:text-left">
        <div className="mx-auto max-w-[34rem] lg:mx-0 lg:max-w-2xl">
          <p className="hero-eyebrow motion-rise label-caps inline-flex max-w-full rounded-full border border-tertiary/30 bg-tertiary/10 px-3 py-2 text-tertiary">
            <HeroEyebrowLoop />
          </p>

          <h1
            id="hero-title"
            className="motion-rise motion-delay-1 mt-7 text-balance text-[clamp(2.75rem,13vw,5.4rem)] font-extrabold leading-[0.95] tracking-[-0.065em] text-on-surface"
          >
            {hero.title}{" "}
            <span className="block text-[clamp(2.45rem,11vw,4.75rem)] text-tertiary sm:whitespace-nowrap">
              {hero.name}
            </span>
          </h1>

          <p className="motion-rise motion-delay-2 body-large mt-7 max-w-xl text-on-surface-variant">
            {hero.summary}
          </p>

          <div className="motion-rise motion-delay-3 mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <ButtonLink href="#proyectos" className="attention-cta w-full sm:w-auto">
              Ver proyectos
            </ButtonLink>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <ButtonLink
                href="#contacto"
                variant="secondary"
                ariaLabel="Correo"
                className="h-12 w-12 !px-0"
              >
                <MailIcon className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href={externalLinks.github}
                target="_blank"
                variant="secondary"
                ariaLabel="GitHub"
                className="h-12 w-12 !px-0"
              >
                <GitHubIcon className="h-5 w-5" />
              </ButtonLink>
              <ButtonLink
                href={externalLinks.linkedin}
                target="_blank"
                variant="secondary"
                ariaLabel="LinkedIn"
                className="h-12 w-12 !px-0"
              >
                <LinkedInIcon className="h-5 w-5" />
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="motion-rise motion-delay-2 relative mx-auto w-full max-w-[27rem] sm:max-w-[600px] lg:max-w-[34rem] xl:max-w-[38rem]">
          <div className="glass-panel micro-border group relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-square">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1536px) 38rem, (min-width: 1024px) 40vw, 90vw"
              className="object-cover object-center opacity-95 saturate-110 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/10 blur-[120px]" />
        </div>
      </div>
    </section>
  );
}
