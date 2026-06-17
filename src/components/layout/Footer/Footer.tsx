type FooterLink = {
  label: string
  href: string
}

type FooterProps = {
  name?: string
  links?: FooterLink[]
  className?: string
}

export function Footer({
  name = 'VicenteCode',
  links,
  className = '',
}: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer
      className={[
        'w-full border-t border-zinc-200 py-6 dark:border-zinc-800',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:gap-0 sm:px-6 lg:px-8">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          © {year} {name}
        </span>

        {links && links.length > 0 && (
          <nav className="flex items-center gap-4">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-zinc-500 transition-colors duration-150 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </footer>
  )
}
