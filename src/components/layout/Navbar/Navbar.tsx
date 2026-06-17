"use client";

import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { useNavbar } from "./useNavbar";
import { useMobileMenu } from "./useMobileMenu";

interface NavLink {
  label: string;
  href: string;
  icon?: ComponentType<{ className?: string; size?: number }>;
}

interface NavbarProps {
  links: NavLink[];
  logo?: ReactNode;
  className?: string;
}

export function Navbar({ links, logo, className }: NavbarProps) {
  const hrefs = links.map((l) => l.href);
  const { isScrolled, activeSection } = useNavbar(hrefs);
  const { isOpen, toggle, close } = useMobileMenu();

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 h-16 transition-[background-color,box-shadow] duration-200",
        isScrolled || isOpen
          ? "bg-zinc-950/90 shadow-sm shadow-zinc-900/50 backdrop-blur-sm"
          : "bg-transparent",
        className ?? "",
      ]
        .join(" ")
        .trim()}
    >
      <nav className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center md:justify-between">
        {logo && <div className="shrink-0">{logo}</div>}

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 ms-auto" role="list">
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
          className="md:hidden relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-100 transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`md:hidden fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col items-center justify-center px-4 bg-zinc-950 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 pointer-events-auto" : "-translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 w-full">
          {links.map(({ label, href, icon: Icon }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={close}
                className="flex items-center gap-2 text-2xl font-medium text-zinc-200 transition-colors hover:text-zinc-100"
              >
                {Icon && <Icon className="w-6 h-6" />}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
