"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { StackGroup } from "@/features/stack/components/group";
import { GRUPOS } from "@/features/stack/constants";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

const GROUP_KEYS = ["languages", "frameworks", "libraries", "tools"] as const;

export function ContentStack() {
  const { lang } = useLanguage();
  const { title, showMore, showLess, groupLabels } = translations[lang].stack;

  return (
    <section id="stack" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="mt-16 flex flex-col gap-12">
        {GRUPOS.map(({ items }, i) => (
          <StackGroup key={GROUP_KEYS[i]} label={groupLabels[GROUP_KEYS[i]]} items={items} showMore={showMore} showLess={showLess} />
        ))}
      </div>
    </section>
  );
}
