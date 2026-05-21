export const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Experiencia", href: "#experiencia" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const externalLinks = {
  github: "https://github.com/alexanderbeleno16",
  githubRepositories: "https://github.com/alexanderbeleno16?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alexander-bele%C3%B1o/",
  cv: "/cv/alexander-beleno-cv-es.pdf",
} as const;

export const contact = {
  email: "ing.alexbeleno@gmail.com",
} as const;

export const hero = {
  eyebrow: "Ingeniería de sistemas y computación",
  name: "Alexander Beleño",
  title: "Hola, soy",
  summary:
    "Ingeniero de Sistemas enfocado en el diseño de arquitecturas escalables, automatización con IA y despliegue robusto de soluciones digitales modernas.",
  image: {
    src: "/profile/perfil_2026.png",
    alt: "Retrato profesional de Alexander Beleño con traje oscuro y camisa blanca.",
  },
} as const;

export const stats = [
  { value: "5+", label: "Años Exp." },
  { value: "20+", label: "Proyectos" },
  { value: "12+", label: "Certificaciones" },
  { value: "100%", label: "Compromiso" },
] as const;

export const skillGroups = [
  {
    icon: "WEB",
    title: "Frontend",
    tags: [
      "React",
      "Angular",
      "Next.js",
      "PrimeNG",
      "TailwindCSS",
      "TypeScript",
      "SCSS",
      "HTML5",
      "Bootstrap",
    ],
  },
  {
    icon: "API",
    title: "Backend",
    tags: ["FastAPI", "Python", "Node.js", "Laravel", "Java", "PHP", "Flask", "JSP"],
  },
  {
    icon: "BD",
    title: "Bases de Datos",
    tags: ["PostgreSQL", "Oracle", "MySQL", "SQLite", "Redis", "Supabase"],
  },
  {
    icon: "OPS",
    title: "DevOps & Cloud",
    tags: ["Docker", "Vercel", "GitHub Actions", "Portainer"],
  },
] as const;

export const aiStack = ["OpenAI API", "Pandas", "GBM"] as const;

export const projects = [
  {
    title: "Colombia Monitor",
    description:
      "Plataforma de monitoreo noticioso territorial que ingesta, clasifica y visualiza noticias locales con mapas, filtros y resumen asistido por IA.",
    image: "/projects/colombia-monitor/situacion.png",
    gallery: [
      "/projects/colombia-monitor/situacion.png",
      "/projects/colombia-monitor/colombia-general.png",
      "/projects/colombia-monitor/mapa-incidencias.png",
      "/projects/colombia-monitor/noticias.png",
    ],
    alt: "Panel oscuro de Colombia Monitor con métricas, resumen ejecutivo de IA y actividad semanal de noticias.",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Leaflet", "Vercel"],
    primaryAction: "Demo",
    demoHref: "https://colombia-monitor-eight.vercel.app/ciudad/barranquilla/noticias",
  },
  {
    title: "EduNotas",
    description:
      "Sistema educativo con frontend Angular y API modular para gestión académica, contratos REST, validación de datos y despliegue con Docker.",
    image:
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164421.png",
    gallery: [
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164421.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164451.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164538.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164628.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164651.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164731.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164800.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164837.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164858.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164924.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20164958.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20165011.png",
      "/projects/edunotas/Captura%20de%20pantalla%202026-05-21%20165112.png",
    ],
    alt: "Interfaz de gestión académica con visualizaciones de datos azules en monitores de escritorio.",
    tags: ["Angular", "FastAPI", "SQLAlchemy", "Pydantic", "Docker"],
    primaryAction: "Demo",
    demoStatus: "offline",
  },
  {
    title: "DuoLuxe Essence",
    description:
      "Monorepo premium para fragancias con landing pública, panel administrativo, catálogo, órdenes, clientes, WhatsApp y slider sincronizados desde Supabase.",
    image: "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200031.png",
    gallery: [
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200031.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200052.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200122.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200148.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200213.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200306.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200409.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200419.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200429.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200437.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200524.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200545.png",
      "/projects/duoluxe/Captura%20de%20pantalla%202026-05-18%20200621.png",
    ],
    alt: "Landing premium para perfumería con fotografía elegante, reflejos de vidrio y fondo oscuro.",
    tags: ["Astro", "Next.js", "TailwindCSS", "Supabase", "Vercel"],
    primaryAction: "Demo",
    demoHref: "https://duoluxe.vercel.app/",
  },
  {
    title: "Optic-AI",
    description:
      "Plataforma clínico-administrativa multisede para ópticas con módulos de pacientes, historias clínicas, citas, RIPS, correos y auditoría.",
    image: "/projects/optic-ai/optic-rips-validacion.png",
    gallery: [
      "/projects/optic-ai/optic-rips-validacion.png",
      "/projects/optic-ai/optic-login.png",
      "/projects/optic-ai/optic-email-recuperacion.png",
      "/projects/optic-ai/optic-dashboard.png",
      "/projects/optic-ai/optic-pacientes.png",
      "/projects/optic-ai/optic-usuarios-modal.png",
      "/projects/optic-ai/optic-roles-modal.png",
      "/projects/optic-ai/optic-historias.png",
      "/projects/optic-ai/optic-citas-modal.png",
    ],
    alt: "Pantallas reales de Optic-AI con validación RIPS, dashboard operativo, pacientes, historias clínicas, citas y administración.",
    tags: ["Next.js", "HeroUI", "TypeScript", "FastAPI", "SQLAlchemy", "Supabase"],
    primaryAction: "Demo",
    demoHref: "https://optic-ai-three.vercel.app/login",
  },
] as const;

