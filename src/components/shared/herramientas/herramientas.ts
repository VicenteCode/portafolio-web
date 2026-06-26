import type { IconType } from "react-icons";
import {
  SiGit, SiNodedotjs, SiGithub, SiDocker, SiPostman, SiSwagger,
  SiAndroidstudio, SiJira, SiFigma,
  SiVercel, SiSlack,
} from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";

export type Herramienta = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const HERRAMIENTAS: Herramienta[] = [
  { id: "git",           nombre: "Git",            icono: SiGit            },
  { id: "nodejs",        nombre: "Node.js",         icono: SiNodedotjs      },
  { id: "github",        nombre: "GitHub",          icono: SiGithub         },
  { id: "docker",        nombre: "Docker",          icono: SiDocker         },
  { id: "postman",       nombre: "Postman",         icono: SiPostman        },
  { id: "swagger",       nombre: "Swagger",         icono: SiSwagger        },
  { id: "androidstudio", nombre: "Android Studio",  icono: SiAndroidstudio  },
  { id: "azuredevops",   nombre: "Azure DevOps",    icono: TbBrandAzure     },
  { id: "jira",          nombre: "Jira",            icono: SiJira           },
  { id: "figma",         nombre: "Figma",           icono: SiFigma          },
  { id: "vercel",        nombre: "Vercel",          icono: SiVercel         },
  { id: "slack",         nombre: "Slack",           icono: SiSlack          },
];
