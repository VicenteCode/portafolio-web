"use client";

import type { IconType } from "react-icons";
import { StackCard } from "@/features/stack/components/card";
import { useStackGroup } from "@/features/stack/hooks/useStackGroup";

type Item = { id: string; nombre: string; icono: IconType };

type StackGroupProps = {
  label: string;
  items: Item[];
  showMore: (n: number) => string;
  showLess: string;
};

export function StackGroup({ label, items, showMore, showLess }: StackGroupProps) {
  const { visible, hasMore, expanded, hidden, toggle } = useStackGroup(items);

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest">
        {label}
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-5 lg:gap-6">
        {visible.map((item) => (
          <StackCard key={item.id} nombre={item.nombre} icono={item.icono} />
        ))}
      </div>
      {hasMore && (
        <button
          onClick={toggle}
          className="self-start text-sm text-zinc-400 hover:text-white transition-colors duration-200 underline underline-offset-4"
        >
          {expanded ? showLess : showMore(hidden)}
        </button>
      )}
    </div>
  );
}
