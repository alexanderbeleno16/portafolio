import { GlassPanel } from "@/components/ui/glass-panel";
import { stats } from "@/content/landing";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell" aria-labelledby="about-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div className="reveal">
          <p className="label-caps text-tertiary">Sobre mí</p>
          <h2 id="about-title" className="section-title mt-4 text-on-surface">
            Perfil profesional
          </h2>
          <div className="mt-6 h-1 w-20 rounded-full bg-tertiary" />
          <div className="body-large mt-8 space-y-5 text-on-surface-variant">
            <p>
              Más de 5 años de experiencia como Ingeniero de Sistemas y Computación,
              desarrollando aplicaciones web, plataformas empresariales y soluciones full
              stack utilizando tecnologías a la vanguardia.
            </p>
            <p>
              Experiencia en desarrollo de APIs, optimización de bases de datos,
              integración de sistemas y despliegues en entornos productivos utilizando
              Docker y tecnologías modernas de infraestructura.
            </p>
            <p>
              He participado en soluciones para entornos empresariales y gubernamentales,
              involucrándome en todo el ciclo de vida del software, desde el levantamiento
              de requerimientos hasta la implementación y mantenimiento en producción.
            </p>
            <p>
              Me enfoco en construir sistemas escalables, eficientes y mantenibles,
              aplicando buenas prácticas de desarrollo, optimización y arquitectura de
              software.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <GlassPanel
              key={stat.label}
              className="reveal p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-tertiary/30"
            >
              <p className="text-4xl font-black tracking-[-0.05em] text-tertiary md:text-5xl">
                {stat.value}
              </p>
              <p className="label-caps mt-3 text-on-surface-variant">{stat.label}</p>
            </GlassPanel>
          ))}
        </div>
      </div>
    </section>
  );
}
