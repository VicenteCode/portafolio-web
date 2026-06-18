import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { StackCard } from "@/features/stack/components/card";
import { LENGUAJES } from "@/components/shared/lenguajes";
import { FRAMEWORKS } from "@/components/shared/frameworks";
import { LIBRERIAS } from "@/components/shared/librerias";
import { HERRAMIENTAS } from "@/components/shared/herramientas";

const GRUPOS = [
  { label: "Lenguajes",   items: LENGUAJES   },
  { label: "Frameworks",  items: FRAMEWORKS  },
  { label: "Librerías",   items: LIBRERIAS   },
  { label: "Herramientas",items: HERRAMIENTAS},
];

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
            <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4">
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
