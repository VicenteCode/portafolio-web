export type Herramienta = {
  id: string;
  nombre: string;
  icono: string;
};

export const HERRAMIENTAS: Herramienta[] = [
  { id: "git",    nombre: "Git",     icono: "git"    },
  { id: "nodejs", nombre: "Node.js", icono: "nodejs" },
];
