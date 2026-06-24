import type { IconType } from "react-icons";
import { SiNodedotjs, SiExpress, SiTypescript, SiPostgresql, SiPrisma, SiGithub } from "react-icons/si";

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
  image: string;
  icons: StaticProjectIcon[];
  links: StaticProjectLink[];
};

export const PROJECTS_STATIC: StaticProject[] = [
  {
    id: "fadeforge-api",
    image: "/projects/ProyectoApiFadeForge.jpeg",
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
];
