"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { StackGroup } from "@/features/stack/components/group";
import { GRUPOS } from "@/features/stack/constants";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentStack() {
  const { lang } = useLanguage();
  const { title, showMore, showLess } = translations[lang].stack;

  return (
    <section id="stack" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="mt-16 flex flex-col gap-12">
        {GRUPOS.map(({ label, items }) => (
          <StackGroup key={label} label={label} items={items} showMore={showMore} showLess={showLess} />
        ))}
      </div>
    </section>
  );
}
