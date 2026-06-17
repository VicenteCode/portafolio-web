'use client';

import { useSidebar } from './useSidebar';

const sidebarWidthMap = {
  sm: { expanded: 'w-48', collapsed: 'w-16', marginExpanded: 'ml-48', marginCollapsed: 'ml-16' },
  md: { expanded: 'w-64', collapsed: 'w-16', marginExpanded: 'ml-64', marginCollapsed: 'ml-16' },
  lg: { expanded: 'w-80', collapsed: 'w-16', marginExpanded: 'ml-80', marginCollapsed: 'ml-16' },
} as const;

interface LayoutLProps {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
  sidebarWidth?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LayoutL({
  children,
  sidebar,
  header,
  sidebarWidth = 'md',
  className = '',
}: LayoutLProps) {
  const { isCollapsed, toggle } = useSidebar();

  const widths = sidebarWidthMap[sidebarWidth];
  const asideWidth = isCollapsed ? widths.collapsed : widths.expanded;
  const contentMargin = isCollapsed ? widths.marginCollapsed : widths.marginExpanded;

  return (
    <div className={`flex h-screen overflow-hidden ${className}`}>
      <aside
        className={`fixed left-0 top-0 h-full bg-slate-900 transition-all duration-300 ease-in-out z-20 flex flex-col ${asideWidth} overflow-hidden`}
      >
        <div className="flex-1 overflow-hidden">{sidebar}</div>

        <button
          onClick={toggle}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className="flex items-center justify-center h-10 w-full border-t border-slate-700 text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors duration-150 shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      </aside>

      <div className={`flex flex-col flex-1 overflow-hidden transition-all duration-300 ease-in-out ${contentMargin}`}>
        <header className="sticky top-0 z-10 w-full bg-zinc-100 border-b border-zinc-200">
          {header}
        </header>

        <main className="flex-1 overflow-y-auto p-6 bg-zinc-50">
          {children}
        </main>
      </div>
    </div>
  );
}
