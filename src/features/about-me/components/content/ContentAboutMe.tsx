import { Title } from "@/features/about-me/components/title";
import { AboutCard } from "@/features/about-me/components/card";
import { Moon } from "@/features/about-me/components/animation";
import { StarField } from "@/components/ui/star-field";

export function ContentAboutMe() {
  return (
    <section id="about-me" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <Title />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-24">
        <AboutCard />
        <Moon />
      </div>
    </section>
  );
}
