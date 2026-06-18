import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  navbar?: ReactNode;
  footer?: ReactNode;
  className?: string;
}

export function Layout({ children, navbar, footer, className }: LayoutProps) {
  return (
    <div className={`min-h-screen flex flex-col ${className ?? ""}`}>
      {navbar}
      <main className="isolate flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      {footer}
    </div>
  );
}
