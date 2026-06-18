import { SectionTitle } from "@/components/ui/section-title";
import { AboutCard } from "@/features/about-me/components/card";
import { StarField } from "@/components/ui/star-field";
import { MoonClient } from "@/features/about-me/components/animation/MoonClient";

export function ContentAboutMe() {
  return (
    <section id="about-me" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="About Me" />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-24">
        <AboutCard />
        <MoonClient />
      </div>
    </section>
  );
}
