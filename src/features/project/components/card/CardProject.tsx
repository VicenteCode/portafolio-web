import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type ProjectIcon = {
  icon: ReactNode;
  name: string;
};

type ProjectLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

type CardProjectProps = {
  title: string;
  description: string;
  image: string;
  icons: ProjectIcon[];
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
      <div className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <p className="text-sm text-zinc-200 leading-6 text-pretty">{description}</p>
      </div>

      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
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

        <div className="flex items-center gap-3">
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

        {inProgress && (
          <div className="flex items-center gap-1.5 pt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
            <span className="text-xs font-medium text-amber-300">{inProgress}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
