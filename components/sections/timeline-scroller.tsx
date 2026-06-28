"use client";

import { useState } from "react";

import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/cn";

type TimelineItem = {
  period: string;
  role: string;
  description: readonly string[];
};

type TimelineScrollerProps = {
  items: readonly TimelineItem[];
  labels: {
    eyebrow: string;
    titlePrefix: string;
    titleHighlight: string;
    description: string;
    morePoints: string;
    showMore: string;
    showLess: string;
    showMoreAbout: string;
    showLessAbout: string;
    summaryLabel: string;
  };
};

const COLLAPSED_POINTS = 3;

const milestoneNumberFormatter = new Intl.NumberFormat("en-US", {
  minimumIntegerDigits: 2,
});

function getTimelineMeta(item: TimelineItem) {
  const [position = item.role, ...companyParts] = item.role
    .split(/\s+—\s+/)
    .map((part) => part.trim());

  return {
    company: companyParts.join(" — "),
    position,
  };
}

function formatTemplate(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

export function TimelineScroller({ items, labels }: TimelineScrollerProps) {
  const [expandedCards, setExpandedCards] = useState<ReadonlySet<string>>(
    () => new Set(),
  );

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
      id="experiencia"
      className="relative isolate overflow-hidden py-20 md:py-28"
      aria-labelledby="timeline-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[12%] top-24 -z-10 h-72 w-72 rounded-full bg-tertiary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-20 right-[8%] -z-10 h-80 w-80 rounded-full bg-secondary-container/12 blur-3xl"
      />

      <div className="page-container relative">
        <SectionHeading
          eyebrow={labels.eyebrow}
          title={
            <>
              {labels.titlePrefix}{" "}
              <span className="text-gradient-blue">{labels.titleHighlight}</span>
            </>
          }
          titleId="timeline-title"
          description={labels.description}
          align="center"
          className="motion-reduce:animate-none"
        />

        <div className="mx-auto mt-12 max-w-6xl md:mt-16">
          <div className="relative">
              <div
                aria-hidden="true"
                data-testid="timeline-axis"
                className="absolute bottom-8 left-5 top-8 w-px bg-gradient-to-b from-transparent via-tertiary/55 to-transparent shadow-[0_0_28px_rgba(76,215,246,0.24)] md:left-1/2 md:-translate-x-1/2"
              />

              <ol
                aria-label={labels.titleHighlight}
                className="relative grid gap-8 md:gap-10"
              >
              {items.map((item, index) => {
                const isExpanded = expandedCards.has(item.role);
                const visibleDescription = isExpanded
                  ? item.description
                  : item.description.slice(0, COLLAPSED_POINTS);
                const remainingPoints = item.description.length - visibleDescription.length;
                const detailsId = `timeline-details-${index}`;
                const markerId = `timeline-marker-${index}`;
                const meta = getTimelineMeta(item);
                const companyName = meta.company || meta.position;
                const milestoneNumber = milestoneNumberFormatter.format(index + 1);
                const isEven = index % 2 === 0;

                return (
                  <li
                    key={item.role}
                    className="relative grid min-w-0 items-start pl-12 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-x-6 md:pl-0 lg:gap-x-8"
                  >
                    <div
                      aria-hidden="true"
                      className={cn(
                        "absolute left-5 top-9 h-px w-7 bg-gradient-to-r from-tertiary/50 to-transparent md:static md:mt-9 md:block md:w-full",
                        isEven
                          ? "md:col-start-1 md:bg-gradient-to-r md:from-transparent md:to-tertiary/50"
                          : "md:col-start-3 md:bg-gradient-to-r md:from-tertiary/50 md:to-transparent",
                      )}
                    />

                    <span
                      id={markerId}
                      data-testid="timeline-marker"
                      className="absolute left-0 top-4 z-10 grid h-10 w-10 place-items-center rounded-full border border-tertiary/45 bg-background/90 text-tertiary shadow-[0_0_0_6px_rgba(4,8,18,0.86),0_0_34px_rgba(76,215,246,0.22)] backdrop-blur md:static md:col-start-2 md:row-start-1 md:mx-auto md:h-12 md:w-12"
                    >
                      <span className="label-caps">{milestoneNumber}</span>
                    </span>

                    <article
                      id={`timeline-card-${index}`}
                      aria-labelledby={`timeline-role-${index}`}
                      aria-describedby={markerId}
                      className={cn(
                        "group relative row-start-1 scroll-mt-28 overflow-hidden rounded-[1.65rem] border border-white/10 bg-[linear-gradient(150deg,rgba(255,255,255,0.082),rgba(255,255,255,0.032)_44%,rgba(7,12,24,0.86))] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-tertiary/35 hover:shadow-[0_30px_100px_rgba(76,215,246,0.12),inset_0_1px_0_rgba(255,255,255,0.1)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-6 lg:scroll-mt-32 lg:rounded-[1.85rem]",
                        isEven ? "md:col-start-1" : "md:col-start-3",
                      )}
                    >
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-tertiary/50 to-transparent"
                      />
                      <div
                        aria-hidden="true"
                        className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-tertiary/10 blur-3xl transition duration-300 group-hover:bg-tertiary/16"
                      />

                      <div className="relative flex h-full flex-col">
                        <div className="flex flex-wrap items-center gap-3">
                          <p className="label-caps rounded-full border border-white/10 bg-white/[0.045] px-3 py-2 text-on-surface-variant">
                            {item.period}
                          </p>
                        </div>

                        <div className="mt-6">
                          <p className="label-caps text-tertiary">
                            {labels.summaryLabel}
                          </p>
                          <h3
                            id={`timeline-role-${index}`}
                            className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-on-surface lg:text-[1.85rem]"
                          >
                            {meta.position}
                          </h3>
                          {meta.company ? (
                            <p className="mt-2 text-base font-medium text-on-surface-variant sm:text-lg">
                              {meta.company}
                            </p>
                          ) : null}
                        </div>

                        <ul
                          id={detailsId}
                          className="mt-5 grid gap-2 text-left text-sm leading-6 text-on-surface-variant sm:text-[0.92rem]"
                        >
                          {visibleDescription.map((point) => (
                            <li
                              key={point}
                              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]"
                            >
                              {point}
                            </li>
                          ))}
                        </ul>

                        {!isExpanded && remainingPoints > 0 ? (
                          <p className="mt-3 text-left text-xs font-semibold uppercase tracking-[0.18em] text-tertiary/80">
                            {formatTemplate(labels.morePoints, { count: remainingPoints })}
                          </p>
                        ) : null}

                        {item.description.length > COLLAPSED_POINTS ? (
                          <button
                            type="button"
                            aria-controls={detailsId}
                            aria-expanded={isExpanded}
                            aria-label={formatTemplate(
                              isExpanded ? labels.showLessAbout : labels.showMoreAbout,
                              { company: companyName },
                            )}
                            onClick={() => toggleCard(item.role)}
                            className="label-caps mt-5 inline-flex min-h-11 items-center justify-center self-start rounded-full border border-tertiary/35 bg-background/65 px-5 text-tertiary shadow-[0_0_24px_rgba(76,215,246,0.14)] backdrop-blur transition hover:border-tertiary hover:bg-tertiary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
                          >
                            {isExpanded ? labels.showLess : labels.showMore}
                          </button>
                        ) : null}
                      </div>
                    </article>
                  </li>
                );
              })}
              </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
