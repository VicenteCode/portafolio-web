import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";

export function ContentEducation() {
  return (
    <section id="education" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="My Education" />
    </section>
  );
}
