import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";

interface StackCardProps {
  nombre: string;
  icono: IconType;
}

export function StackCard({ nombre, icono: Icon }: StackCardProps) {
  return (
    <Card variant="glass" padding="none" radius="lg" hoverable className="flex flex-col items-center justify-center gap-3 w-24 h-24">
      <Icon className="w-10 h-10" />
      <span className="text-sm text-zinc-300 text-center font-medium">{nombre}</span>
    </Card>
  );
}
