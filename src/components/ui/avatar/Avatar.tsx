import Image from "next/image";

const sizeMap = {
  sm: { container: "h-16 w-16", sizes: "64px" },
  md: { container: "h-32 w-32", sizes: "128px" },
  lg: { container: "h-64 w-64", sizes: "256px" },
  xl: { container: "h-96 w-96", sizes: "384px" },
} as const;

const shapeMap = {
  circle: "rounded-full",
  rounded: "rounded-2xl",
} as const;

type AvatarProps = {
  src: string;
  alt: string;
  size?: keyof typeof sizeMap;
  shape?: keyof typeof shapeMap;
  shadow?: boolean;
  ring?: boolean;
  className?: string;
};

export function Avatar({
  src,
  alt,
  size = "md",
  shape = "circle",
  shadow = false,
  ring = false,
  className = "",
}: AvatarProps) {
  const { container, sizes } = sizeMap[size];

  return (
    <div
      className={[
        "relative shrink-0 overflow-hidden",
        container,
        shapeMap[shape],
        ring ? "ring-2 ring-zinc-700" : "",
        shadow ? "shadow-[0_0_60px_20px_rgba(255,255,255,0.18),0_0_120px_50px_rgba(255,255,255,0.08)]" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className="object-cover"
        priority
      />
    </div>
  );
}
