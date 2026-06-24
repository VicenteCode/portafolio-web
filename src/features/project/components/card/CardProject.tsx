import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type CardProjectProps = {
  title: string;
  description: string;
  image: string;
  icons: ReactNode[];
  links: ProjectLink[];
  inProgress?: string;
};

export function CardProject({ title, description, image, icons, links, inProgress }: CardProjectProps) {
  return (
    <Card
      variant="glass"
      padding="none"
      radius="lg"
      className="overflow-hidden transition-transform duration-200 hover:scale-[1.02] flex flex-col"
    >
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
        {inProgress && (
          <span className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 text-xs font-medium text-amber-300 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            {inProgress}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-3 p-5 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2 text-zinc-400 shrink-0">
            {icons.map((icon, i) => (
              <span key={i}>{icon}</span>
            ))}
          </div>
        </div>

        <p className="text-sm text-zinc-200 leading-6 text-pretty flex-1">{description}</p>

        <div className="flex items-center gap-3 pt-1">
          {links.map(({ label, href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </Card>
  );
}
