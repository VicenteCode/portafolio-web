import { Card } from "@/components/ui/card";

type ExperienceCardProps = {
  company: string;
  role: string;
  period: string;
  modality: string;
  description: string;
  roleLabel?: string;
  modalityLabel?: string;
};

export function ExperienceCard({
  company,
  role,
  period,
  modality,
  description,
  roleLabel = "Role",
  modalityLabel = "Modality",
}: ExperienceCardProps) {
  return (
    <Card variant="glass" padding="lg" radius="lg" className="transition-transform duration-200 hover:scale-[1.02]">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-white">{company}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm text-zinc-400">
            <span>{roleLabel}: {role}</span>
            <span>{period}</span>
            <span>{modalityLabel}: {modality}</span>
          </div>
        </div>
        <p className="text-sm md:text-base text-zinc-200 leading-7 text-justify text-pretty hyphens-auto">{description}</p>
      </div>
    </Card>
  );
}
