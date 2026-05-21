import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { GlassPanel } from "@/components/ui/glass-panel";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-shell pb-[clamp(7rem,10vw,10rem)]"
      aria-labelledby="contact-title"
    >
      <GlassPanel className="reveal relative isolate overflow-hidden px-6 py-14 text-center md:px-20 md:py-20">
        <div className="absolute -right-44 -top-44 -z-10 h-96 w-96 rounded-full bg-tertiary/10 blur-[100px]" />
        <div className="absolute -bottom-52 left-12 -z-10 h-80 w-80 rounded-full bg-secondary-container/10 blur-[100px]" />

        <h2 id="contact-title" className="display-heading text-balance text-on-surface">
          ¿Tienes una idea? <br />
          <span className="text-tertiary">Construyámosla.</span>
        </h2>
        <p className="body-large mx-auto mt-7 max-w-2xl text-on-surface-variant">
          Estoy disponible para nuevos proyectos y consultorías técnicas de alto impacto.
          Hablemos sobre cómo escalar tu infraestructura.
        </p>
        <ContactEmailForm />
      </GlassPanel>
    </section>
  );
}
