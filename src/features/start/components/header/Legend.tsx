"use client";

import { useRotatingText } from "@/features/start/hooks/useRotatingText";

type LegendProps = {
  texts: readonly string[];
  className?: string;
};

export function Legend({ texts, className = "" }: LegendProps) {
  const { current, visible } = useRotatingText(texts, 4500, 700);

  return (
    <p
      className={[
        "font-montserrat text-sm md:text-base text-zinc-400 transition-all duration-700",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {current}
    </p>
  );
}
