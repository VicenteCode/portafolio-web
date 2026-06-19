"use client";

import { Card } from "@/components/ui/card";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function AboutCard() {
  const { lang } = useLanguage();
  const { description } = translations[lang].about;

  return (
    <Card variant="glass" padding="lg" radius="lg" className="max-w-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105">
      <p className="text-zinc-300 text-lg leading-9 text-justify text-pretty">
        {description.map((segment, i) =>
          segment.highlight ? (
            <span key={i} className="text-white font-semibold">
              {segment.text}
            </span>
          ) : (
            segment.text
          )
        )}
      </p>
    </Card>
  );
}
