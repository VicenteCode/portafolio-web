import { Card } from "@/components/ui/card";

type EducationCardProps = {
  career: string;
  school: string;
  period: string;
};

export function EducationCard({ career, school, period }: EducationCardProps) {
  return (
    <Card variant="glass" padding="sm" radius="md" className="transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-white">{career}</span>
        <div className="flex items-center gap-4 text-xs text-zinc-400">
          <span>{school}</span>
          <span>{period}</span>
        </div>
      </div>
    </Card>
  );
}
