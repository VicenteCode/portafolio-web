import { Avatar } from "@/components/ui/avatar";
import { Title } from "@/features/about-me/components/title";
import { AboutCard } from "@/features/about-me/components/card";
import { HERO_TITLES } from "@/features/about-me/constants/titles";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="flex flex-col lg:flex-row w-full items-center gap-10 py-24 lg:py-0">
        <Avatar
          src="/avatar.png"
          alt="VicenteCode avatar"
          size="lg"
          shape="circle"
          ring
          shadow="lg"
          imageSizes="(min-width: 1024px) 448px, 256px"
          className="lg:h-112! lg:w-md!"
        />
        <div className="flex flex-1 flex-col lg:pb-40">
          <Title texts={HERO_TITLES} interval={2500} />
          <hr className="my-4 border-border-subtle w-16" />
          <AboutCard />
        </div>
      </div>
    </section>
  );
}
