"use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

type SubTitleProps = {
  className?: string;
};

export function SubTitle({ className = "" }: SubTitleProps) {
  const { lang } = useLanguage();
  const { subtitle } = translations[lang].hero;

  return (
    <h2
      className={[
        "font-comic text-xl md:text-2xl leading-tight tracking-wide text-red-500 font-semibold",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {subtitle}
    </h2>
  );
}
