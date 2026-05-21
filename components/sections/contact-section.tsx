import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { GlassPanel } from "@/components/ui/glass-panel";
import { contact } from "@/content/landing";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-shell pb-[clamp(7rem,10vw,10rem)]"
      aria-labelledby="contact-title"
    >
      <GlassPanel className="reveal relative isolate overflow-hidden px-4 py-12 text-center sm:px-6 md:px-20 md:py-20">
        <div className="absolute -right-44 -top-44 -z-10 h-96 w-96 rounded-full bg-tertiary/10 blur-[100px]" />
        <div className="absolute -bottom-52 left-12 -z-10 h-80 w-80 rounded-full bg-secondary-container/10 blur-[100px]" />

        <h2
          id="contact-title"
          className="display-heading mx-auto max-w-[14ch] text-balance text-[clamp(2.2rem,10.5vw,6.2rem)] leading-[1.02] tracking-[-0.055em] text-on-surface sm:max-w-[16ch] sm:tracking-[-0.065em]"
        >
          ¿Tienes una idea? <br />
          <span className="text-tertiary [overflow-wrap:anywhere]">Construyámosla.</span>
        </h2>
        <p className="body-large mx-auto mt-7 max-w-2xl text-on-surface-variant">
          Estoy disponible para nuevos proyectos y consultorías técnicas de alto impacto.
          Hablemos sobre cómo escalar tu infraestructura.
        </p>
        <ContactEmailForm email={contact.email} />
      </GlassPanel>
    </section>
  );
}
