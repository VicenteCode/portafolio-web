"use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";
import { useRotatingText } from "@/features/start/hooks/useRotatingText";

type LegendProps = {
  className?: string;
};

export function Legend({ className = "" }: LegendProps) {
  const { lang } = useLanguage();
  const legend = translations[lang].hero.legend;
  const { current, visible } = useRotatingText(legend, 4500, 700);

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
