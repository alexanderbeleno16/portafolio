"use client";

import { useLanguage } from "@/components/language/language-provider";
import { ContactEmailForm } from "@/components/sections/contact-email-form";
import { SectionHeading } from "@/components/ui/section-heading";
import { contact } from "@/content/landing";

export function ContactSection() {
  const { content } = useLanguage();

  return (
    <section
      id="contacto"
      className="section-shell pb-[clamp(7rem,10vw,10rem)]"
      aria-labelledby="contact-title"
    >
      <SectionHeading
        titleId="contact-title"
        align="center"
        eyebrow={content.contactSection.eyebrow}
        title={<>{content.contactSection.titlePrefix} <span className="text-gradient-blue">{content.contactSection.titleHighlight}</span></>}
        description={content.contactSection.description}
      />

      <ContactEmailForm email={contact.email} />
    </section>
  );
}
