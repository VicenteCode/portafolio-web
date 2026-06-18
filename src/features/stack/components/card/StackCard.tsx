import type { IconType } from "react-icons";
import { Card } from "@/components/ui/card";

interface StackCardProps {
  nombre: string;
  icono: IconType;
}

export function StackCard({ nombre, icono: Icon }: StackCardProps) {
  return (
    <Card variant="glass" padding="md" radius="lg" hoverable className="flex flex-col items-center gap-3 w-28">
      <Icon className="w-10 h-10" />
      <span className="text-sm text-zinc-300 text-center font-medium">{nombre}</span>
    </Card>
  );
}
