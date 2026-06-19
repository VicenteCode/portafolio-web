"use client";

import { LanguageProvider } from "@/lib/language/LanguageContext";
import type { ReactNode } from "react";

// Componente que envuelve a toda la aplicación con los proveedores necesarios
export function Providers({ children }: { children: ReactNode }) {
    return <LanguageProvider>{children}</LanguageProvider>;
}