"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type ProjectIcon = {
  icon: ReactNode;
  name: string;
};

type ProjectLink = {
  label: string;
  href: string;
  icon: IconType;
};

type CardProjectProps = {
  title: string;
  description: string;
  images: string[];
  icons: ProjectIcon[];
  links: ProjectLink[];
  inProgress?: string;
};

export function CardProject({ title, description, images, icons, links, inProgress }: CardProjectProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultiple = images.length > 1;

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const openAt = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <Card
        variant="glass"
        padding="none"
        radius="lg"
        className="overflow-hidden transition-transform duration-200 hover:scale-[1.02] flex flex-col"
      >
        <div className="flex flex-col gap-3 p-5">
          <h3 className="text-lg font-bold text-red-500">{title}</h3>
          <p className="text-sm text-zinc-200 leading-6 text-justify hyphens-auto">{description}</p>
        </div>

        <div
          className="relative w-full h-48 cursor-zoom-in"
          onClick={() => openAt(0)}
        >
          <Image src={images[0]} alt={title} fill className="object-cover" />
          {hasMultiple && (
            <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
              1 / {images.length}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-3 p-5 flex-1">
          <div className="flex flex-wrap gap-3">
            {icons.map(({ icon, name }) => (
              <span key={name} className="flex items-center gap-1.5 text-xs text-zinc-400">
                {icon}
                {name}
              </span>
            ))}
          </div>

          <hr className="border-red-500/40" />

          <div className="flex items-center gap-2">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 hover:border-red-500/50 hover:text-red-400 transition-colors duration-200"
              >
                <Icon size={13} />
                {label}
              </a>
            ))}
          </div>

          {inProgress && (
            <div className="flex items-center justify-center gap-1.5 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
              <span className="text-xs font-medium text-amber-300">{inProgress}</span>
            </div>
          )}
        </div>
      </Card>

      {lightboxOpen && createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="absolute inset-0">
            <Image
              src={images[currentIndex]}
              alt={`${title} ${currentIndex + 1}`}
              fill
              className="object-contain"
            />
          </div>

          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X size={22} />
          </button>

          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
              <span className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
