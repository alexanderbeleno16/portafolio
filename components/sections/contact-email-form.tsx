"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "hello@architect.os";

export function ContactEmailForm() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const params = new URLSearchParams({
      subject,
      body,
    });

    window.location.href = `mailto:${CONTACT_EMAIL}?${params.toString()}`;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-10 grid max-w-2xl gap-4 text-left"
      aria-label="Formulario de contacto por correo"
    >
      <div className="grid gap-2">
        <label htmlFor="email-subject" className="label-caps text-tertiary">
          Asunto
        </label>
        <input
          id="email-subject"
          name="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
          required
          placeholder="Contame sobre tu proyecto"
          className="min-h-12 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
        />
      </div>

      <div className="grid gap-2">
        <label htmlFor="email-body" className="label-caps text-tertiary">
          Cuerpo del correo
        </label>
        <textarea
          id="email-body"
          name="body"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
          rows={5}
          placeholder="Escribí el contexto, objetivo y fecha estimada."
          className="min-h-36 resize-y rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-on-surface outline-none transition placeholder:text-on-surface-variant/55 focus:border-tertiary/60 focus:bg-white/[0.07]"
        />
      </div>

      <button
        type="submit"
        className="label-caps inline-flex min-h-12 items-center justify-center rounded-xl bg-secondary-container px-10 text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(59,130,246,0.32)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-tertiary"
      >
        Enviar correo
      </button>
    </form>
  );
}
