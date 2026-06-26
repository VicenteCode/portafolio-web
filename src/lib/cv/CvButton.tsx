import { translations } from "@/lib/i18n/translations";
import { PdfButton } from "@/components/ui/pdf-button";
import type { Lang } from "@/lib/i18n/types";

const CV_HREFS: Record<Lang, string> = {
  en: "/VICENTE_DE_JESUS_BRAVO_ANDRADE_COMPUTER_SYSTEMS_ENGINER.pdf",
  es: "/VICENTE_DE_JESUS_BRAVO_ANDRADE_iNGENIERO_SISTEMAS_COMPUTACIONALES.pdf",
};

export function CvButton({ lang, className }: { lang: Lang; className?: string }) {
  const label = translations[lang].nav.cv;
  return <PdfButton href={CV_HREFS[lang]} label={label} className={className} />;
}
