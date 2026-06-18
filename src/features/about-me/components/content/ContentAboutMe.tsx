import { SectionTitle } from "@/components/ui/section-title";
import { AboutCard } from "@/features/about-me/components/card";
import { Moon } from "@/features/about-me/components/animation";
import { SocialLinks } from "@/features/about-me/components/social-links";
import { StarField } from "@/components/ui/star-field";

export function ContentAboutMe() {
  return (
    <section id="about-me" className="relative flex flex-col py-10 overflow-hidden">
      <StarField />
      <SectionTitle text="About Me" />
      <div className="mt-16 flex flex-col lg:flex-row items-center gap-24">
        <div className="flex flex-col gap-6">
          <AboutCard />
          <SocialLinks />
        </div>
        <Moon />
      </div>
    </section>
  );
}
