 "use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { LanguageToggle as LanguageToggleUI } from "@/components/ui/language-toggle/LanguageToggle";
import { LANGUAGE_OPTIONS } from "@/features/navigation/constants/lenguages";

// Componente que permite alternar entre idiomas
export function LanguageToggle() {
    const { lang, toggle } = useLanguage();
    return <LanguageToggleUI options={LANGUAGE_OPTIONS} active={lang} onToggle={toggle} />;
}