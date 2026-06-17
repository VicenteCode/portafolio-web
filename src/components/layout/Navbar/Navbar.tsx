"use client";

import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import { useNavbar } from "./useNavbar";

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

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 h-16 transition-[background-color,box-shadow] duration-200",
        isScrolled
          ? "bg-zinc-950/90 shadow-sm shadow-zinc-900/50 backdrop-blur-sm"
          : "bg-transparent",
        className ?? "",
      ]
        .join(" ")
        .trim()}
    >
      <nav className="h-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {logo && <div className="shrink-0">{logo}</div>}

        <ul className="flex items-center gap-1 ms-auto" role="list">
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
      </nav>
    </header>
  );
}
