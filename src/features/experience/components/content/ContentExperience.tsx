import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";

export function ContentExperience() {
  return (
    <section id="experience" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="Experience" />
    </section>
  );
}
