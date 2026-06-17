import { Title } from "@/features/about-me/components/title";
import { AboutCard } from "@/features/about-me/components/card";

export function ContentAboutMe() {
  return (
    <section id="about-me" className="flex flex-col py-20">
      <Title />
      <div className="mt-10 self-start">
        <AboutCard />
      </div>
    </section>
  );
}
