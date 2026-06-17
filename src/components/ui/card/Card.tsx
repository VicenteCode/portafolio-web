import type { ReactNode } from 'react'

const paddingMap = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
} as const

type CardProps = {
  children: ReactNode
  className?: string
  padding?: keyof typeof paddingMap
  hoverable?: boolean
}

export function Card({
  children,
  className = '',
  padding = 'md',
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900',
        paddingMap[padding],
        hoverable
          ? 'transition-shadow duration-200 hover:shadow-lg hover:shadow-zinc-200/60 dark:hover:shadow-zinc-900/60'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
