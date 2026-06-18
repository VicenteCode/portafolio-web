"use client";

import { useRotatingText } from "@/features/start/hooks/useRotatingText";
import { LEGEND_TEXTS } from "../../constants/legend.constants";

type LegendProps = {
  className?: string;
};

export function Legend({ className = "" }: LegendProps) {
  const { current, visible } = useRotatingText(LEGEND_TEXTS, 4500, 700);

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
