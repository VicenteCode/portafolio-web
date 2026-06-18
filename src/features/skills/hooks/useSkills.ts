"use client";

import { useState, useEffect } from "react";

const LIMIT_MOBILE = 6;
const LIMIT_DESKTOP = 12;

export function useSkills(items: readonly string[]) {
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
