import { Avatar } from "@/components/ui/avatar";
import { Title, SubTitle, Legend } from "@/features/start/components/header";
import { StarField } from "./StarField";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <StarField />
      <div className="relative flex flex-col lg:flex-row w-full items-center gap-4 py-24 lg:py-0">
        <div className="flex flex-1 flex-col gap-6">
          <Title />
          <div className="flex flex-col gap-3">
            <SubTitle />
            <Legend />
          </div>
        </div>
        <Avatar
          src="/avatar.png"
          alt="VicenteCode avatar"
          size="lg"
          shape="circle"
          ring
          shadow="sm"
          imageSizes="(min-width: 1024px) 448px, 256px"
          className="lg:h-112! lg:w-md!"
        />
      </div>
    </section>
  );
}
