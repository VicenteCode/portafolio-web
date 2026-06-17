export type Herramienta = {
  id: string;
  nombre: string;
  icono: string;
};

export const HERRAMIENTAS: Herramienta[] = [
  { id: "git",             nombre: "Git",                    icono: "git"             },
  { id: "nodejs",          nombre: "Node.js",                icono: "nodejs"          },
  { id: "github",          nombre: "GitHub",                 icono: "github"          },
  { id: "docker",          nombre: "Docker",                 icono: "docker"          },
  { id: "postman",         nombre: "Postman",                icono: "postman"         },
  { id: "swagger",         nombre: "Swagger",                icono: "swagger"         },
  { id: "androidstudio",   nombre: "Android Studio",         icono: "androidstudio"   },
  { id: "azuredevops",     nombre: "Azure DevOps",           icono: "azuredevops"     },
  { id: "jira",            nombre: "Jira",                   icono: "jira"            },
  { id: "figma",           nombre: "Figma",                  icono: "figma"           },
  { id: "cli",             nombre: "CLI",                    icono: "cli"             },
  { id: "postgresql",      nombre: "PostgreSQL",             icono: "postgresql"      },
  { id: "drawio",          nombre: "draw.io",                icono: "drawio"          },
  { id: "notion",          nombre: "Notion",                 icono: "notion"          },
  { id: "prisma",          nombre: "Prisma",                 icono: "prisma"          },
  { id: "api",             nombre: "APIs",                   icono: "api"             },
];
