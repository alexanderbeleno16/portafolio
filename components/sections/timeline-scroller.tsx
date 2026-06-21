"use client";

import { type CSSProperties, useEffect, useRef, useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

type TimelineItem = {
  period: string;
  role: string;
  description: readonly string[];
};

type TimelineScrollerProps = {
  items: readonly TimelineItem[];
};

const COLLAPSED_POINTS = 3;

function clamp(value: number) {
  return Math.min(1, Math.max(0, value));
}

function getTimelineMeta(item: TimelineItem) {
  const [position = item.role, ...companyParts] = item.role
    .split(/\s+—\s+/)
    .map((part) => part.trim());
  const [start = item.period, ...endParts] = item.period
    .split(/\s+—\s+/)
    .map((part) => part.trim());

  return {
    company: companyParts.join(" — "),
    end: endParts.join(" — "),
    position,
    start,
  };
}

function getTimelineState(section: HTMLElement) {
  const rect = section.getBoundingClientRect();
  const scrollableDistance = section.offsetHeight - window.innerHeight;

  if (scrollableDistance <= 0) {
    return {
      progress: 0,
      hasCompleted: false,
    };
  }

  return {
    progress: clamp(-rect.top / scrollableDistance),
    hasCompleted: rect.bottom <= 96,
  };
}

export function TimelineScroller({ items }: TimelineScrollerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [timelineState, setTimelineState] = useState({
    progress: 0,
    hasCompleted: false,
  });
  const [expandedCards, setExpandedCards] = useState<ReadonlySet<string>>(
    () => new Set(),
  );

  useEffect(() => {
    let animationFrame = 0;

    const updateProgress = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const section = sectionRef.current;

        if (section) {
          setTimelineState(getTimelineState(section));
        }
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const animationProgress = timelineState.progress;
  const hasCompleted = timelineState.hasCompleted;
  const itemCount = Math.max(1, items.length);
  const activeIndex = hasCompleted || items.length === 0
    ? -1
    : Math.min(items.length - 1, Math.floor(animationProgress * itemCount));
  const lineProgress = hasCompleted ? 0 : animationProgress;
  const timelineStyle = {
    "--timeline-steps": Math.max(items.length + 1, 2),
  } as CSSProperties;

  const toggleCard = (role: string) => {
    setExpandedCards((current) => {
      const next = new Set(current);

      if (next.has(role)) {
        next.delete(role);
      } else {
        next.add(role);
      }

      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="experiencia"
      style={timelineStyle}
      className="relative min-h-[calc(var(--timeline-steps)*100svh)] overflow-clip py-0"
      aria-labelledby="timeline-title"
    >
      <div className="sticky top-20 flex min-h-[calc(100svh-5rem)] items-center overflow-visible py-4">
        <div className="page-container">
          <SectionHeading
            eyebrow="Experiencia"
            title={<>Trayectoria <span className="text-gradient-blue">Profesional</span></>}
            titleId="timeline-title"
            description="Una línea de tiempo en zigzag que revela cada etapa profesional con el avance del scroll."
            align="center"
            className="timeline-heading motion-reduce:animate-none"
          />

          <div className="relative mx-auto mt-8 min-h-[35rem] max-w-6xl lg:mt-10 lg:min-h-[33rem]">
            <div className="absolute bottom-8 left-5 top-8 z-0 w-px bg-white/10 md:left-1/2" />
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-5 top-8 z-0 w-px origin-top bg-gradient-to-b from-tertiary via-tertiary to-secondary-container transition-transform duration-500 ease-out motion-reduce:transition-none md:left-1/2"
              style={{ transform: `scaleY(${lineProgress})` }}
            />

            <div
              aria-hidden="true"
              className="absolute bottom-8 left-5 top-8 z-20 md:left-1/2"
            >
              {items.map((item, index) => {
                const markerTop =
                  items.length <= 1 ? 50 : (index / (items.length - 1)) * 100;
                const markerProgress =
                  items.length <= 1 ? 0 : index / (items.length - 1);
                const isActive = activeIndex === index;
                const isReached =
                  !hasCompleted &&
                  (animationProgress >= markerProgress || activeIndex >= index);

                return (
                  <span
                    key={item.role}
                    className={cn(
                      "absolute left-1/2 grid h-5 w-5 -translate-x-1/2 place-items-center rounded-full border transition duration-500 motion-reduce:transition-none",
                      isActive
                        ? "border-tertiary bg-tertiary shadow-[0_0_32px_rgba(76,215,246,0.65)] ring-8 ring-tertiary/15"
                        : isReached
                          ? "border-tertiary/55 bg-surface shadow-[0_0_18px_rgba(76,215,246,0.28)] ring-8 ring-tertiary/5"
                          : "border-white/15 bg-surface ring-8 ring-white/[0.04]",
                    )}
                    style={{ top: `calc(${markerTop}% - 0.625rem)` }}
                  >
                    <span
                      className={cn(
                        "h-1.5 w-1.5 rounded-full transition-colors duration-500",
                        isReached ? "bg-background" : "bg-white/35",
                      )}
                    />
                  </span>
                );
              })}
            </div>

            <div className="relative min-h-[35rem] lg:min-h-[33rem]">
              {items.map((item, index) => {
                const isActive = activeIndex === index;
                const isExpanded = expandedCards.has(item.role);
                const visibleDescription = isExpanded
                  ? item.description
                  : item.description.slice(0, COLLAPSED_POINTS);
                const remainingPoints = item.description.length - visibleDescription.length;
                const detailsId = `timeline-details-${index}`;
                const meta = getTimelineMeta(item);
                const companyName = meta.company || meta.position;

                return (
                  <div
                    key={item.role}
                    aria-hidden={!isActive}
                    className={cn(
                      "absolute inset-0 transition-opacity duration-700 ease-out motion-reduce:transition-none",
                      isActive ? "opacity-100" : "pointer-events-none opacity-0",
                    )}
                  >
                    <article className="absolute left-10 right-0 top-1/2 z-10 -translate-y-1/2 overflow-hidden rounded-[1.75rem] border border-tertiary/60 bg-[linear-gradient(135deg,rgba(76,215,246,0.13),rgba(255,255,255,0.04))] p-5 pb-16 shadow-[0_28px_90px_rgba(76,215,246,0.13)] transition-[border-color,background-color,opacity,transform,box-shadow] duration-700 ease-out motion-reduce:transition-none md:left-0 md:right-auto md:w-[calc(50%_-_3rem)] md:p-6 md:pb-16 lg:rounded-[2rem]">
                      <p className="label-caps text-tertiary transition-colors duration-500">
                        {item.period}
                      </p>
                      <ul
                        id={detailsId}
                        className={cn(
                          "mt-5 space-y-2 text-left text-sm leading-5 text-on-surface-variant sm:text-[0.92rem]",
                          isExpanded &&
                            "max-h-[18rem] overflow-y-auto pr-2 [scrollbar-color:rgba(76,215,246,0.45)_transparent] [scrollbar-width:thin]",
                        )}
                      >
                        {visibleDescription.map((point) => (
                          <li
                            key={point}
                            className="relative pl-4 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-tertiary/80 before:transition-colors before:duration-500"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>
                      {!isExpanded && remainingPoints > 0 ? (
                        <p className="mt-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-tertiary/80">
                          +{remainingPoints} puntos más
                        </p>
                      ) : null}
                      {item.description.length > COLLAPSED_POINTS ? (
                        <button
                          type="button"
                          aria-controls={detailsId}
                          aria-expanded={isExpanded}
                          aria-label={`${isExpanded ? "Ver menos" : "Ver más"} sobre ${companyName}`}
                          title={isExpanded ? "Ver menos" : "Ver más"}
                          onClick={() => toggleCard(item.role)}
                          className="absolute bottom-4 right-4 z-20 inline-flex h-11 w-11 items-center justify-center rounded-full border border-tertiary/35 bg-surface/90 text-tertiary shadow-[0_0_24px_rgba(76,215,246,0.18)] backdrop-blur transition-colors hover:border-tertiary hover:bg-tertiary/10 focus:outline-none focus:ring-2 focus:ring-tertiary/60"
                        >
                          <svg
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={cn(
                              "h-5 w-5 transition-transform duration-300",
                              isExpanded && "rotate-180",
                            )}
                          >
                            <path
                              d="M7 10l5 5 5-5"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="sr-only">
                            {isExpanded ? "Ver menos" : "Ver más"}
                          </span>
                        </button>
                      ) : null}
                    </article>

                    <aside className="absolute right-0 top-1/2 z-10 hidden w-[calc(50%_-_3rem)] -translate-y-1/2 rounded-[2rem] border border-tertiary/25 bg-[radial-gradient(circle_at_top_left,rgba(76,215,246,0.14),rgba(255,255,255,0.025)_48%,rgba(255,255,255,0.012))] p-6 text-left shadow-[0_24px_90px_rgba(76,215,246,0.08)] backdrop-blur md:block">
                      <p className="label-caps text-tertiary">Resumen de trayectoria</p>
                      <h4 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-on-surface lg:text-3xl">
                        {meta.position}
                      </h4>
                      {meta.company ? (
                        <p className="mt-3 text-lg font-medium text-on-surface-variant">
                          {meta.company}
                        </p>
                      ) : null}
                      <dl className="mt-6 grid grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                          <dt className="label-caps text-on-surface-variant">Inicio</dt>
                          <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-tertiary">
                            {meta.start}
                          </dd>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                          <dt className="label-caps text-on-surface-variant">Fin</dt>
                          <dd className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-tertiary">
                            {meta.end || "Actualidad"}
                          </dd>
                        </div>
                      </dl>
                    </aside>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
