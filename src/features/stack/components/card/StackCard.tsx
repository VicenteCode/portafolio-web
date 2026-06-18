import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";

interface StackCardProps {
  nombre: string;
  icono: IconType;
}

export function StackCard({ nombre, icono: Icon }: StackCardProps) {
  return (
    <Card variant="glass" padding="none" radius="lg" hoverable className="flex flex-col items-center justify-center gap-2 w-full aspect-square transition-transform duration-200 hover:scale-110">
      <Icon className="w-7 h-7" />
      <span className="text-xs text-zinc-300 text-center font-medium">{nombre}</span>
    </Card>
  );
}
