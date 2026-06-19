 "use client";

import { Language, useLanguage } from "@/lib/language/LanguageContext";
import { LanguageSelectUI } from "@/components/ui/language-select/LanguageSelectUI";
import { LANGUAGE_SELECT_OPTIONS } from "../../constants/lenguagesOptions";

// Componente que permite alternar entre idiomas
export function LanguageSelect() {
    const { lang, setLang } = useLanguage();
    return <LanguageSelectUI  
        options={LANGUAGE_SELECT_OPTIONS} 
        active={lang} 
        onSelect={(value) => setLang(value as Language)}
    />;
}