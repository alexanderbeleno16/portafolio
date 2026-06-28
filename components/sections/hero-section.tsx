"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/components/language/language-provider";
import { HeroEyebrowLoop } from "@/components/sections/hero-eyebrow-loop";
import { ButtonLink } from "@/components/ui/button-link";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/landing";

function useHeroVisibility() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [isHeroActive, setIsHeroActive] = useState(true);

  useEffect(() => {
    const heroElement = heroRef.current;

    if (!heroElement || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroActive(Boolean(entry?.isIntersecting));
      },
      {
        root: null,
        threshold: 0.01,
      },
    );

    observer.observe(heroElement);

    return () => {
      observer.disconnect();
    };
  }, []);

  return { heroRef, isHeroActive };
}

export function HeroSection() {
  const { content, language } = useLanguage();
  const hero = content.hero;
  const { heroRef, isHeroActive } = useHeroVisibility();

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="hero-grid relative isolate min-h-[100svh] overflow-hidden pt-24"
      data-hero-active={isHeroActive}
      aria-labelledby="hero-title"
    >
      <div className="glow-orb absolute left-[8%] top-[18%] -z-10 h-72 w-72 rounded-full bg-secondary-container/25" />
      <div className="glow-orb absolute bottom-[10%] right-[10%] -z-10 h-96 w-96 rounded-full bg-tertiary/15 [animation-delay:900ms]" />

      <div className="page-container grid min-h-[calc(100svh-6rem)] items-center gap-12 py-12 text-center lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-16">
        <div className="motion-rise motion-delay-2 hero-glass-stage relative mx-auto w-[min(74vw,18rem)] sm:w-full sm:max-w-[560px] lg:order-1 lg:max-w-[34rem] xl:max-w-[36rem]">
          <div className="hero-glass-aurora hero-glass-aurora-one" aria-hidden="true" />
          <div className="hero-glass-aurora hero-glass-aurora-two" aria-hidden="true" />
          <div className="hero-glass-aurora hero-glass-aurora-three" aria-hidden="true" />
          <div className="glass-panel micro-border group relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-square">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              priority
              sizes="(min-width: 1536px) 36rem, (min-width: 1024px) 40vw, (min-width: 640px) 560px, 74vw"
              className="object-cover object-center opacity-95 saturate-110 transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
          </div>
          <div className="absolute left-1/2 top-1/2 -z-10 h-[115%] w-[115%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary-container/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-[52rem] px-2 lg:order-2">
          <p className="hero-eyebrow motion-rise label-caps inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.055] px-4 py-2 text-tertiary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
            <HeroEyebrowLoop key={language} texts={hero.eyebrowTexts} isActive={isHeroActive} />
          </p>

          <h1
            id="hero-title"
            className="motion-rise motion-delay-1 mt-7 text-balance text-[clamp(3.4rem,9vw,6.6rem)] font-extrabold leading-[0.88] tracking-[-0.075em] text-on-surface"
          >
            {hero.title}{" "}
            <span className="text-gradient-blue px-[0.04em] text-[clamp(2.75rem,7.4vw,5.65rem)] sm:whitespace-nowrap">
              {hero.name}
            </span>
          </h1>

          <p className="motion-rise motion-delay-2 body-large mx-auto mt-7 max-w-2xl text-pretty text-on-surface-variant">
            {hero.summary}
          </p>

          <div className="motion-rise motion-delay-3 mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <ButtonLink href="#proyectos" className="w-full sm:w-auto">
              {hero.projectsCta}
            </ButtonLink>
            <div className="flex items-center justify-center gap-3 sm:justify-start">
              <ButtonLink
                href="#contacto"
                variant="secondary"
                ariaLabel={hero.contactAriaLabel}
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
      </div>
    </section>
  );
}
