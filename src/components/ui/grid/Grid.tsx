import type { ReactNode } from "react";

type GridCols = 1 | 2 | 3 | 4;
type GridGap = "sm" | "md" | "lg";

type GridProps = {
  children: ReactNode;
  cols?: GridCols;
  gap?: GridGap;
  className?: string;
};

const colsMap: Record<GridCols, string> = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 md:grid-cols-3",
  4: "sm:grid-cols-2 md:grid-cols-4",
};

const gapMap: Record<GridGap, string> = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-8",
};

export function Grid({
  children,
  cols = 3,
  gap = "md",
  className,
}: GridProps) {
  return (
    <div
      className={`grid grid-cols-1 ${colsMap[cols]} ${gapMap[gap]} ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
