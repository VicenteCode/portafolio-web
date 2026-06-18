import { Avatar } from "@/components/ui/avatar";
import { Title, SubTitle, Legend } from "@/features/start/components/header";
import { BtnLinks } from "@/features/start/components/Button";
import { StarField } from "@/components/ui/star-field";

export function Hero() {
  return (
    <section id="start" className="relative min-h-screen flex items-center overflow-hidden">
      <StarField />
      <div className="relative flex flex-col lg:flex-row w-full items-center gap-10 py-24 lg:py-0">
        <Avatar
          src="/avatar.png"
          alt="VicenteCode avatar"
          size="md"
          shape="circle"
          ring
          shadow="sm"
          imageSizes="(min-width: 1024px) 448px, 256px"
          className="sm:w-48 sm:h-48 lg:order-last lg:h-112! lg:w-md!"
        />
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
