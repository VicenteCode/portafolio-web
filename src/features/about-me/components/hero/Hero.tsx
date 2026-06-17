import Image from "next/image";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="flex w-full gap-12">
        <div className="flex shrink-0 items-center justify-center">
          <div className="relative h-96 w-96 overflow-hidden rounded-full ring-2 ring-zinc-700 shadow-[0_0_60px_20px_rgba(0,0,0,0.6)]">
            <Image
              src="/Avatar.png"
              alt="VicenteCode avatar"
              fill
              sizes="384px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