export const timeline = [
  {
    period: "Enero 2023 — Actualidad",
    role: "Ingeniero de desarrollo — Energy Computer Systems S.A.S",
    description: [
      "Diseñar, desarrollar e implementar aplicaciones web y de escritorio utilizando múltiples tecnologías y frameworks modernos.",
      "Optimizar y refactorizar código para mejorar el rendimiento, la escalabilidad y la eficiencia de los sistemas.",
      "Gestionar y administrar bases de datos relacionales, diseñando esquemas, optimizando consultas y garantizando la integridad de la información.",
      "Diseñar, desarrollar y mantener APIs REST para facilitar la integración entre sistemas y servicios empresariales.",
      "Identificar, diagnosticar y resolver problemas técnicos en servidores, aplicaciones web, APIs y sistemas de bases de datos en entornos de desarrollo y producción.",
      "Implementar y gestionar sistemas de control de versiones para mejorar la colaboración, trazabilidad y mantenimiento del código fuente.",
      "Ejecutar procesos de actualización, despliegue y mantenimiento de software en entornos de pruebas, preproducción y producción.",
      "Planificar y ejecutar pruebas funcionales, de integración y de sistema para garantizar la calidad y estabilidad de las aplicaciones.",
      "Implementar prácticas de CI/CD para mejorar la eficiencia en la entrega de software, reduciendo errores y bajando los tiempos de despliegue más de un 80%.",
    ],
  },
  {
    period: "Julio 2021 — Enero 2023",
    role: "Desarrollador de software — Lupa Jurídica S.A.S",
    description: [
      "Diseñar e implementar sistemas de gestión y auditoría para entidades gubernamentales de alto perfil, incluyendo Agencia de Defensa Jurídica del Estado, Colpensiones y Ministerio de Educación, procesando más de 1 millón de registros mensuales.",
      "Levantar requerimientos y analizar necesidades técnicas para el desarrollo de soluciones web empresariales.",
      "Desarrollar y mantener plataformas web corporativas aplicando tecnologías modernas y buenas prácticas de desarrollo de software.",
      "Crear e implementar APIs robustas en Python y PHP para facilitar la integración entre sistemas y servicios web.",
      "Desarrollar scripts de automatización y web scraping para la extracción y procesamiento de información desde documentos y fuentes externas.",
      "Implementar funcionalidades web complejas para mejorar la experiencia de usuario y optimizar procesos operativos.",
    ],
  },
  {
    period: "Septiembre 2020 — Marzo 2021",
    role: "Aprendiz interno — JUMIO S.A.S",
    description: [
      "Participar en el ciclo completo de desarrollo de software, desde el análisis de requerimientos hasta las pruebas y validación final de las aplicaciones.",
      "Colaborar en el diseño e implementación de arquitecturas de software siguiendo metodologías y buenas prácticas de desarrollo.",
      "Desarrollar componentes de software aplicando principios de programación limpia, mantenibilidad y calidad de código.",
      "Ejecutar planes de pruebas funcionales y de calidad para contribuir al aseguramiento y estabilidad de las soluciones desarrolladas.",
    ],
  },
] as const;

export const aiWorkflow = {
  eyebrow: "Sistema operativo de IA",
  title: "IA aplicada al ciclo de ingeniería",
  description:
    "Uso la IA como una capa de arquitectura: convierto intención en requisitos claros, coordino agentes especializados y cierro entregas revisables con validación técnica.",
  pillars: [
    {
      icon: "PRD",
      title: "Producto antes del código",
      description:
        "Defino problema, alcance, criterios de aceptación y riesgos antes de pedirle a la IA que ejecute.",
      tags: ["PRD", "Requerimientos", "Criterios"],
    },
    {
      icon: "SDD",
      title: "Agente Orquestador + agentes SDD",
      description:
        "Descompongo el objetivo en especificaciones, decisiones técnicas y tareas pequeñas para que cada agente ejecute con contexto.",
      tags: ["Orquestador IA", "Agentes SDD", "Diseño técnico", "Engram", "Gentle-AI"],
    },
    {
      icon: "TDD",
      title: "Pruebas antes de integrar",
      description:
        "Valido cada entrega con verificaciones técnicas antes de integrar cambios al flujo principal.",
      tags: ["Tests", "Typecheck", "Lint"],
    },
    {
      icon: "AGT",
      title: "Orquestador IA",
      description:
        "Coordino herramientas especializadas para explorar, implementar, verificar y documentar sin perder control técnico.",
      tags: ["Codex", "Claude Code", "OpenCode", "Antigravity CLI", "Qwen CLI"],
    },
    {
      icon: "PR",
      title: "PR listo para revisión",
      description:
        "Cierro con cambios revisables, trazabilidad, checks y una entrega lista para conversación técnica.",
      tags: ["Revisión", "GitHub Actions", "CI", "Entrega"],
    },
  ],
} as const;

export const footerLinks = [
  { label: "GitHub", href: externalLinks.github },
  { label: "LinkedIn", href: externalLinks.linkedin },
  { label: "Ver CV", href: externalLinks.cv },
] as const;
