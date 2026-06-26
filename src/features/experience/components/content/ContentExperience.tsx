import { SectionTitle } from "@/components/ui/section-title";
import { StarField } from "@/components/ui/star-field";
import { ExperienceCard } from "@/features/experience/components/card";

type Job = {
  company: string;
  role: string;
  period: string;
  modality: string;
  description: string;
};

type ExperienceTranslations = {
  title: string;
  roleLabel: string;
  modalityLabel: string;
  jobs: Job[];
};

export function ContentExperience({ t }: { t: ExperienceTranslations }) {
  return (
    <section id="experience" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text={t.title} />
      <div className="relative mt-16">
        <div className="absolute left-1.75 top-0 bottom-0 w-px bg-white/10" />
        <div className="flex flex-col gap-10">
          {t.jobs.map((job) => (
            <div key={job.company} className="relative pl-8">
              <span className="absolute left-0 top-8 w-3.5 h-3.5 rounded-full bg-red-500 ring-4 ring-red-500/20" />
              <ExperienceCard
                {...job}
                roleLabel={t.roleLabel}
                modalityLabel={t.modalityLabel}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
