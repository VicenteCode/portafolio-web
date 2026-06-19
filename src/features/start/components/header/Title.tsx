"use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

type TitleProps = {
  className?: string;
};

export function Title({ className = "" }: TitleProps) {
  const { lang } = useLanguage();
  const { greeting } = translations[lang].hero;

  return (
    <h1
      className={[
        "font-comic text-5xl md:text-7xl leading-tight tracking-wide text-white",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {greeting}
    </h1>
  );
}
