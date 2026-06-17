import { Avatar } from "@/components/ui/avatar";
import { Title } from "@/features/about-me/components/title";
import { AboutCard } from "@/features/about-me/components/card";

const titles = [
  "Hello, I'm Vicente Code.",
  "JS Environment Software Developer.",
  "Computer Systems Engineer.",
];

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
        <div className="flex flex-1 flex-col gap-6 lg:pb-40">
          <Title texts={titles} interval={2500} />
          <AboutCard />
        </div>
      </div>
    </section>
  );
}
