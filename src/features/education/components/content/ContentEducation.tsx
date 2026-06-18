import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { EducationCard } from "@/features/education/components/card";

export function ContentEducation() {
  return (
    <section id="education" className="relative flex flex-col py-10 pb-96 overflow-hidden">
      <StarField />
      <SectionTitle text="My Education" />
      <div className="mt-16 flex flex-col sm:flex-row gap-4 w-fit">
        <EducationCard
          career="Computer Systems Engineering"
          school="Universidad Jean Piaget"
          period="2022 – 2025"
        />
        <EducationCard
          career="Computer Technician"
          school="Conalet Siglo XXI"
          period="2019 – 2022"
        />
      </div>
    </section>
  );
}
