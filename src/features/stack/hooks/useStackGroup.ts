"use client";

import { useState, useEffect } from "react";
import type { IconType } from "react-icons";

const LIMIT_MOBILE = 9;  // 3 cols × 3 rows
const LIMIT_MD     = 6;  // 6 cols × 1 row
const LIMIT_LG     = 8;  // 8 cols × 1 row

type Item = { id: string; nombre: string; icono: IconType };

export function useStackGroup(items: Item[]) {
  const [limit, setLimit] = useState(LIMIT_LG);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const mqLg = window.matchMedia("(min-width: 1024px)");
    const mqMd = window.matchMedia("(min-width: 768px)");

    const update = () => {
      if (mqLg.matches)      setLimit(LIMIT_LG);
      else if (mqMd.matches) setLimit(LIMIT_MD);
      else                   setLimit(LIMIT_MOBILE);
      setExpanded(false);
    };

    update();
    mqLg.addEventListener("change", update);
    mqMd.addEventListener("change", update);
    return () => {
      mqLg.removeEventListener("change", update);
      mqMd.removeEventListener("change", update);
    };
  }, []);

  const hasMore = items.length > limit;
  const visible = expanded ? items : items.slice(0, limit);
  const hidden = items.length - limit;
  const toggle = () => setExpanded((prev) => !prev);

  return { visible, hasMore, expanded, hidden, toggle };
}
