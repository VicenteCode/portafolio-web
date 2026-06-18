import { Card } from "@/components/ui/card";

type SkillCardProps = {
  label: string;
};

export function SkillCard({ label }: SkillCardProps) {
  return (
    <Card variant="glass" padding="md" radius="lg" className="transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-indigo-400 ring-2 ring-indigo-400/20 shrink-0" />
        <p className="text-sm text-zinc-200 leading-snug">{label}</p>
      </div>
    </Card>
  );
}
