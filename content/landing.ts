export const projectCategories = ["commerce", "ai-data", "management"] as const;
export type ProjectCategory = (typeof projectCategories)[number];

export const defaultLanguage = "es";

export const languages = ["es", "en"] as const;

export type Language = (typeof languages)[number];

export const externalLinks = {
  github: "https://github.com/alexanderbeleno16",
  githubRepositories: "https://github.com/alexanderbeleno16?tab=repositories",
  linkedin: "https://www.linkedin.com/in/alexander-bele%C3%B1o/",
  cv: "https://drive.google.com/file/d/1WqkqKXfaJaIT4ruQyvO7F8gGOBqHbywI/view?usp=drive_link",
} as const;

export const contact = {
  email: "ing.alexbeleno@gmail.com",
} as const;

export const landingContent = {
  es: {
    navItems: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Estudios", href: "#estudios" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Contacto", href: "#contacto" },
    ],
    header: {
      mobileMenuOpenLabel: "Abrir menú de navegación",
      mobileMenuCloseLabel: "Cerrar menú de navegación",
      mobileNavigationLabel: "Navegación móvil",
      primaryNavigationLabel: "Navegación principal",
      cvLabel: "Abrir CV de Alexander Beleno en una nueva pestaña",
    },
    languageToggle: {
      label: "Cambiar idioma",
      optionLabels: {
        es: "Cambiar a español",
        en: "Cambiar a inglés",
      },
    },
    hero: {
      eyebrowTexts: [
        "Ingeniero de sistemas y computación",
        "Full Stack developer",
        "Web developer",
      ],
      eyebrow: "Ingeniería de sistemas y computación",
      name: "Alexander Beleño",
      title: "Hola, soy",
      summary:
        "Ingeniero de Sistemas enfocado en el diseño de arquitecturas escalables, automatización con IA y despliegue robusto de soluciones digitales modernas.",
      image: {
        src: "/profile/perfil_2026.png",
        alt: "Retrato profesional de Alexander Beleño con traje oscuro y camisa blanca.",
      },
      projectsCta: "Ver proyectos",
      contactAriaLabel: "Correo",
    },
    stats: [
      { value: "5+", label: "Años Exp." },
      { value: "20+", label: "Proyectos" },
      { value: "12+", label: "Certificaciones" },
      { value: "100%", label: "Compromiso" },
    ],
    about: {
      eyebrow: "Sobre mí",
      titlePrefix: "Mi perfil",
      titleHighlight: "profesional",
      terminalIntro: [
        "Bienvenido a la terminal de Alexander",
        'Escribe "help" para ver los comandos disponibles',
        'Prueba "profile" para leer mi resumen profesional',
      ],
      paragraphs: [
        "Más de 5 años de experiencia como Ingeniero de Sistemas y Computación, desarrollando aplicaciones web, plataformas empresariales y soluciones full stack utilizando tecnologías a la vanguardia.",
        "Experiencia en desarrollo de APIs, optimización de bases de datos, integración de sistemas y despliegues en entornos productivos utilizando Docker y tecnologías modernas de infraestructura.",
        "He participado en soluciones para entornos empresariales y gubernamentales, involucrándome en todo el ciclo de vida del software, desde el levantamiento de requerimientos hasta la implementación y mantenimiento en producción.",
        "Me enfoco en construir sistemas escalables, eficientes y mantenibles, aplicando buenas prácticas de desarrollo, optimización y arquitectura de software.",
      ],
    },
    studies: {
      eyebrow: "Formación",
      titlePrefix: "Mis",
      titleHighlight: "Estudios",
      description:
        "Bases académicas y técnicas que sostienen mi trabajo como ingeniero de software.",
      items: [
        {
          icon: "graduation",
          title: "Ingeniería de Sistemas y Computación",
          institution: "Corporación Universitaria Latinoamericana CUL",
          location: "Colombia, Barranquilla",
          year: "Diciembre 2024",
          description:
            "Formación universitaria en desarrollo de software, arquitectura, gestión de proyectos tecnológicos y soluciones computacionales.",
        },
        {
          icon: "shield",
          title: "Diplomado seguridad en redes informáticas",
          institution: "Corporación Universitaria Latinoamericana CUL",
          location: "Colombia, Barranquilla",
          year: "Diciembre 2024",
          description:
            "Profundización en protección de infraestructura, redes, controles de seguridad y buenas prácticas defensivas.",
        },
        {
          icon: "code",
          title: "Tecnólogo en análisis y desarrollo de sistemas de información",
          institution: "Servicio Nacional de Aprendizaje SENA",
          location: "Colombia, Barranquilla",
          year: "Mayo 2021",
          description:
            "Base técnica en análisis, diseño, construcción y mantenimiento de sistemas de información.",
        },
        {
          icon: "terminal",
          title: "Técnico en desarrollo de software",
          institution: "Servicio Nacional de Aprendizaje SENA",
          location: "Colombia, Barranquilla",
          year: "Diciembre 2018",
          description:
            "Fundamentos prácticos de programación, paradigmas de desarrollo, bases de datos, lógica y construcción de aplicaciones.",
        },
      ],
    },
    skills: {
      titlePrefix: "Stack técnico y",
      titleHighlight: "dominio",
      description:
        "Un sistema de capacidades pensado para producto: frontend expresivo, backend sólido, nube automatizada e IA aplicada.",
      aiTitle: "IA, automatización y datos",
      aiDescription:
        "Herramientas de IA para desarrollo asistido, integración de APIs, agentes y automatización, junto con modelos GBM y análisis de datos.",
      efficiencyTitle: "Eficiencia",
      efficiencyDescription:
        "Metodologías ágiles, CI/CD y optimización de flujos de trabajo en equipos de alto rendimiento.",
    },
    skillGroups: [
      {
        icon: "LANG",
        title: "Lenguajes",
        tags: [
          "Python",
          "JavaScript",
          "TypeScript",
          "PHP",
          "Java",
          "SQL",
        ],
      },
      {
        icon: "WEB",
        title: "Frontend y móvil",
        tags: [
          "Angular",
          "React",
          "React Native",
          "Next.js",
          "Vue.js",
          "Astro",
          "HTML5",
          "CSS3",
          "jQuery",
          "PrimeNG",
          "TailwindCSS",
          "SCSS",
          "Bootstrap",
        ],
      },
      {
        icon: "API",
        title: "Backend e integración",
        tags: [
          "Node.js",
          "FastAPI",
          "Flask",
          "Laravel",
          "JSP",
          "JSF",
          "PrimeFaces",
          "Thymeleaf",
          "Spring Boot",
          "JDBC Template",
          "JPA",
          "Kafka",
          "Django",
        ],
      },
      {
        icon: "DB",
        title: "Bases de datos",
        tags: [
          "PostgreSQL",
          "Oracle",
          "MySQL",
          "MariaDB",
          "MongoDB",
          "Redis",
          "Supabase",
          "SQLite",
        ],
      },
      {
        icon: "OPS",
        title: "Cloud y DevOps",
        tags: [
          "Docker",
          "Nginx",
          "Git",
          "Linux",
          "Portainer",
          "Jenkins Pipelines",
          "VPS",
          "Azure AI",
          "Azure Foundry",
          "AWS",
          "Google Cloud Platform (GCP)",
          "Vercel",
          "GitHub Actions",
        ],
      },
      {
        icon: "ARC",
        title: "Arquitectura y prácticas",
        tags: [
          "APIs REST",
          "Integración de sistemas",
          "Arquitectura en capas",
          "Arquitectura hexagonal",
          "Monolitos",
          "Microservicios",
          "POO",
          "SOLID",
          "Clean Code",
          "Web scraping",
          "Georreferenciación",
          "Optimización de consultas",
          "Testing E2E",
          "SDD",
          "PRD",
          "TDD",
          "Orquestación multi-modelo",
          "Agentes de IA",
          "Prompting avanzado",
        ],
      },
    ],
    projectsSection: {
      titlePrefix: "Proyectos",
      titleHighlight: "Destacados",
      description:
        "Explora mis proyectos por categoría y elige cómo verlos.",
      moreLabel: "Ver más",
      allLabel: "Todos",
      categories: { commerce: "Comercio", "ai-data": "IA y datos", management: "Gestión" },
      cardsLabel: "Tarjetas",
      listLabel: "Lista",
      resultCount: "{count} proyectos",
      moreTechnologies: "+{count} tecnologías",
      filterLabel: "Categorías de proyectos",
      viewLabel: "Vista de proyectos",
    },
    projectActions: {
      detail: "Detalle",
      projectDetailLabel: "Detalle del proyecto",
      closeDetail: "Cerrar detalle de {project}",
      closeModal: "Cerrar modal",
      openDemo: "Abrir demo de {project} en nueva pestaña",
      openCapture: "Abrir captura {index} de {project} en pantalla completa",
      captureAlt: "{project} — captura {index}",
      expandedCaptureAlt: "{project} — captura {index} ampliada",
      expand: "Ampliar",
      imageCount: "Imagen {index} de {total}",
      showMoreCaptures: "Ver más capturas ({count} restantes)",
      fullscreenGallery: "Galería en pantalla completa de {project}",
      zoomOut: "Alejar",
      zoomIn: "Acercar",
      closeFullscreen: "Cerrar pantalla completa",
      previousImage: "Ver imagen anterior",
      nextImage: "Ver imagen siguiente",
      previousProjectImage: "Ver imagen anterior de {project}",
      nextProjectImage: "Ver imagen siguiente de {project}",
      viewProjectImage: "Ver imagen {index} de {project}",
      imageSetLabel: "Imagen {index} de {total} de {project}",
      viewDetail: "Ver detalle de {project}",
    },
    projects: [
      {
        category: "ai-data",
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
        category: "management",
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
        category: "ai-data",
        title: "KOA Verify",
        description:
          "Prototipo autohospedado de verificación facial de identidad con captura guiada o carga de selfie y documento, validación de calidad de imagen en el servidor y comparación facial 1:1.",
        image: "/projects/reto-koa/cap1.png",
        gallery: [
          "/projects/reto-koa/cap1.png",
          "/projects/reto-koa/cap2.png",
          "/projects/reto-koa/cap3.png",
          "/projects/reto-koa/cap4.png",
          "/projects/reto-koa/cap5.png",
        ],
        alt: "Flujo de KOA Verify para captura guiada y comparación facial.",
        tags: ["Angular", "TypeScript", "FastAPI", "OpenCV", "CompreFace", "Docker"],
        primaryAction: "Demo",
        demoHref: "https://retokoaverify.online/",
      },
      {
        category: "commerce",
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
        category: "management",
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
      {
        category: "commerce",
        title: "Product Payment - ShopiFast",
        description:
          "Tienda de demostración desplegada en AWS con catálogo y checkout de un producto: cotizaciones del servidor, tokenización de tarjeta cifrada con JWE, pagos idempotentes y recuperación de estado. Frontend React/Vite con Redux Toolkit; API NestJS con arquitectura hexagonal, TypeORM y PostgreSQL. Despliegue AWS en S3/CloudFront, ECS Fargate y RDS, con pruebas Jest y CI/CD mediante GitHub Actions.",
        image: "/projects/product-payment/catalog-hd.jpg",
        gallery: [
          "/projects/product-payment/catalog-hd.jpg",
          "/projects/product-payment/product-detail-hd.jpg",
          "/projects/product-payment/checkout-hd.jpg",
          "/projects/product-payment/payment-pending.png",
          "/projects/product-payment/payment-approved.png",
        ],
        alt: "Capturas de ShopiFast: catálogo, detalle del producto, formulario de tarjeta y entrega, y pantallas de pago pendiente y aprobado.",
        tags: [
          "React", "TypeScript", "Vite", "Redux Toolkit", "NestJS",
          "TypeORM", "PostgreSQL", "Docker", "Jest", "AWS S3",
          "AWS CloudFront", "AWS ECS Fargate", "AWS RDS", "GitHub Actions",
        ],
        primaryAction: "Demo",
        demoHref: "https://d12hv8vhtndguc.cloudfront.net/",
      },
      {
        category: "management",
        title: "MyKondo",
        description:
          "Plataforma en desarrollo para la gestión operativa de conjuntos residenciales, con identidad multi-tenant, propiedades, bandeja de comunicaciones asistidas por IA y flujos de aprobación.",
        image: "/projects/en_construccion.png",
        gallery: ["/projects/en_construccion.png"],
        alt: "Aviso visual de proyecto MyKondo en construcción.",
        tags: ["React Native", "Expo", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker"],
        primaryAction: "Demo",
      },
    ],
    timelineSection: {
      eyebrow: "Experiencia",
      titlePrefix: "Trayectoria",
      titleHighlight: "Profesional",
      description:
        "Una línea de tiempo visual que conecta cada etapa profesional con foco en impacto, contexto y evolución.",
      morePoints: "+{count} puntos más",
      showMore: "Ver más",
      showLess: "Ver menos",
      showMoreAbout: "Ver más sobre {company}",
      showLessAbout: "Ver menos sobre {company}",
      summaryLabel: "Resumen de trayectoria",
    },
    timeline: [
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
    ],
    aiWorkflow: {
      eyebrow: "IA",
      titlePrefix: "IA aplicada al ciclo de",
      titleHighlight: "ingeniería",
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
      ],
    },
    contactSection: {
      eyebrow: "Contacto",
      titlePrefix: "Trabajemos",
      titleHighlight: "juntos",
      description:
        "¿Tienes un proyecto o una oportunidad laboral? Estoy abierto a nuevas conexiones y desafíos.",
      infoTitle: "Información de contacto",
      formTitle: "Envíame un mensaje",
      formAriaLabel: "Formulario de contacto por correo",
      labels: {
        email: "Correo electrónico",
        location: "Ubicación",
        name: "Nombre",
        formEmail: "Email",
        subject: "Asunto",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        subject: "¿En qué puedo ayudarte?",
        message: "Cuéntame sobre tu proyecto u oportunidad...",
      },
      mailBodyLabels: {
        name: "Nombre",
        email: "Email",
      },
      submit: "Enviar mensaje",
      locationValue: "Barranquilla, Colombia",
    },
    footer: {
      description: "Ingeniería de precisión para ecosistemas digitales modernos.",
      cvLabel: "Ver CV",
      madeBy:
        "Hecho con ❤️ por Ing. Alexander Beleño, Ingeniero de sistemas y computación.",
    },
    chatbot: {
      triggerLabel: "Abrir asistente del portafolio",
      title: "Asistente del portafolio",
      subtitle: "Respuestas rápidas basadas en mi hoja de vida.",
      statusLabel: "Disponible",
      closeLabel: "Cerrar asistente",
      resetLabel: "Elegir otra pregunta",
      questionsLabel: "Preguntas sugeridas",
      answerLabel: "Respuesta del asistente",
      questions: [
        {
          id: "profile",
          question: "¿Cuál es el perfil profesional de Alexander?",
          answer:
            "Alexander es Ingeniero de Sistemas y Computación con más de 5 años de experiencia. Se enfoca en crear aplicaciones web, plataformas empresariales y soluciones full stack escalables, eficientes y mantenibles.",
        },
        {
          id: "experience",
          question: "¿Qué experiencia laboral tiene?",
          answer:
            "Trabaja como Ingeniero de desarrollo en Energy Computer Systems S.A.S desde enero de 2023. Antes fue Desarrollador de software en Lupa Jurídica S.A.S y Aprendiz interno en JUMIO S.A.S.",
        },
        {
          id: "skills",
          question: "¿Cuál es su stack técnico?",
          answer:
            "Su stack incluye React, Angular, Next.js y TypeScript en frontend; FastAPI, Python, Node.js, Java y Spring Boot en backend; PostgreSQL, Oracle, MySQL, Redis y Supabase; además de Docker, Vercel y GitHub Actions.",
        },
        {
          id: "education",
          question: "¿Cuál es su formación académica?",
          answer:
            "Es Ingeniero de Sistemas y Computación y cuenta con un diplomado en seguridad de redes informáticas. También es Tecnólogo en análisis y desarrollo de sistemas de información y Técnico en desarrollo de software.",
        },
        {
          id: "projects",
          question: "¿Qué proyectos destacados ha desarrollado?",
          answer:
            "El portafolio destaca KOA Verify, Colombia Monitor, EduNotas, DuoLuxe Essence, Optic-AI y MyKondo: soluciones de verificación facial, monitoreo, educación, comercio, gestión clínica y administración residencial.",
        },
        {
          id: "specialties",
          question: "¿En qué áreas se especializa?",
          answer:
            "Se especializa en arquitectura escalable, APIs REST, optimización de bases de datos, integración de sistemas, despliegues con Docker, automatización e IA aplicada al ciclo de ingeniería.",
        },
        {
          id: "contact",
          question: "¿Cómo puedo contactarlo?",
          answer:
            "Puedes escribirle a ing.alexbeleno@gmail.com. Está ubicado en Barranquilla, Colombia, y está abierto a proyectos, oportunidades laborales y nuevas conexiones.",
        },
      ],
    },
    backToTop: {
      ariaLabel: "Volver al inicio",
    },
  },
  en: {
    navItems: [
      { label: "Home", href: "#inicio" },
      { label: "About", href: "#sobre-mi" },
      { label: "Studies", href: "#estudios" },
      { label: "Skills", href: "#habilidades" },
      { label: "Projects", href: "#proyectos" },
      { label: "Experience", href: "#experiencia" },
      { label: "Contact", href: "#contacto" },
    ],
    header: {
      mobileMenuOpenLabel: "Open navigation menu",
      mobileMenuCloseLabel: "Close navigation menu",
      mobileNavigationLabel: "Mobile navigation",
      primaryNavigationLabel: "Primary navigation",
      cvLabel: "Open Alexander Beleno's Spanish CV PDF in a new tab",
    },
    languageToggle: {
      label: "Change language",
      optionLabels: {
        es: "Switch to Spanish",
        en: "Switch to English",
      },
    },
    hero: {
      eyebrowTexts: [
        "Systems and computer engineer",
        "Full Stack developer",
        "Web developer",
      ],
      eyebrow: "Systems and computer engineering",
      name: "Alexander Beleño",
      title: "Hi, I'm",
      summary:
        "Systems engineer focused on scalable architecture design, AI automation, and robust deployment of modern digital solutions.",
      image: {
        src: "/profile/perfil_2026.png",
        alt: "Professional portrait of Alexander Beleño wearing a dark suit and white shirt.",
      },
      projectsCta: "View projects",
      contactAriaLabel: "Email",
    },
    stats: [
      { value: "5+", label: "Years Exp." },
      { value: "20+", label: "Projects" },
      { value: "12+", label: "Certifications" },
      { value: "100%", label: "Commitment" },
    ],
    about: {
      eyebrow: "About me",
      titlePrefix: "My professional",
      titleHighlight: "profile",
      terminalIntro: [
        "Welcome to alexander's Terminal",
        'Type "help" to see available commands',
        'Try "profile" to read my professional summary',
      ],
      paragraphs: [
        "More than 5 years of experience as a Systems and Computer Engineer, building web applications, enterprise platforms, and full stack solutions with cutting-edge technologies.",
        "Experience developing APIs, optimizing databases, integrating systems, and deploying production environments with Docker and modern infrastructure technologies.",
        "I have worked on solutions for enterprise and government environments, participating across the full software lifecycle from requirements discovery to production implementation and maintenance.",
        "I focus on building scalable, efficient, and maintainable systems by applying strong development, optimization, and software architecture practices.",
      ],
    },
    studies: {
      eyebrow: "Education",
      titlePrefix: "My",
      titleHighlight: "Studies",
      description:
        "Academic and technical foundations that support my work as a software engineer.",
      items: [
        {
          icon: "graduation",
          title: "Systems and Computer Engineering",
          institution: "Corporación Universitaria Latinoamericana CUL",
          location: "Colombia, Barranquilla",
          year: "December 2024",
          description:
            "University training in software development, architecture, technology project management, and computational solutions.",
        },
        {
          icon: "shield",
          title: "Diploma in computer network security",
          institution: "Corporación Universitaria Latinoamericana CUL",
          location: "Colombia, Barranquilla",
          year: "December 2024",
          description:
            "Advanced study of infrastructure protection, networks, security controls, and defensive best practices.",
        },
        {
          icon: "code",
          title: "Technologist in information systems analysis and development",
          institution: "Servicio Nacional de Aprendizaje SENA",
          location: "Colombia, Barranquilla",
          year: "May 2021",
          description:
            "Technical foundation in analysis, design, construction, and maintenance of information systems.",
        },
        {
          icon: "terminal",
          title: "Software development technician",
          institution: "Servicio Nacional de Aprendizaje SENA",
          location: "Colombia, Barranquilla",
          year: "December 2018",
          description:
            "Practical foundations in programming, development paradigms, databases, logic, and application building.",
        },
      ],
    },
    skills: {
      titlePrefix: "Technical stack and",
      titleHighlight: "mastery",
      description:
        "A product-minded capability system: expressive frontend, solid backend, automated cloud, and applied AI.",
      aiTitle: "AI, automation & data",
      aiDescription:
        "AI tools for assisted development, API integration, agents and automation, alongside GBM models and data analysis.",
      efficiencyTitle: "Efficiency",
      efficiencyDescription:
        "Agile methodologies, CI/CD, and workflow optimization for high-performing teams.",
    },
    skillGroups: [
      {
        icon: "LANG",
        title: "Languages",
        tags: [
          "Python",
          "JavaScript",
          "TypeScript",
          "PHP",
          "Java",
          "SQL",
        ],
      },
      {
        icon: "WEB",
        title: "Frontend & mobile",
        tags: [
          "Angular",
          "React",
          "React Native",
          "Next.js",
          "Vue.js",
          "Astro",
          "HTML5",
          "CSS3",
          "jQuery",
          "PrimeNG",
          "TailwindCSS",
          "SCSS",
          "Bootstrap",
        ],
      },
      {
        icon: "API",
        title: "Backend & integration",
        tags: [
          "Node.js",
          "FastAPI",
          "Flask",
          "Laravel",
          "JSP",
          "JSF",
          "PrimeFaces",
          "Thymeleaf",
          "Spring Boot",
          "JDBC Template",
          "JPA",
          "Kafka",
          "Django",
        ],
      },
      {
        icon: "DB",
        title: "Databases",
        tags: [
          "PostgreSQL",
          "Oracle",
          "MySQL",
          "MariaDB",
          "MongoDB",
          "Redis",
          "Supabase",
          "SQLite",
        ],
      },
      {
        icon: "OPS",
        title: "Cloud & DevOps",
        tags: [
          "Docker",
          "Nginx",
          "Git",
          "Linux",
          "Portainer",
          "Jenkins Pipelines",
          "VPS",
          "Azure AI",
          "Azure Foundry",
          "AWS",
          "Google Cloud Platform (GCP)",
          "Vercel",
          "GitHub Actions",
        ],
      },
      {
        icon: "ARC",
        title: "Architecture & practices",
        tags: [
          "REST APIs",
          "Systems integration",
          "Layered architecture",
          "Hexagonal architecture",
          "Monoliths",
          "Microservices",
          "OOP",
          "SOLID",
          "Clean Code",
          "Web scraping",
          "Georeferencing",
          "Query optimization",
          "E2E testing",
          "SDD",
          "PRD",
          "TDD",
          "Multi-model orchestration",
          "AI agents",
          "Advanced prompting",
        ],
      },
    ],
    projectsSection: {
      titlePrefix: "Featured",
      titleHighlight: "Projects",
      description:
        "Explore my projects by category and choose how to view them.",
      moreLabel: "View more",
      allLabel: "All",
      categories: { commerce: "Commerce", "ai-data": "AI & data", management: "Management" },
      cardsLabel: "Cards",
      listLabel: "List",
      resultCount: "{count} projects",
      moreTechnologies: "+{count} technologies",
      filterLabel: "Project categories",
      viewLabel: "Project view",
    },
    projectActions: {
      detail: "Details",
      projectDetailLabel: "Project details",
      closeDetail: "Close details for {project}",
      closeModal: "Close modal",
      openDemo: "Open {project} demo in a new tab",
      openCapture: "Open screenshot {index} of {project} in fullscreen",
      captureAlt: "{project} — screenshot {index}",
      expandedCaptureAlt: "{project} — screenshot {index} enlarged",
      expand: "Expand",
      imageCount: "Image {index} of {total}",
      showMoreCaptures: "Show more screenshots ({count} remaining)",
      fullscreenGallery: "Fullscreen gallery for {project}",
      zoomOut: "Zoom out",
      zoomIn: "Zoom in",
      closeFullscreen: "Close fullscreen",
      previousImage: "View previous image",
      nextImage: "View next image",
      previousProjectImage: "View previous image of {project}",
      nextProjectImage: "View next image of {project}",
      viewProjectImage: "View image {index} of {project}",
      imageSetLabel: "Image {index} of {total} for {project}",
      viewDetail: "View details for {project}",
    },
    projects: [
      {
        category: "ai-data",
        title: "Colombia Monitor",
        description:
          "Territorial news monitoring platform that ingests, classifies, and visualizes local news with maps, filters, and AI-assisted summaries.",
        image: "/projects/colombia-monitor/situacion.png",
        gallery: [
          "/projects/colombia-monitor/situacion.png",
          "/projects/colombia-monitor/colombia-general.png",
          "/projects/colombia-monitor/mapa-incidencias.png",
          "/projects/colombia-monitor/noticias.png",
        ],
        alt: "Dark Colombia Monitor dashboard with metrics, an AI executive summary, and weekly news activity.",
        tags: ["Next.js", "TypeScript", "Supabase", "OpenAI API", "Leaflet", "Vercel"],
        primaryAction: "Demo",
        demoHref: "https://colombia-monitor-eight.vercel.app/ciudad/barranquilla/noticias",
      },
      {
        category: "management",
        title: "EduNotas",
        description:
          "Educational system with an Angular frontend and modular API for academic management, REST contracts, data validation, and Docker deployment.",
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
        alt: "Academic management interface with blue data visualizations on desktop monitors.",
        tags: ["Angular", "FastAPI", "SQLAlchemy", "Pydantic", "Docker"],
        primaryAction: "Demo",
        demoStatus: "offline",
      },
      {
        category: "ai-data",
        title: "KOA Verify",
        description:
          "Self-hosted facial identity-verification prototype with guided selfie and document capture or upload, server-side image-quality validation, and 1:1 face comparison.",
        image: "/projects/reto-koa/cap1.png",
        gallery: [
          "/projects/reto-koa/cap1.png",
          "/projects/reto-koa/cap2.png",
          "/projects/reto-koa/cap3.png",
          "/projects/reto-koa/cap4.png",
          "/projects/reto-koa/cap5.png",
        ],
        alt: "KOA Verify flow for guided capture and face comparison.",
        tags: ["Angular", "TypeScript", "FastAPI", "OpenCV", "CompreFace", "Docker"],
        primaryAction: "Demo",
        demoHref: "https://retokoaverify.online/",
      },
      {
        category: "commerce",
        title: "DuoLuxe Essence",
        description:
          "Premium fragrance monorepo with a public landing page, admin panel, catalog, orders, customers, WhatsApp, and sliders synchronized from Supabase.",
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
        alt: "Premium fragrance landing page with elegant photography, glass reflections, and a dark background.",
        tags: ["Astro", "Next.js", "TailwindCSS", "Supabase", "Vercel"],
        primaryAction: "Demo",
        demoHref: "https://duoluxe.vercel.app/",
      },
      {
        category: "management",
        title: "Optic-AI",
        description:
          "Multi-branch clinical and administrative platform for optical practices with patient, clinical history, appointment, RIPS, email, and audit modules.",
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
        alt: "Real Optic-AI screens with RIPS validation, operations dashboard, patients, clinical histories, appointments, and administration.",
        tags: ["Next.js", "HeroUI", "TypeScript", "FastAPI", "SQLAlchemy", "Supabase"],
        primaryAction: "Demo",
        demoHref: "https://optic-ai-three.vercel.app/login",
      },
      {
        category: "commerce",
        title: "Product Payment - ShopiFast",
        description:
          "AWS-hosted demo storefront with a product catalog and single-product checkout: server-calculated quotes, JWE-encrypted card tokenization, idempotent payments, and recoverable status. React/Vite frontend with Redux Toolkit; hexagonal NestJS API with TypeORM and PostgreSQL. AWS deployment on S3/CloudFront, ECS Fargate, and RDS, with Jest tests and GitHub Actions CI/CD.",
        image: "/projects/product-payment/catalog-hd.jpg",
        gallery: [
          "/projects/product-payment/catalog-hd.jpg",
          "/projects/product-payment/product-detail-hd.jpg",
          "/projects/product-payment/checkout-hd.jpg",
          "/projects/product-payment/payment-pending.png",
          "/projects/product-payment/payment-approved.png",
        ],
        alt: "ShopiFast screenshots: product catalog, product details, card and delivery form, and pending and approved payment screens.",
        tags: [
          "React", "TypeScript", "Vite", "Redux Toolkit", "NestJS",
          "TypeORM", "PostgreSQL", "Docker", "Jest", "AWS S3",
          "AWS CloudFront", "AWS ECS Fargate", "AWS RDS", "GitHub Actions",
        ],
        primaryAction: "Demo",
        demoHref: "https://d12hv8vhtndguc.cloudfront.net/",
      },
      {
        category: "management",
        title: "MyKondo",
        description:
          "A work-in-progress platform for residential community operations, with multi-tenant identity, properties, an AI-assisted communications inbox, and approval workflows.",
        image: "/projects/en_construccion.png",
        gallery: ["/projects/en_construccion.png"],
        alt: "MyKondo project under construction notice.",
        tags: ["React Native", "Expo", "TypeScript", "Java", "Spring Boot", "PostgreSQL", "Docker"],
        primaryAction: "Demo",
      },
    ],
    timelineSection: {
      eyebrow: "Experience",
      titlePrefix: "Professional",
      titleHighlight: "Journey",
      description:
        "A visual timeline that connects each professional stage with focus on impact, context, and growth.",
      morePoints: "+{count} more points",
      showMore: "Show more",
      showLess: "Show less",
      showMoreAbout: "Show more about {company}",
      showLessAbout: "Show less about {company}",
      summaryLabel: "Career summary",
    },
    timeline: [
      {
        period: "January 2023 — Present",
        role: "Development Engineer — Energy Computer Systems S.A.S",
        description: [
          "Design, develop, and implement web and desktop applications using multiple modern technologies and frameworks.",
          "Optimize and refactor code to improve system performance, scalability, and efficiency.",
          "Manage and administer relational databases by designing schemas, optimizing queries, and ensuring data integrity.",
          "Design, develop, and maintain REST APIs to enable integration between enterprise systems and services.",
          "Identify, diagnose, and resolve technical issues in servers, web applications, APIs, and database systems across development and production environments.",
          "Implement and manage version control systems to improve collaboration, traceability, and source-code maintainability.",
          "Execute software update, deployment, and maintenance processes across testing, pre-production, and production environments.",
          "Plan and execute functional, integration, and system tests to ensure application quality and stability.",
          "Implement CI/CD practices to improve software delivery efficiency, reducing errors and cutting deployment times by more than 80%.",
        ],
      },
      {
        period: "July 2021 — January 2023",
        role: "Software Developer — Lupa Jurídica S.A.S",
        description: [
          "Designed and implemented management and audit systems for high-profile government entities, including the State Legal Defense Agency, Colpensiones, and the Ministry of Education, processing more than 1 million records monthly.",
          "Gathered requirements and analyzed technical needs for enterprise web solution development.",
          "Developed and maintained corporate web platforms using modern technologies and software development best practices.",
          "Created and implemented robust APIs in Python and PHP to enable integration between systems and web services.",
          "Built automation and web scraping scripts to extract and process information from documents and external sources.",
          "Implemented complex web features to improve user experience and optimize operational processes.",
        ],
      },
      {
        period: "September 2020 — March 2021",
        role: "Internal Trainee — JUMIO S.A.S",
        description: [
          "Participated in the full software development lifecycle, from requirements analysis to application testing and final validation.",
          "Collaborated on software architecture design and implementation following development methodologies and best practices.",
          "Developed software components using clean programming, maintainability, and code quality principles.",
          "Executed functional and quality testing plans to support solution stability and assurance.",
        ],
      },
    ],
    aiWorkflow: {
      eyebrow: "AI",
      titlePrefix: "AI applied to the",
      titleHighlight: "engineering cycle",
      description:
        "I use AI as an architecture layer: turning intent into clear requirements, coordinating specialized agents, and closing reviewable deliveries with technical validation.",
      pillars: [
        {
          icon: "PRD",
          title: "Product before code",
          description:
            "I define the problem, scope, acceptance criteria, and risks before asking AI to execute.",
          tags: ["PRD", "Requirements", "Criteria"],
        },
        {
          icon: "SDD",
          title: "Orchestrator Agent + SDD agents",
          description:
            "I break the objective into specifications, technical decisions, and small tasks so each agent executes with context.",
          tags: ["AI Orchestrator", "SDD Agents", "Technical Design", "Engram", "Gentle-AI"],
        },
        {
          icon: "TDD",
          title: "Tests before integration",
          description:
            "I validate each delivery with technical checks before integrating changes into the main flow.",
          tags: ["Tests", "Typecheck", "Lint"],
        },
        {
          icon: "AGT",
          title: "AI Orchestrator",
          description:
            "I coordinate specialized tools to explore, implement, verify, and document without losing technical control.",
          tags: ["Codex", "Claude Code", "OpenCode", "Antigravity CLI", "Qwen CLI"],
        },
      ],
    },
    contactSection: {
      eyebrow: "Contact",
      titlePrefix: "Let's work",
      titleHighlight: "together",
      description:
        "Do you have a project or job opportunity? I am open to new connections and challenges.",
      infoTitle: "Contact information",
      formTitle: "Send me a message",
      formAriaLabel: "Email contact form",
      labels: {
        email: "Email address",
        location: "Location",
        name: "Name",
        formEmail: "Email",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "you@email.com",
        subject: "How can I help?",
        message: "Tell me about your project or opportunity...",
      },
      mailBodyLabels: {
        name: "Name",
        email: "Email",
      },
      submit: "Send message",
      locationValue: "Barranquilla, Colombia",
    },
    footer: {
      description: "Precision engineering for modern digital ecosystems.",
      cvLabel: "Spanish CV PDF",
      madeBy:
        "Made with ❤️ by Eng. Alexander Beleño, Systems and Computer Engineer.",
    },
    chatbot: {
      triggerLabel: "Open portfolio assistant",
      title: "Portfolio assistant",
      subtitle: "Quick answers based on my résumé.",
      statusLabel: "Available",
      closeLabel: "Close assistant",
      resetLabel: "Choose another question",
      questionsLabel: "Suggested questions",
      answerLabel: "Assistant answer",
      questions: [
        {
          id: "profile",
          question: "What is Alexander's professional profile?",
          answer:
            "Alexander is a Systems and Computer Engineer with more than 5 years of experience. He focuses on building scalable, efficient, and maintainable web applications, enterprise platforms, and full stack solutions.",
        },
        {
          id: "experience",
          question: "What professional experience does he have?",
          answer:
            "He has worked as a Development Engineer at Energy Computer Systems S.A.S since January 2023. Previously, he was a Software Developer at Lupa Jurídica S.A.S and an Internal Trainee at JUMIO S.A.S.",
        },
        {
          id: "skills",
          question: "What is his technical stack?",
          answer:
            "His stack includes React, Angular, Next.js, and TypeScript for frontend; FastAPI, Python, Node.js, Java, and Spring Boot for backend; PostgreSQL, Oracle, MySQL, Redis, and Supabase; plus Docker, Vercel, and GitHub Actions.",
        },
        {
          id: "education",
          question: "What is his educational background?",
          answer:
            "He holds a degree in Systems and Computer Engineering and a diploma in computer network security. He is also a Technologist in information systems analysis and development and a Software development technician.",
        },
        {
          id: "projects",
          question: "Which featured projects has he built?",
          answer:
            "The portfolio features KOA Verify, Colombia Monitor, EduNotas, DuoLuxe Essence, Optic-AI, and MyKondo: solutions for facial verification, monitoring, education, commerce, clinical management, and residential administration.",
        },
        {
          id: "specialties",
          question: "Which areas does he specialize in?",
          answer:
            "He specializes in scalable architecture, REST APIs, database optimization, system integration, Docker deployments, automation, and AI applied to the engineering lifecycle.",
        },
        {
          id: "contact",
          question: "How can I contact him?",
          answer:
            "You can email him at ing.alexbeleno@gmail.com. He is based in Barranquilla, Colombia, and is open to projects, job opportunities, and new connections.",
        },
      ],
    },
    backToTop: {
      ariaLabel: "Back to top",
    },
  },
} as const;

export type LandingContent = (typeof landingContent)[Language];
export type Project = LandingContent["projects"][number];
export type ProjectActions = LandingContent["projectActions"];

export const aiStack = [
  "ChatGPT", "OpenAI API", "Claude", "Gemini", "OpenRouter", "DeepSeek",
  "Ollama", "Qwen", "GitHub Copilot", "Pandas", "GBM",
] as const;
