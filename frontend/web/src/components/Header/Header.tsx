import { useState } from 'react'
import { navItems } from '../../content/landing'

interface HeaderProps {
  isScrolled: boolean
}

export function Header({ isScrolled }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-black/95 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
        <a
          href="#topo"
          className="font-heading text-xl font-bold text-brand-flame hover:text-brand-white transition-colors"
          aria-label="Voltar ao topo"
        >
          Flicker of Sanity
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-brand-muted hover:text-brand-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/cadastro"
            className="rounded-md bg-brand-flame px-4 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-flame/90"
          >
            Jogar Agora
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-brand-white"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-brand-black/95 border-t border-brand-gray">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-brand-muted hover:text-brand-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/cadastro"
              className="rounded-md bg-brand-flame px-4 py-2 text-center text-sm font-semibold text-brand-black transition-colors hover:bg-brand-flame/90"
              onClick={() => setMobileOpen(false)}
            >
              Jogar Agora
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
