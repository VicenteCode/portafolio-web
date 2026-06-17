"use client";

import { useState, useEffect, useRef } from "react";

type UseRotatingTextReturn = {
  current: string;
  visible: boolean;
};

export function useRotatingText(texts: readonly string[], interval = 2500, transitionDuration = 300): UseRotatingTextReturn {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const textsRef = useRef(texts);

  useEffect(() => {
    textsRef.current = texts;
  }, [texts]);

  useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % textsRef.current.length);
        setVisible(true);
      }, transitionDuration);
    }, interval);

    return () => clearInterval(id);
  }, [interval, transitionDuration]);

  return { current: textsRef.current[index], visible };
}
