"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentProject() {
    const { lang } = useLanguage();
    const { title } = translations[lang].about;

    return (
        <section id="project" className="relative flex flex-col py-10 overflow-hidden">
            <SectionTitle text={title} />
        </section>
    )
}

