"use client";

import { useRotatingText } from "@/features/about-me/hooks/useRotatingText";
import { LEGEND_TEXTS } from "./legend.constants";

type LegendProps = {
  className?: string;
};

export function Legend({ className = "" }: LegendProps) {
  const { current, visible } = useRotatingText(LEGEND_TEXTS, 2500);

  return (
    <p
      className={[
        "font-montserrat text-base md:text-lg text-muted-foreground transition-all duration-300",
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
