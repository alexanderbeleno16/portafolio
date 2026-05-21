# Frontend implementation plan

## Visual thesis

Arquitectura premium en modo oscuro: vidrio, micro-bordes, glows cyan/blue y una grilla técnica que sostiene una marca sobria de ingeniería senior.

## Content plan

1. Hero: marca, promesa profesional, CTA y visual dominante de arquitectura de sistemas.
2. Support: enfoque arquitectónico y métricas.
3. Detail: stack, proyectos, trayectoria y especializaciones.
4. Final CTA: contacto directo para consultoría o nuevos proyectos.

## Interaction thesis

- Entrada escalonada del hero para que la primera pantalla se sienta grabable.
- Hover states con elevación mínima, zoom sutil de imágenes y glow técnico.
- Reveals con `animation-timeline: view()` cuando el navegador lo soporta, con fallback seguro y respeto por `prefers-reduced-motion`.

## Version check

- Next.js verificado contra npm/registry al 2026-05-13: `16.2.6`.
- React/React DOM verificados contra npm: `19.2.6`.

## Skills applied

- `frontend-skill`: composición visual, hero full-bleed, jerarquía, copy escaneable y motion sobrio.
- `nextjs-app-router-patterns`: App Router, Server Components por defecto, `metadata`, página delgada y componentes por secciones.
- `stitch-to-nextjs`: Stitch como especificación visual, extracción de tokens, assets locales y componentes typed/data-driven.
