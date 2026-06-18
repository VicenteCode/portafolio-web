"use client";

import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { SkillCard } from "@/features/skills/components/card";
import { SKILLS } from "@/features/skills/constants/skills";
import { useSkills } from "@/features/skills/hooks/useSkills";

export function ContentSkills() {
  const { visible, hasMore, expanded, hidden, toggle } = useSkills(SKILLS);

  return (
    <section id="skills" className="relative flex flex-col py-10 pb-32 overflow-hidden">
      <StarField />
      <SectionTitle text="My Skills" />
      <div className="relative mt-16 flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((skill) => (
            <SkillCard key={skill} label={skill} />
          ))}
        </div>
        {hasMore && (
          <button
            onClick={toggle}
            className="self-start text-sm text-zinc-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
          >
            {expanded ? "Show less" : `Show more (${hidden} more)`}
          </button>
        )}
      </div>
    </section>
  );
}
