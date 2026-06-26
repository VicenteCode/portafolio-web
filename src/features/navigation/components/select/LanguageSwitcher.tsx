"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import type { Lang } from "@/lib/i18n/types";
import { SUPPORTED_LANGS } from "@/lib/i18n/types";

const LANG_META: Record<Lang, { label: string; flag: string }> = {
  en: { label: "EN", flag: "🇺🇸" },
  es: { label: "ES", flag: "🇲🇽" },
};

export function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (lang: Lang) => {
    setIsOpen(false);
    const newPath = pathname.replace(`/${currentLang}`, `/${lang}`);
    router.push(newPath);
  };

  const current = LANG_META[currentLang];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select language"
        className="w-9 h-9 rounded-full border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition-colors"
      >
        <span>{current.flag}</span>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-11 flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden shadow-lg z-50">
          {SUPPORTED_LANGS.map((lang) => {
            const meta = LANG_META[lang];
            const isActive = lang === currentLang;
            return (
              <button
                key={lang}
                onClick={() => switchTo(lang)}
                className={`flex items-center gap-2 px-4 py-2 text-sm transition-colors hover:bg-zinc-800 ${
                  isActive ? "text-white font-semibold" : "text-zinc-400"
                }`}
              >
                <span>{meta.flag}</span>
                {meta.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
