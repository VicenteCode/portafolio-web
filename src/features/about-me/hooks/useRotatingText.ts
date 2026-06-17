"use client";

import { useState, useEffect } from "react";

type UseRotatingTextReturn = {
  current: string;
  visible: boolean;
};

export function useRotatingText(texts: string[], interval = 2500): UseRotatingTextReturn {
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

  return { current: texts[index], visible };
}
