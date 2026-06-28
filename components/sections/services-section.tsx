"use client";

import { useLanguage } from "@/components/language/language-provider";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";

export function ServicesSection() {
  const { content } = useLanguage();
  const aiWorkflow = content.aiWorkflow;

  return (
    <section id="ia" className="section-shell" aria-labelledby="ai-workflow-title">
      <SectionHeading
        align="center"
        eyebrow={aiWorkflow.eyebrow}
        title={
          <>
            {aiWorkflow.titlePrefix}{" "}
            <span className="text-gradient-blue">
              {aiWorkflow.titleHighlight}
            </span>
          </>
        }
        titleId="ai-workflow-title"
        description={aiWorkflow.description}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {aiWorkflow.pillars.map((pillar) => (
          <GlassPanel
            key={pillar.title}
            as="article"
            className="reveal p-8 transition duration-300 hover:-translate-y-1 hover:border-tertiary/30 md:p-9"
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-tertiary/20 bg-tertiary/10 font-mono text-sm text-tertiary">
              {pillar.icon}
            </span>
            <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em] md:text-3xl">
              {pillar.title}
            </h3>
            <p className="mt-4 leading-7 text-on-surface-variant">
              {pillar.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {pillar.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </GlassPanel>
        ))}
      </div>
    </section>
  );
}
