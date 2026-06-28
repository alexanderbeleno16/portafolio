"use client";

import { useState, type FormEvent } from "react";

import { useLanguage } from "@/components/language/language-provider";
import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/ui/icons";
import { externalLinks } from "@/content/landing";

type ContactEmailFormProps = {
  email: string;
};

type ContactIconName = "mail" | "linkedin" | "github" | "location";

function ContactIcon({ name }: { name: ContactIconName }) {
  if (name === "mail") {
    return <MailIcon className="h-5 w-5" />;
  }

  if (name === "linkedin") {
    return <LinkedInIcon className="h-[1.05rem] w-[1.05rem]" />;
  }

  if (name === "github") {
    return <GitHubIcon className="h-[1.05rem] w-[1.05rem]" />;
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M12 21s7-4.4 7-11a7 7 0 1 0-14 0c0 6.6 7 11 7 11Z" />
      <path d="M12 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    </svg>
  );
}

export function ContactEmailForm({ email }: ContactEmailFormProps) {
  const { content } = useLanguage();
  const contactContent = content.contactSection;
  const [name, setName] = useState("");
  const [fromEmail, setFromEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const mailtoHref = `mailto:${email}`;
  const contactCards = [
    {
      icon: "mail" as const,
      label: contactContent.labels.email,
      value: email,
      href: mailtoHref,
    },
    {
      icon: "linkedin" as const,
      label: "LinkedIn",
      value: "/in/alexander-beleño/",
      href: externalLinks.linkedin,
    },
    {
      icon: "github" as const,
      label: "GitHub",
      value: "alexanderbeleno16",
      href: externalLinks.github,
    },
    {
      icon: "location" as const,
      label: contactContent.labels.location,
      value: contactContent.locationValue,
    },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const composedBody = [
      `${contactContent.mailBodyLabels.name}: ${name}`,
      `${contactContent.mailBodyLabels.email}: ${fromEmail}`,
      "",
      body,
    ].join("\n");

    const params = new URLSearchParams({
      subject,
      body: composedBody,
    });

    window.location.href = `${mailtoHref}?${params.toString()}`;
  };

  return (
    <div className="mx-auto mt-14 grid w-full max-w-6xl gap-8 text-left lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-on-surface">
          {contactContent.infoTitle}
        </h3>

        <div className="mt-6 grid gap-4">
          {contactCards.map((item) => {
            const content = (
              <div className="group flex min-h-[5.1rem] items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-tertiary/35 hover:bg-white/[0.07]">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-tertiary/25 bg-tertiary/10 text-tertiary shadow-[0_0_22px_rgba(76,215,246,0.12),inset_0_0_0_1px_rgba(76,215,246,0.16)] transition duration-300 group-hover:border-tertiary/45 group-hover:bg-tertiary/15">
                  <ContactIcon name={item.icon} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium text-on-surface-variant">
                    {item.label}
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold text-on-surface">
                    {item.value}
                  </span>
                </span>
              </div>
            );

            if (!item.href) {
              return <div key={item.label}>{content}</div>;
            }

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-5"
        aria-label={contactContent.formAriaLabel}
      >
        <h3 className="text-xl font-semibold tracking-[-0.03em] text-on-surface">
          {contactContent.formTitle}
        </h3>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="contact-name" className="text-sm font-semibold text-on-surface">
              {contactContent.labels.name}
            </label>
            <input
              id="contact-name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              placeholder={contactContent.placeholders.name}
              className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="contact-email" className="text-sm font-semibold text-on-surface">
              {contactContent.labels.formEmail}
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              value={fromEmail}
              onChange={(event) => setFromEmail(event.target.value)}
              required
              placeholder={contactContent.placeholders.email}
              className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="email-subject" className="text-sm font-semibold text-on-surface">
            {contactContent.labels.subject}
          </label>
          <input
            id="email-subject"
            name="subject"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            required
            placeholder={contactContent.placeholders.subject}
            className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email-body" className="text-sm font-semibold text-on-surface">
            {contactContent.labels.message}
          </label>
          <textarea
            id="email-body"
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
            required
            rows={6}
            placeholder={contactContent.placeholders.message}
            className="min-h-36 resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
          />
        </div>

        <button
          type="submit"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-secondary-container px-7 text-sm font-bold tracking-[-0.01em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_16px_44px_rgba(5,102,217,0.28)] transition-colors duration-200 hover:bg-[#0b74f4] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m22 2-7 20-4-9-9-4 20-7Z" />
            <path d="M22 2 11 13" />
          </svg>
          {contactContent.submit}
        </button>
      </form>
    </div>
  );
}
