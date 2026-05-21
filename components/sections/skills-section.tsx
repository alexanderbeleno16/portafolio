import { GlassPanel } from "@/components/ui/glass-panel";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { aiStack, skillGroups } from "@/content/landing";

export function SkillsSection() {
  return (
    <section id="habilidades" className="section-shell" aria-labelledby="skills-title">
      <SectionHeading
        titleId="skills-title"
        align="center"
        title="Stack técnico y dominio"
        description="Un sistema de capacidades pensado para producto: frontend expresivo, backend sólido, nube automatizada e IA aplicada."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
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
                IA y Ciencia de Datos
              </h3>
            </div>
            <p className="mt-4 leading-7 text-on-surface-variant">
              Integración de LLMs, automatización mediante agentes inteligentes y
              pipelines de datos eficientes para analítica predictiva.
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
            <h3 className="text-xl font-semibold tracking-[-0.03em]">Eficiencia</h3>
          </div>
          <p className="mt-4 leading-7 text-on-surface-variant">
            Metodologías ágiles, CI/CD y optimización de flujos de trabajo en equipos de
            alto rendimiento.
          </p>
        </GlassPanel>
      </div>
    </section>
  );
}
