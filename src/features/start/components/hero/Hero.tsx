import { Avatar } from "@/components/ui/avatar";
import { Title, SubTitle, Legend } from "@/features/start/components/header";
import { BtnLinks } from "@/features/start/components/Button";
import { StarField } from "@/components/ui/star-field";

export function Hero() {
  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      <StarField />
      <div className="relative flex flex-col lg:flex-row w-full items-center gap-10 py-24 lg:py-0">
        <div className="relative sm:w-48 sm:h-48 lg:order-last lg:w-md! lg:h-112!">
          <Avatar
            src="/Avatar.png"
            alt="VicenteCode avatar"
            size="md"
            shape="circle"
            ring={false}
            shadow="lg"
            imageSizes="(min-width: 1024px) 448px, 256px"
            className="w-full h-full [filter:drop-shadow(0_0_24px_rgba(0,0,0,0.6))_drop-shadow(0_0_48px_rgba(255,255,255,0.06))]"
          />
          <div className="absolute bottom-0 inset-x-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent rounded-b-full pointer-events-none" />
        </div>
        <div className="flex flex-1 flex-col gap-8 items-center text-center lg:items-start lg:text-left">
          <Title />
          <div className="flex flex-col gap-2">
            <SubTitle />
            <Legend />
          </div>
          <BtnLinks />
        </div>
      </div>
    </section>
  );
}
