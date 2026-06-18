import type { IconType } from "react-icons";
import { SiReact, SiTailwindcss, SiReactquery, SiAxios, SiReactrouter } from "react-icons/si";
import { TbPackage } from "react-icons/tb";

export type Libreria = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const LIBRERIAS: Libreria[] = [
  { id: "react",        nombre: "React",          icono: SiReact       },
  { id: "react-native", nombre: "React Native",   icono: SiReact       },
  { id: "tailwind",     nombre: "Tailwind",        icono: SiTailwindcss },
  { id: "nativewind",   nombre: "NativeWind",      icono: SiTailwindcss },
  { id: "tanstack",     nombre: "TanStack Query",  icono: SiReactquery  },
  { id: "axios",        nombre: "Axios",           icono: SiAxios       },
  { id: "reactrouter",  nombre: "React Router",    icono: SiReactrouter },
  { id: "zustand",      nombre: "Zustand",         icono: TbPackage     },
];
