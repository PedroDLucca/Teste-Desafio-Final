import { cta } from '../../content/landing'

export function CallToAction() {
  return (
    <section
      className="bg-brand-black py-20 sm:py-28"
      aria-labelledby="cta-title"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="cta-title"
          className="font-heading text-3xl font-bold text-brand-white sm:text-4xl"
        >
          {cta.title}
        </h2>

        <p className="mt-4 text-lg text-brand-muted">{cta.subtitle}</p>

        <div className="mt-8">
          <a
            href={cta.buttonHref}
            className="inline-block rounded-md bg-brand-flame px-10 py-4 text-lg font-semibold text-brand-black transition-all hover:scale-105 hover:bg-brand-flame/90 focus:outline-none focus:ring-2 focus:ring-brand-flame focus:ring-offset-2 focus:ring-offset-brand-black"
          >
            {cta.buttonLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
