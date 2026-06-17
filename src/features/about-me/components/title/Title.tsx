"use client";

import { useRotatingText } from "@/features/about-me/hooks/useRotatingText";

type TitleProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export function Title({ texts, interval = 2500, className = "" }: TitleProps) {
  const { current, visible } = useRotatingText(texts, interval);

  return (
    <h1
      className={[
        "inline-block font-comic text-3xl md:text-5xl leading-tight tracking-wide transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {current}
    </h1>
  );
}
