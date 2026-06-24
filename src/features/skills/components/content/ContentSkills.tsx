"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { SkillCard } from "@/features/skills/components/card";
import { useSkills } from "@/features/skills/hooks/useSkills";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentSkills() {
  const { lang } = useLanguage();
  const { title, showMore, showLess, items } = translations[lang].skills;
  const { visible, hasMore, expanded, hidden, toggle } = useSkills(items);

  return (
    <section id="skills" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="relative mt-16 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[1fr]">
          {visible.map((skill) => (
            <SkillCard key={skill} label={skill} />
          ))}
        </div>
        {hasMore && (
          <button
            onClick={toggle}
            className="self-start text-sm text-zinc-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            {expanded ? showLess : showMore(hidden)}
          </button>
        )}
      </div>
    </section>
  );
}
