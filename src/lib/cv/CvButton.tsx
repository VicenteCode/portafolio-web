import { translations } from "@/lib/i18n/translations";
import { PdfButton } from "@/components/ui/pdf-button";
import type { Lang } from "@/lib/i18n/types";

const CV_HREFS: Record<Lang, string> = {
  en: "/cv_VICENTE_DE_JESUS_BRAVO_ANDRADE_COMPUTER_SYSTEMS_ENGINER_2026.pdf",
  es: "/cv_VICENTE_DE_JESUS_BRAVO_ANDRADE_iNGENIERO_SISTEMAS_COMPUTACIONALES_2026.pdf",
};

export function CvButton({ lang, className }: { lang: Lang; className?: string }) {
  const label = translations[lang].nav.cv;
  return <PdfButton href={CV_HREFS[lang]} label={label} className={className} />;
}
