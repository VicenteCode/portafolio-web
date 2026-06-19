import type { ReactNode } from 'react'

const variantMap = {
  default:  'border border-border bg-surface',
  elevated: 'border border-border bg-surface shadow-lg shadow-surface-sunken/60',
  ghost:    'bg-transparent',
  outlined: 'border border-border-subtle bg-transparent',
  filled:   'bg-surface-raised border-transparent',
  glass:    'border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20',
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
  default:  'transition-colors duration-200 hover:bg-surface-raised',
  elevated: 'transition-shadow duration-200 hover:shadow-xl hover:shadow-surface-sunken/80',
  ghost:    'transition-colors duration-200 hover:bg-surface',
  outlined: 'transition-colors duration-200 hover:border-border-strong',
  filled:   'transition-colors duration-200 hover:bg-surface-raised/70',
  glass:    'transition-colors duration-200 hover:bg-white/10',
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
