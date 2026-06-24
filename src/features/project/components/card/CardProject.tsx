"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { IconType } from "react-icons";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Modal } from "@/components/ui/modal";

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

  const prev = () => setCurrentIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((i) => (i + 1) % images.length);

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
          <p className="text-sm text-zinc-200 leading-6 text-pretty">{description}</p>
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

      <Modal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={title}
        className="max-w-4xl p-2 bg-zinc-900 border-zinc-800"
      >
        <div className="relative w-full h-[70vh]">
          <Image src={images[currentIndex]} alt={`${title} ${currentIndex + 1}`} fill className="object-contain rounded-lg" />

          {hasMultiple && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white hover:bg-black/80 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-0.5 text-xs text-white backdrop-blur-sm">
                {currentIndex + 1} / {images.length}
              </span>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
