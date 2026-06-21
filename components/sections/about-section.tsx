import { GlassPanel } from "@/components/ui/glass-panel";
import { stats } from "@/content/landing";

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section-shell" aria-labelledby="about-title">
      <div className="mx-auto max-w-4xl text-center">
        <p className="label-caps inline-flex rounded-full bg-tertiary/10 px-4 py-2 text-tertiary shadow-[inset_0_0_0_1px_rgba(76,215,246,0.24)]">
          Sobre mí
        </p>
        <h2 id="about-title" className="section-title mt-5 text-balance text-on-surface">
          Mi perfil{" "}
          <span className="text-gradient-blue">profesional</span>
        </h2>
      </div>

      <article className="reveal mx-auto mt-16 max-w-5xl overflow-hidden rounded-[1.45rem] border border-[#31435c] bg-[#10192b] shadow-[0_24px_80px_rgba(0,0,0,0.46),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl">
        <div className="flex min-h-11 items-center gap-2 border-b border-white/8 bg-[#202a3a] px-4 sm:px-5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-[0_0_14px_rgba(255,95,87,0.35)]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e] shadow-[0_0_14px_rgba(255,189,46,0.28)]" aria-hidden="true" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-[0_0_14px_rgba(40,200,64,0.28)]" aria-hidden="true" />
          <p className="min-w-0 flex-1 truncate text-center text-xs text-[#aeb8c8] sm:text-sm" style={{ fontFamily: '"SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", monospace' }}>
            alexander@macbook: ~/profile
          </p>
          <span className="hidden w-14 sm:block" aria-hidden="true" />
        </div>

        <div className="bg-[linear-gradient(135deg,#171a3a_0%,#112844_54%,#0b2734_100%)] p-5 sm:p-6 md:p-8">
          <div
            className="flex min-h-[26rem] flex-col justify-between text-[0.85rem] font-medium leading-7 tracking-[-0.025em] text-[#f1f4ff] sm:text-[0.93rem]"
            style={{ fontFamily: '"SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", monospace' }}
          >
            <div>
              <div className="mb-7 space-y-1 text-[#f4f6ff]">
                <p>Welcome to alexander&apos;s Terminal</p>
                <p>Type <span className="text-white">&quot;help&quot;</span> to see available commands</p>
                <p>Try <span className="text-white">&quot;profile&quot;</span> to read my professional summary</p>
              </div>

              <div className="mb-5 flex flex-wrap items-center gap-x-1">
                <span className="text-[#35f28b]">alexander@macbook</span>
                <span className="text-[#f4f6ff]">:</span>
                <span className="text-[#6fb8ff]">~/profile</span>
                <span className="text-[#f4f6ff]">$</span>
                <span className="text-[#f4f6ff]">cat professional-profile.txt</span>
              </div>

              <div className="space-y-4 text-[#dce3f2]">
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

            <div className="mt-10 flex flex-wrap items-center gap-x-1">
              <span className="text-[#35f28b]">alexander@macbook</span>
              <span className="text-[#f4f6ff]">:</span>
              <span className="text-[#6fb8ff]">~/profile</span>
              <span className="text-[#f4f6ff]">$</span>
              <span className="inline-block h-5 w-2 translate-y-0.5 animate-pulse bg-[#f4f6ff]" aria-hidden="true" />
            </div>
          </div>
        </div>
      </article>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
