export type Libreria = {
  id: string;
  nombre: string;
  icono: string;
};

export const LIBRERIAS: Libreria[] = [
  { id: "react",        nombre: "React",         icono: "react"        },
  { id: "react-native", nombre: "React Native",  icono: "react-native" },
  { id: "tailwind",     nombre: "Tailwind",       icono: "tailwind"     },
  { id: "nativewind",   nombre: "NativeWind",     icono: "nativewind"   },
  { id: "tanstack",     nombre: "TanStack Query", icono: "tanstack"     },
  { id: "axios",        nombre: "Axios",          icono: "axios"        },
  { id: "reactrouter",  nombre: "React Router",   icono: "reactrouter"  },
  { id: "zustand",      nombre: "Zustand",        icono: "zustand"      },
];
