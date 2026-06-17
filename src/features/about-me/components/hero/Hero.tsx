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
      <div className="flex w-full items-center">
        <Avatar
          src="/avatar.png"
          alt="VicenteCode avatar"
          size="2xl"
          shape="circle"
          ring
          shadow="lg"
        />
        <div className="flex flex-1 items-center justify-center pb-40">
          <Title texts={titles} interval={2500} />
        </div>
      </div>
    </section>
  );
}
