import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { EducationCard } from "@/features/education/components/card";

type EducationItem = { career: string; school: string; period: string };
type EducationTranslations = { title: string; items: EducationItem[] };

export function ContentEducation({ t }: { t: EducationTranslations }) {
  return (
    <section id="education" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={t.title} />
      <div className="mt-16 flex flex-col sm:flex-row gap-4 w-full md:max-w-2xl">
        {t.items.map((item) => (
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
