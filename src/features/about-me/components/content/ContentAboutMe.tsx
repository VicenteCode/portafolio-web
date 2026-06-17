import { Title } from "@/features/about-me/components/title";
import { AboutCard } from "@/features/about-me/components/card";
import { Moon } from "@/features/about-me/components/animation";

export function ContentAboutMe() {
  return (
    <section id="about-me" className="flex flex-col py-20">
      <Title />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-12">
        <AboutCard />
        <Moon />
      </div>
    </section>
  );
}
