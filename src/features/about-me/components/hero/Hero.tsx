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
      <div className="flex w-full items-center gap-12">
        <Avatar
          src="/avatar.png"
          alt="VicenteCode avatar"
          size="xl"
          shape="circle"
          ring
          shadow="lg"
        />
        <Title
          texts={titles}
          interval={2500}
          className="text-2xl font-semibold text-zinc-100"
        />
      </div>
    </section>
  );
}
