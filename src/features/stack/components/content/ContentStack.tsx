import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { StackCard } from "@/features/stack/components/card";
import { GRUPOS } from "@/features/stack/constants";

export function ContentStack() {
  return (
    <section id="stack" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="My Stack" />
      <div className="mt-16 flex flex-col gap-12">
        {GRUPOS.map(({ label, items }) => (
          <div key={label} className="flex flex-col gap-6">
            <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest">
              {label}
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-6">
              {items.map((item) => (
                <StackCard key={item.id} nombre={item.nombre} icono={item.icono} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
