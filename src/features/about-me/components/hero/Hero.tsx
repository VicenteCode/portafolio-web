import Image from "next/image";

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center">
      <div className="flex w-full gap-12">
        <div className="flex shrink-0 items-center justify-center">
          <div className="relative h-72 w-72 overflow-hidden rounded-full ring-2 ring-zinc-700">
            <Image
              src="/Avatar.png"
              alt="VicenteCode avatar"
              fill
              sizes="288px"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
