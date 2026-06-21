import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/content/landing";

export function ContactSection() {
  return (
    <section
      id="contacto"
      className="section-shell pb-[clamp(7rem,10vw,10rem)]"
      aria-labelledby="contact-title"
    >
      <SectionHeading
        titleId="contact-title"
        align="center"
        eyebrow="Contacto"
        title={<>Trabajemos <span className="text-gradient-blue">juntos</span></>}
        description="¿Tienes un proyecto o una oportunidad laboral? Estoy abierto a nuevas conexiones y desafíos."
      />

      <ContactEmailForm email={contact.email} />
    </section>
  );
}
