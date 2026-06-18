import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { SkillCard } from "@/features/skills/components/card";
import { SKILLS } from "@/features/skills/constants/skills";

export function ContentSkills() {
  return (
    <section id="skills" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="My Skills" />
      <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {SKILLS.map((skill) => (
          <SkillCard key={skill} label={skill} />
        ))}
      </div>
    </section>
  );
}
