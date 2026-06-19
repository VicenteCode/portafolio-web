"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { EducationCard } from "@/features/education/components/card";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentEducation() {
  const { lang } = useLanguage();
  const { title, items } = translations[lang].education;

  return (
    <section id="education" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="mt-16 flex flex-col sm:flex-row gap-4 w-full md:max-w-2xl">
        {items.map((item) => (
          <EducationCard
            key={item.career}
            career={item.career}
            school={item.school}
            period={item.period}
          />
        ))}
      </div>
    </section>
  );
}
