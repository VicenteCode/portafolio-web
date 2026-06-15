"use client"

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import type { ReactNode } from 'react'

type ModalProps = {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      aria-modal="true"
      role="dialog"
      aria-labelledby={title ? 'modal-title' : undefined}
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={[
          'relative z-10 w-full max-w-md rounded-xl border border-zinc-200 bg-white p-6 shadow-xl',
          'dark:border-zinc-800 dark:bg-zinc-900',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {title && (
          <h2
            id="modal-title"
            className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100"
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>,
    document.body,
  )
}
