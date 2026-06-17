import { Avatar } from "@/components/ui/avatar";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="flex w-full gap-12">
        <Avatar
          src="/Avatar.png"
          alt="VicenteCode avatar"
          size="xl"
          shape="circle"
          ring
          shadow="lg"
        />
      </div>
    </section>
  );
}
