import type { IconType } from "react-icons";
import { SiNextdotjs, SiExpress, SiExpo, SiReact } from "react-icons/si";

export type Framework = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const FRAMEWORKS: Framework[] = [
  { id: "nextjs",        nombre: "Next.js",      icono: SiNextdotjs },
  { id: "react-native",  nombre: "React Native", icono: SiReact     },
  { id: "express",       nombre: "Express",      icono: SiExpress   },
  { id: "expo",          nombre: "Expo",         icono: SiExpo      },
];
