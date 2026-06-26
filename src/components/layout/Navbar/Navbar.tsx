"use client";

import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { useNavbar } from "./useNavbar";
import { useMobileMenu } from "./useMobileMenu";
import { LanguageSwitcher } from "@/features/navigation/components/select/LanguageSwitcher";
import { CvButton } from "@/lib/cv/CvButton";
import type { Lang } from "@/lib/i18n/types";

interface NavLink {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string; size?: number }>;
}

interface NavbarProps {
  links: NavLink[];
  lang: Lang;
  logo?: ReactNode;
  className?: string;
}

export function Navbar({ links, lang, logo, className }: NavbarProps) {
  const hrefs = links.map((l) => l.href);
  const { isScrolled, activeSection } = useNavbar(hrefs);
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 h-16 border-b border-zinc-800 transition-[background-color,box-shadow] duration-200",
        isScrolled || isOpen
          ? "bg-zinc-950/90 shadow-sm shadow-zinc-900/50 backdrop-blur-sm"
          : "bg-transparent",
        className ?? "",
      ]
        .join(" ")
        .trim()}
    >
      <nav className="h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-6 shrink-0">
          {logo && <div className="shrink-0">{logo}</div>}
          <LanguageSwitcher currentLang={lang} />
          <CvButton lang={lang} className="px-3 py-1.5 text-sm font-medium border border-red-500/60 bg-red-500/10 text-red-400 hover:bg-red-500/20 hover:text-red-300 rounded-lg transition-colors duration-150 [&>span]:hidden [&>span]:sm:inline" />
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1 ms-auto" role="list">
          {links.map(({ label, href, icon: Icon }) => {
            const isActive = activeSection === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={[
                    "relative flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-colors duration-150 rounded-sm",
                    "hover:text-zinc-100",
                    isActive
                      ? "text-zinc-100 after:absolute after:bottom-0 after:inset-x-3 after:h-px after:bg-zinc-300"
                      : "text-zinc-400",
                  ].join(" ")}
                  aria-current={isActive ? "page" : undefined}
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Hamburger button */}
        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="lg:hidden ms-auto relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-[49] flex flex-col items-center justify-start pt-12 px-4 bg-zinc-950 backdrop-blur-xl border-t border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)] transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0 pointer-events-auto" : "translate-x-full pointer-events-none"
        }`}
      >
        <ul className="relative z-10 flex flex-col items-center gap-4 w-full max-w-xs">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={href} className="w-full">
              <Link
                href={href}
                onClick={close}
                className="flex items-center gap-3 w-full px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-lg font-medium text-zinc-200 transition-colors hover:text-white hover:bg-white/10"
              >
                {Icon && <Icon className="w-5 h-5 shrink-0" />}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
