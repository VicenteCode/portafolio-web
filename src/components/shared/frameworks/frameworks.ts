import type { IconType } from "react-icons";
import { SiNextdotjs, SiExpress, SiExpo } from "react-icons/si";

export type Framework = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const FRAMEWORKS: Framework[] = [
  { id: "nextjs",  nombre: "Next.js", icono: SiNextdotjs },
  { id: "express", nombre: "Express", icono: SiExpress   },
  { id: "expo",    nombre: "Expo",    icono: SiExpo      },
];
