import { Navbar } from "@/components/layout/Navbar";
import { NAV_LINKS } from "../../constants/NavLinks";
import { translations } from "@/lib/i18n/translations";
import type { Lang } from "@/lib/i18n/types";

export function NavigationBar({ lang }: { lang: Lang }) {
  const t = translations[lang].nav;
  const links = NAV_LINKS.map(({ key, href }) => ({
    label: t[key as keyof typeof t],
    href,
  }));
  return <Navbar links={links} lang={lang} />;
}
