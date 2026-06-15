"use client";

import Link from "next/link";
import { useMobileNav } from "./useMobileNav";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  links: NavLink[];
  className?: string;
}

export function Nav({ links, className }: NavProps) {
  const { isOpen, toggle, close } = useMobileNav();

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${className ?? ""}`}>
      <div className="flex items-center justify-between px-6 py-4">
        <button
          type="button"
          onClick={toggle}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 dark:bg-slate-100 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 dark:bg-slate-100 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-slate-900 transition-all duration-300 dark:bg-slate-100 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 flex items-center justify-center bg-zinc-50 transition-all duration-300 dark:bg-zinc-900 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav>
          <ul className="flex flex-col items-center gap-8">
            {links.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className="text-2xl font-medium text-slate-800 transition-colors hover:text-slate-500 dark:text-slate-200 dark:hover:text-slate-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
