import dynamic from "next/dynamic";
import { SectionTitle } from "@/components/ui/section-title";
import { AboutCard } from "@/features/about-me/components/card";
import { StarField } from "@/components/ui/star-field";

const Moon = dynamic(
  () => import("@/features/about-me/components/animation/Moon").then(m => ({ default: m.Moon })),
  { ssr: false, loading: () => <div className="w-60 h-60 sm:w-120 sm:h-120 rounded-full" /> },
);

export function ContentAboutMe() {
  return (
    <section id="about-me" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="About Me" />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-24">
        <AboutCard />
        <Moon />
      </div>
    </section>
  );
}
