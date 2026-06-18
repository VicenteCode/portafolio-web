import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { StackGroup } from "@/features/stack/components/group";
import { GRUPOS } from "@/features/stack/constants";

export function ContentStack() {
  return (
    <section id="stack" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="My Stack" />
      <div className="mt-16 flex flex-col gap-12">
        {GRUPOS.map(({ label, items }) => (
          <StackGroup key={label} label={label} items={items} />
        ))}
      </div>
    </section>
  );
}
