import type { IconType } from "react-icons";
import { SiPostgresql, SiPrisma } from "react-icons/si";
import { BsDatabase, BsDatabaseFill } from "react-icons/bs";

export type BaseDeDatos = {
  id: string;
  nombre: string;
  icono: IconType;
};

export const BASES_DE_DATOS: BaseDeDatos[] = [
  { id: "sql",        nombre: "SQL",              icono: BsDatabase          },
  { id: "postgresql", nombre: "PostgreSQL",       icono: SiPostgresql        },
  { id: "sqlserver",  nombre: "SQL Server Express", icono: BsDatabaseFill       },
  { id: "prisma",     nombre: "Prisma",           icono: SiPrisma            },
];
