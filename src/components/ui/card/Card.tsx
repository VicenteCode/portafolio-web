import type { ReactNode } from 'react'

const variantMap = {
  default:  'border border-zinc-800 bg-zinc-900',
  elevated: 'border border-zinc-800 bg-zinc-900 shadow-lg shadow-zinc-950/60',
  ghost:    'bg-transparent',
  outlined: 'border border-zinc-700 bg-transparent',
  filled:   'bg-zinc-800 border-transparent',
} as const

const paddingMap = {
  none: 'p-0',
  sm:   'p-3',
  md:   'p-5',
  lg:   'p-8',
} as const

const radiusMap = {
  sm:   'rounded-lg',
  md:   'rounded-xl',
  lg:   'rounded-2xl',
  full: 'rounded-3xl',
} as const

const hoverMap = {
  default:  'transition-colors duration-200 hover:bg-zinc-800',
  elevated: 'transition-shadow duration-200 hover:shadow-xl hover:shadow-zinc-950/80',
  ghost:    'transition-colors duration-200 hover:bg-zinc-900',
  outlined: 'transition-colors duration-200 hover:border-zinc-500',
  filled:   'transition-colors duration-200 hover:bg-zinc-700',
} as const

type CardProps = {
  children:   ReactNode
  variant?:   keyof typeof variantMap
  padding?:   keyof typeof paddingMap
  radius?:    keyof typeof radiusMap
  hoverable?: boolean
  className?: string
}

export function Card({
  children,
  variant   = 'default',
  padding   = 'md',
  radius    = 'md',
  hoverable = false,
  className = '',
}: CardProps) {
  return (
    <div
      className={[
        variantMap[variant],
        paddingMap[padding],
        radiusMap[radius],
        hoverable ? hoverMap[variant] : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
