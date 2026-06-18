"use client";

import { useState, useEffect } from "react";
import type { IconType } from "react-icons";

const LIMIT_MOBILE = 9;
const LIMIT_DESKTOP = 16;

type Item = { id: string; nombre: string; icono: IconType };

export function useStackGroup(items: Item[]) {
  const [limit, setLimit] = useState(LIMIT_DESKTOP);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => {
      setLimit(mq.matches ? LIMIT_MOBILE : LIMIT_DESKTOP);
      setExpanded(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const hasMore = items.length > limit;
  const visible = expanded ? items : items.slice(0, limit);
  const hidden = items.length - limit;
  const toggle = () => setExpanded((prev) => !prev);

  return { visible, hasMore, expanded, hidden, toggle };
}
