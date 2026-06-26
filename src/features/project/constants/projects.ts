import type { IconType } from "react-icons";
import { SiNodedotjs, SiExpress, SiTypescript, SiPostgresql, SiPrisma, SiGithub, SiNextdotjs, SiReact, SiTailwindcss, SiFramer } from "react-icons/si";

type StaticProjectIcon = {
  Icon: IconType;
  name: string;
};

type StaticProjectLink = {
  label: string;
  href: string;
  icon: IconType;
};

type StaticProject = {
  id: string;
  images: string[];
  icons: StaticProjectIcon[];
  links: StaticProjectLink[];
};

export const PROJECTS_STATIC: StaticProject[] = [
  {
    id: "fadeforge-api",
    images: ["/projects/ProyectoApiFadeForge.jpeg"],
    icons: [
      { Icon: SiNodedotjs,  name: "Node.js"     },
      { Icon: SiExpress,    name: "Express"     },
      { Icon: SiTypescript, name: "TypeScript"  },
      { Icon: SiPostgresql, name: "PostgreSQL"  },
      { Icon: SiPrisma,     name: "Prisma"      },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/FadeForge-Gestor/fadeforge-api", icon: SiGithub },
    ],
  },
  {
    id: "portfolio-web",
    images: ["/projects/PortafolioWeb.png"],
    icons: [
      { Icon: SiNextdotjs,    name: "Next.js"         },
      { Icon: SiReact,        name: "React"           },
      { Icon: SiTypescript,   name: "TypeScript"      },
      { Icon: SiTailwindcss,  name: "Tailwind CSS"    },
      { Icon: SiFramer,       name: "Framer Motion"   },
    ],
    links: [
      { label: "GitHub", href: "https://github.com/VicenteCode/portafolio-web", icon: SiGithub },
    ],
  },
];
