"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// Crear el contexto de idiomas
export type Language = "en" | "es";

// Interface del contexto de idiomas
interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
}

// Proveedor del contexto de idiomas
const LanguageContext = createContext<LanguageContextValue | null>(null);

// Hook para usar el contexto de idiomas
export function LanguageProvider({ children } : { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
        {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para acceder al contexto de idiomas
export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}