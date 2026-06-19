"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { AboutCard } from "@/features/about-me/components/card";
import { StarField } from "@/components/ui/star-field";
import { MoonClient } from "@/features/about-me/components/animation/MoonClient";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentAboutMe() {
  const { lang } = useLanguage();
  const { title } = translations[lang].about;

  return (
    <section id="about-me" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-24">
        <AboutCard />
        <MoonClient />
      </div>
    </section>
  );
}
