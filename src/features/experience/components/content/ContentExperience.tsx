"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { ExperienceCard } from "@/features/experience/components/card";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function ContentExperience() {
  const { lang } = useLanguage();
  const { title, roleLabel, modalityLabel, jobs } = translations[lang].experience;

  return (
    <section id="experience" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="relative mt-16">
        <div className="absolute left-1.75 top-0 bottom-0 w-px bg-white/10" />
        <div className="flex flex-col gap-10">
          {jobs.map((job) => (
            <div key={job.company} className="relative pl-8">
              <span className="absolute left-0 top-8 w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-red-500/20" />
              <ExperienceCard
                {...job}
                roleLabel={roleLabel}
                modalityLabel={modalityLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
