import { Avatar } from "@/components/ui/avatar";
import { Title } from "@/features/about-me/components/title";

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
          className="lg:!h-[28rem] lg:!w-[28rem]"
        />
        <div className="flex flex-1 items-center justify-center lg:pb-40">
          <Title texts={titles} interval={2500} />
        </div>
      </div>
    </section>
  );
}
