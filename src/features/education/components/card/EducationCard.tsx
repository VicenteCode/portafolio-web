import { Card } from "@/components/ui/card";

type EducationCardProps = {
  career: string;
  school: string;
  period: string;
};

export function EducationCard({ career, school, period }: EducationCardProps) {
  return (
    <Card variant="glass" padding="lg" radius="lg" className="transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-white">{career}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm text-zinc-400">
          <span>{school}</span>
          <span>{period}</span>
        </div>
      </div>
    </Card>
  );
}
