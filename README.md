# 🚀 Portafolio — Alexander Beleño

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel)](https://vercel.com/)

Portafolio profesional de **Alexander Beleño**, ingeniero de sistemas enfocado en arquitectura escalable, automatización con IA, productos web modernos y despliegues robustos.

## ✨ Qué muestra

| Área | Resultado visible |
|------|-------------------|
| 🧭 Perfil | Experiencia, enfoque técnico y propuesta profesional. |
| 🧰 Stack | Frontend, backend, datos, cloud, DevOps e IA aplicada. |
| 🧪 Proyectos | Casos reales con demos, galerías y decisiones técnicas. |
| 🤝 Contacto | Formulario por correo hacia `ing.alexbeleno@gmail.com`. |

## 🔗 Enlaces

| Canal | Link |
|-------|------|
| 🐙 GitHub | [alexanderbeleno16](https://github.com/alexanderbeleno16) |
| 💼 LinkedIn | [Alexander Beleño](https://www.linkedin.com/in/alexander-bele%C3%B1o/) |
| 📄 CV | [`/cv/alexander-beleno-cv-es.pdf`](/cv/alexander-beleno-cv-es.pdf) |

## 🧩 Proyectos destacados

| Proyecto | Stack principal | Demo |
|----------|-----------------|------|
| 🇨🇴 Colombia Monitor | Next.js, TypeScript, Supabase, OpenAI API, Leaflet, Vercel | [Abrir demo en Vercel](https://colombia-monitor-eight.vercel.app/ciudad/barranquilla/noticias) |
| 🎓 EduNotas | Angular, FastAPI, SQLAlchemy, Pydantic, Docker | Demo offline |
| 🧴 DuoLuxe Essence | Astro, Next.js, TailwindCSS, Supabase, Vercel | [Abrir demo en Vercel](https://duoluxe.vercel.app/) |
| 👁️ Optic-AI | Next.js, HeroUI, TypeScript, FastAPI, SQLAlchemy, Supabase | [Abrir demo en Vercel](https://optic-ai-three.vercel.app/login) |

> Los enlaces de demo salen de `content/landing.ts`; si un proyecto no tiene `demoHref`, se documenta como offline en lugar de inventar una URL.

## 🛠️ Stack del sitio

| Capa | Herramientas |
|------|--------------|
| Framework | Next.js App Router |
| UI | React, Tailwind CSS |
| Lenguaje | TypeScript |
| Calidad | ESLint, `tsc --noEmit` |
| Deploy | Vercel |

## ✅ Calidad local

```bash
pnpm run lint
pnpm run typecheck
```

No hay runner de tests unitarios, integración o E2E configurado actualmente. La verificación base del proyecto usa lint y typecheck.

## 🔐 Package manager y supply chain

Este repo usa **pnpm 10** vía Corepack. No uses `npm install` ni `npx` directo.

```bash
corepack enable
pnpm install --frozen-lockfile
```

La política de instalación está en `pnpm-workspace.yaml` e incluye cooldown para versiones recién publicadas, `trustPolicy: no-downgrade`, allowlist estricta de build scripts y bloqueo de dependencias transitivas desde Git/tarballs arbitrarios.

Para ejecutar tooling del proyecto, preferí paquetes instalados y lockfileados:

```bash
pnpm exec <tool>
```

## 📁 Estructura rápida

| Ruta | Propósito |
|------|-----------|
| `app/` | Rutas y layout de Next.js App Router. |
| `components/sections/` | Secciones principales del landing. |
| `components/ui/` | Primitivas visuales reutilizables. |
| `content/landing.ts` | Contenido centralizado: navegación, links, proyectos y contacto. |
| `public/` | Imágenes, CV y assets estáticos. |

## 📬 Contacto

Para consultoría, desarrollo o arquitectura de producto: [ing.alexbeleno@gmail.com](mailto:ing.alexbeleno@gmail.com)
