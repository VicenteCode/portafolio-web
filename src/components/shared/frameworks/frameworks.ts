export type Framework = {
  id: string;
  nombre: string;
  icono: string;
};

export const FRAMEWORKS: Framework[] = [
  { id: "nextjs",   nombre: "Next.js", icono: "nextjs"  },
  { id: "express",  nombre: "Express", icono: "express" },
  { id: "expo",     nombre: "Expo",    icono: "expo"    },
];
