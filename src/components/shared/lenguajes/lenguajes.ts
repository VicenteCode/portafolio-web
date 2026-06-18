import type { IconType } from "react-icons";
import { SiJavascript, SiDotnet, SiHtml5, SiCss3, SiTypescript } from "react-icons/si";
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
  { id: "html",       nombre: "HTML",        icono: SiHtml5      },
  { id: "css",        nombre: "CSS",         icono: SiCss3       },
  { id: "typescript", nombre: "TypeScript",  icono: SiTypescript },
];
