"use client";

import { Navbar } from "@/components/layout/Navbar";
import { NAV_ITEMS } from "../constants/NavLinks";
import { useLanguage } from "@/lib/language/LanguageContext";
import { translations } from "@/lib/language/translations";

export function NavigationBar() {
  const { lang } = useLanguage();
  const t = translations[lang].nav;
  const links = NAV_ITEMS.map(({ key, href, icon }) => ({
    label: t[key],
    href,
    icon,
  }));
  return <Navbar links={links} />;
}
