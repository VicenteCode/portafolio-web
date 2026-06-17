"use client";

import { useState, useEffect } from "react";

type TitleProps = {
  texts: string[];
  interval?: number;
  className?: string;
};

export function Title({ texts, interval = 2500, className = "" }: TitleProps) {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % texts.length);
        setVisible(true);
      }, 300);
    }, interval);

    return () => clearInterval(id);
  }, [texts.length, interval]);

  return (
    <span
      className={[
        "inline-block transition-all duration-300",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {texts[index]}
    </span>
  );
}
