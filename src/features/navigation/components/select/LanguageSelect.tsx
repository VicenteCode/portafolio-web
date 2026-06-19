 "use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { LanguageSelectUI } from "@/components/ui/language-select/LanguageSelectUI";
import { LANGUAGE_OPTIONS } from "@/features/navigation/constants/lenguages";

// Componente que permite alternar entre idiomas
export function LanguageToggle() {
    const { lang, toggle } = useLanguage();
    return <LanguageSelectUI options={LANGUAGE_OPTIONS} active={lang} onSelect={toggle} />;
}