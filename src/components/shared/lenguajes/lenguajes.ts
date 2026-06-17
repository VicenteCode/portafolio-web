export type Lenguaje = {
  id: string;
  nombre: string;
  icono: string;
};

export const LENGUAJES: Lenguaje[] = [
  { id: "javascript",  nombre: "JavaScript",  icono: "javascript"  },
  { id: "dotnet",      nombre: ".NET",         icono: "dotnet"      },
  { id: "sql",         nombre: "SQL",          icono: "sql"         },
  { id: "html",        nombre: "HTML",         icono: "html5"       },
  { id: "css",         nombre: "CSS",          icono: "css3"        },
  { id: "typescript",  nombre: "TypeScript",   icono: "typescript"  },
];
