import { footer } from '../../content/landing'

export function Footer() {
  return (
    <footer
      className="border-t border-brand-gray bg-brand-black py-12"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          <span className="font-heading text-lg font-bold text-brand-flame">
            Flicker of Sanity
          </span>

          <div className="flex flex-wrap justify-center gap-6">
            {footer.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-brand-muted transition-colors hover:text-brand-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-brand-muted">
          {footer.copyright}
        </p>
      </div>
    </footer>
  )
}
