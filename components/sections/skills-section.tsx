"use client";

import { useLanguage } from "@/components/language/language-provider";
import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { aiStack } from "@/content/landing";

export function SkillsSection() {
  const { content } = useLanguage();

  return (
    <section id="habilidades" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        titleId="skills-title"
        align="center"
        title={
          <>
            {content.skills.titlePrefix}{" "}
            <span className="text-gradient-blue">
              {content.skills.titleHighlight}
            </span>
          </>
        }
        description={content.skills.description}
        titleClassName="whitespace-nowrap text-[clamp(2.1rem,5vw,4.75rem)]"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {content.skillGroups.map((group) => (
          <GlassPanel key={group.title} as="article" className="reveal p-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-tertiary">{group.icon}</span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">{group.title}</h3>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {group.tags.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </GlassPanel>
        ))}

        <GlassPanel as="article" className="reveal p-8">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-sm text-tertiary">MEM</span>
              <h3 className="text-xl font-semibold tracking-[-0.03em]">
                {content.skills.aiTitle}
              </h3>
            </div>
            <p className="mt-4 leading-7 text-on-surface-variant">
              {content.skills.aiDescription}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {aiStack.map((tag) => (
                <TechBadge key={tag} name={tag} />
              ))}
            </div>
          </div>
        </GlassPanel>

        <GlassPanel
          as="article"
          className="reveal bg-gradient-to-br from-secondary-container/20 to-transparent p-8"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-sm text-secondary">SPD</span>
            <h3 className="text-xl font-semibold tracking-[-0.03em]">{content.skills.efficiencyTitle}</h3>
          </div>
          <p className="mt-4 leading-7 text-on-surface-variant">
            {content.skills.efficiencyDescription}
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
