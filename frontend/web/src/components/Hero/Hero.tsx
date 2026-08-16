import { hero } from '../../content/landing'

export function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      aria-label="Seção principal"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-purple to-brand-black"
        style={{
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 12s ease infinite',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 bg-brand-black/60" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="animate-fade-in-up font-heading text-5xl font-bold text-brand-white sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>

        <p className="animate-fade-in-up-delay mt-6 text-lg text-brand-muted sm:text-xl lg:text-2xl">
          {hero.tagline}
        </p>

        <div className="animate-fade-in-up-delay-2 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={hero.ctaPrimaryHref}
            className="rounded-md bg-brand-flame px-8 py-3 text-lg font-semibold text-brand-black transition-all hover:scale-105 hover:bg-brand-flame/90 focus:outline-none focus:ring-2 focus:ring-brand-flame focus:ring-offset-2 focus:ring-offset-brand-black"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href={hero.ctaSecondaryHref}
            className="rounded-md border border-brand-muted px-8 py-3 text-lg font-semibold text-brand-white transition-all hover:border-brand-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-flame focus:ring-offset-2 focus:ring-offset-brand-black"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
