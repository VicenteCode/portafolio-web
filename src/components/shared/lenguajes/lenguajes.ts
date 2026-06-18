import type { IconType } from "react-icons";
import { SiJavascript, SiDotnet, SiHtml, SiCss, SiTypescript } from "react-icons/si";
import { BsDatabase } from "react-icons/bs";

export type Lenguaje = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const LENGUAJES: Lenguaje[] = [
  { id: "javascript", nombre: "JavaScript", icono: SiJavascript },
  { id: "dotnet",     nombre: ".NET",        icono: SiDotnet     },
  { id: "sql",        nombre: "SQL",         icono: BsDatabase   },
  { id: "html",       nombre: "HTML",        icono: SiHtml },
  { id: "css",        nombre: "CSS",         icono: SiCss  },
  { id: "typescript", nombre: "TypeScript",  icono: SiTypescript },
];
