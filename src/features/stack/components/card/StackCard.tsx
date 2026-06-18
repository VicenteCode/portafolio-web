import { Card } from "@/components/ui/card";

interface StackCardProps {
  nombre: string;
  icono: string;
}

export function StackCard({ nombre, icono }: StackCardProps) {
  return (
    <Card variant="glass" padding="md" radius="lg" hoverable className="flex flex-col items-center gap-3 w-28">
      <img src={icono} alt={nombre} className="w-10 h-10 object-contain" />
      <span className="text-sm text-zinc-300 text-center font-medium">{nombre}</span>
    </Card>
  );
}
