type Segment = { text: string; highlight?: boolean };
type Job = { company: string; role: string; period: string; modality: string; description: string };
type EducationItem = { career: string; school: string; period: string };

interface NavTranslations {
  start: string;
  aboutMe: string;
  experience: string;
  project: string;
  stack: string;
  skills: string;
  education: string;
  cv: string;
}

interface LangTranslations {
  nav: NavTranslations;
  hero: { greeting: string; subtitle: string; legend: readonly string[] };
  about: { title: string; description: Segment[] };
  experience: { title: string; roleLabel: string; modalityLabel: string; jobs: Job[] };
  stack: { title: string; showMore: (n: number) => string; showLess: string; groupLabels: { languages: string; frameworks: string; libraries: string; tools: string } };
  skills: { title: string; showMore: (n: number) => string; showLess: string; items: readonly string[] };
  education: { title: string; items: EducationItem[] };
}

export const translations: Record<"en" | "es", LangTranslations> = {
  en: {
    nav: {
      start: "Start",
      aboutMe: "About Me",
      experience: "Experience",
      project: "Project",
      stack: "Stack",
      skills: "Skills",
      education: "Education",
      cv: "Download CV",
    },
    hero: {
      greeting: "Hello, I'm Vicente",
      subtitle: "Full Stack Developer",
      legend: [
        "Full Stack Developer in the JS Ecosystem",
        "Computer Systems Engineer",
        "I like creating efficient solutions with a minimalist design",
      ],
    },
    about: {
      title: "About Me",
      description: [
        { text: "I'm a " },
        { text: "Systems Engineer", highlight: true },
        { text: " passionate about " },
        { text: "Full Stack development", highlight: true },
        { text: " with a growing interest in " },
        { text: "software architecture", highlight: true },
        { text: ". I'm driven to design systems that are " },
        { text: "well-structured, scalable, and easy to maintain", highlight: true },
        { text: " — applying patterns like " },
        { text: "MVC and hexagonal architecture", highlight: true },
        { text: " alongside " },
        { text: "SOLID principles and clean architecture", highlight: true },
        { text: ". I enjoy " },
        { text: "understanding the problem deeply", highlight: true },
        { text: " before writing a single line of code, ensuring every technical decision makes sense for both the " },
        { text: "team and the business", highlight: true },
        { text: ". I've worked on " },
        { text: "web and mobile projects end-to-end", highlight: true },
        { text: ", collaborating directly with clients and " },
        { text: "agile teams", highlight: true },
        { text: ", and integrating " },
        { text: "AI-powered automation", highlight: true },
        { text: " when it adds real value." },
      ],
    },
    experience: {
      title: "My Experience",
      roleLabel: "Role",
      modalityLabel: "Modality",
      jobs: [
        {
          company: "Helius Consulting",
          role: "Full Stack Developer (Web / Mobile)",
          period: "Sep 2025 – Jun 2026 · 9 months",
          modality: "Hybrid",
          description:
            "Full Stack Developer with experience in custom web and mobile projects: requirements gathering, development, and production deployment. Built management, reporting, coworking, and billing systems using React and TypeScript on the frontend, Node.js and .NET on the backend, and mobile. Integration and consumption of REST APIs for service-to-service communication. Applied Clean Architecture, SOLID principles, and MVC and Hexagonal patterns. Worked under agile methodologies with ticket-based management, version control, and CI/CD pipeline setup in Azure DevOps for test automation and continuous deployment. Also integrated AI automation and have experience in direct client-facing communication.",
        },
        {
          company: "Centro de Idiomas Lifelong",
          role: "Frontend Web Developer",
          period: "Aug 2024 – Apr 2025 · 9 months",
          modality: "Hybrid",
          description:
            "Collaborated in the development of a website using ReactJS with a focus on the frontend. Implemented the contact form to ensure user interaction and designed an image slideshow with timed transitions to enhance visual dynamism. Applied UX/UI design principles to deliver an attractive and intuitive interface.",
        },
      ],
    },
    stack: {
      title: "My Stack",
      showMore: (n) => `Show more (${n} more)`,
      showLess: "Show less",
      groupLabels: { languages: "Languages", frameworks: "Frameworks", libraries: "Libraries", tools: "Tools" },
    },
    skills: {
      title: "My Skills",
      showMore: (n) => `Show more (${n} more)`,
      showLess: "Show less",
      items: [
        "Agile methodologies and ticket-based management",
        "Production application deployment",
        "Creativity",
        "Clean and hexagonal architecture",
        "Custom software development",
        "Application of MVC design patterns",
        "AI automation tools integration",
        "Technical communication with different team and business profiles",
        "Requirements analysis",
        "Development environment management",
        "Build generation and signing for Google Play distribution (APK / AAB)",
        "Frontend architecture with atomic design and container-presentational pattern",
      ],
    },
    education: {
      title: "My Education",
      items: [
        { career: "Computer Systems Engineering", school: "Universidad Jean Piaget", period: "2022 – 2025" },
        { career: "Computer Technician", school: "Conalet Siglo XXI", period: "2019 – 2022" },
      ],
    },
  },
  es: {
    nav: {
      start: "Inicio",
      aboutMe: "Sobre Mí",
      experience: "Experiencia",
      project: "Proyecto",
      stack: "Stack",
      skills: "Habilidades",
      education: "Educación",
      cv: "Descargar CV",
    },
    hero: {
      greeting: "Hola, soy Vicente",
      subtitle: "Desarrollador Full Stack",
      legend: [
        "Desarrollador Full Stack en el Ecosistema JS",
        "Ingeniero en Sistemas Computacionales",
        "Me gusta crear soluciones eficientes con diseño minimalista",
      ],
    },
    about: {
      title: "Sobre Mí",
      description: [
        { text: "Soy un " },
        { text: "Ingeniero en Sistemas", highlight: true },
        { text: " apasionado por el " },
        { text: "desarrollo Full Stack", highlight: true },
        { text: " con un creciente interés en " },
        { text: "arquitectura de software", highlight: true },
        { text: ". Me motiva diseñar sistemas " },
        { text: "bien estructurados, escalables y fáciles de mantener", highlight: true },
        { text: " — aplicando patrones como " },
        { text: "MVC y arquitectura hexagonal", highlight: true },
        { text: " junto con " },
        { text: "principios SOLID y arquitectura limpia", highlight: true },
        { text: ". Disfruto " },
        { text: "entender profundamente el problema", highlight: true },
        { text: " antes de escribir una sola línea de código, asegurando que cada decisión técnica tenga sentido para " },
        { text: "el equipo y el negocio", highlight: true },
        { text: ". He trabajado en " },
        { text: "proyectos web y móviles de extremo a extremo", highlight: true },
        { text: ", colaborando directamente con clientes y " },
        { text: "equipos ágiles", highlight: true },
        { text: ", e integrando " },
        { text: "automatización con IA", highlight: true },
        { text: " cuando aporta valor real." },
      ],
    },
    experience: {
      title: "Mi Experiencia",
      roleLabel: "Rol",
      modalityLabel: "Modalidad",
      jobs: [
        {
          company: "Helius Consulting",
          role: "Desarrollador Full Stack (Web / Móvil)",
          period: "Sep 2025 – Jun 2026 · 9 meses",
          modality: "Híbrido",
          description:
            "Desarrollador Full Stack con experiencia en proyectos web y móviles a medida: relevamiento de requisitos, desarrollo y despliegue en producción. Construí sistemas de gestión, reportes, coworking y facturación usando React y TypeScript en el frontend, Node.js y .NET en el backend y móvil. Integración y consumo de APIs REST para comunicación entre servicios. Apliqué Arquitectura Limpia, principios SOLID y patrones MVC y Hexagonal. Trabajé bajo metodologías ágiles con gestión por tickets, control de versiones y configuración de pipelines CI/CD en Azure DevOps para automatización de tests y despliegue continuo. También integré automatización con IA y tengo experiencia en comunicación directa con clientes.",
        },
        {
          company: "Centro de Idiomas Lifelong",
          role: "Desarrollador Web Frontend",
          period: "Ago 2024 – Abr 2025 · 9 meses",
          modality: "Híbrido",
          description:
            "Colaboré en el desarrollo de un sitio web usando ReactJS con foco en el frontend. Implementé el formulario de contacto para asegurar la interacción con el usuario y diseñé un carrusel de imágenes con transiciones temporizadas para mejorar el dinamismo visual. Apliqué principios de diseño UX/UI para lograr una interfaz atractiva e intuitiva.",
        },
      ],
    },
    stack: {
      title: "Mi Stack",
      showMore: (n) => `Ver más (${n} más)`,
      showLess: "Ver menos",
      groupLabels: { languages: "Lenguajes", frameworks: "Frameworks", libraries: "Librerías", tools: "Herramientas" },
    },
    skills: {
      title: "Mis Habilidades",
      showMore: (n) => `Ver más (${n} más)`,
      showLess: "Ver menos",
      items: [
        "Metodologías ágiles y gestión por tickets",
        "Despliegue de aplicaciones en producción",
        "Creatividad",
        "Arquitectura limpia y hexagonal",
        "Desarrollo de software a medida",
        "Aplicación de patrones de diseño MVC",
        "Integración de herramientas de automatización con IA",
        "Comunicación técnica con distintos perfiles de equipo y negocio",
        "Análisis de requisitos",
        "Gestión de entornos de desarrollo",
        "Generación y firma de builds para distribución en Google Play (APK / AAB)",
        "Arquitectura frontend con diseño atómico y patrón contenedor-presentacional",
      ],
    },
    education: {
      title: "Mi Educación",
      items: [
        { career: "Ingeniería en Sistemas Computacionales", school: "Universidad Jean Piaget", period: "2022 – 2025" },
        { career: "Técnico en Computación", school: "Conalet Siglo XXI", period: "2019 – 2022" },
      ],
    },
  },
};
