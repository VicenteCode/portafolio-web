"use client";

import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";
import { PdfButton } from "@/components/ui/pdf-button";

const CV_HREFS: Record<"en" | "es", string> = {
  en: "/VICENTE_DE_JESUS_BRAVO_ANDRADE_COMPUTER_SYSTEMS_ENGINER.pdf",
  es: "/VICENTE_DE_JESUS_BRAVO_ANDRADE_iNGENIERO_SISTEMAS_COMPUTACIONALES.pdf",
};

export function CvButton({ className }: { className?: string }) {
  const { lang } = useLanguage();
  const label = translations[lang].nav.cv;
  return <PdfButton href={CV_HREFS[lang]} label={label} className={className} />;
}
