"use client";

import dynamic from "next/dynamic";

const Moon = dynamic(
  () => import("./Moon").then(m => ({ default: m.Moon })),
  { ssr: false, loading: () => <div className="w-60 h-60 sm:w-120 sm:h-120 rounded-full" /> },
);

export function MoonClient() {
  return <Moon />;
}
