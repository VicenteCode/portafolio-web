"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";
import { PROJECTS_STATIC } from "@/features/project/constants/projects";
import { CardProject } from "@/features/project/components/card";

export function ContentProject() {
  const { lang } = useLanguage();
  const { title, items } = translations[lang].project;

  return (
    <section id="project" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={title} />
      <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const staticData = PROJECTS_STATIC.find((p) => p.id === item.id);
          if (!staticData) return null;
          return (
            <CardProject
              key={item.id}
              title={item.title}
              description={item.description}
              image={staticData.image}
              icons={staticData.icons.map(({ Icon, name }) => ({ icon: <Icon size={16} />, name }))}
              links={staticData.links}
              inProgress={item.inProgress}
            />
          );
        })}
      </div>
    </section>
  );
}
