import type { ComponentType } from "react";
import { FileDown } from "lucide-react";

type PdfButtonProps = {
  href: string;
  label: string;
  icon?: ComponentType<{ className?: string }>;
  className?: string;
};

export function PdfButton({ href, label, icon: Icon = FileDown, className = "" }: PdfButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" download className={`inline-flex items-center gap-1.5 ${className}`}>
      <Icon className="w-4 h-4" />
      {label}
    </a>
  );
}
