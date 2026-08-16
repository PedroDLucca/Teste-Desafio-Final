import { about } from '../../content/landing'

export function About() {
  return (
    <section
      id="sobre"
      className="bg-brand-gray py-20 sm:py-28"
      aria-labelledby="about-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              id="about-title"
              className="font-heading text-3xl font-bold text-brand-white sm:text-4xl"
            >
              {about.title}
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-brand-muted">
              {about.narrative}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-brand-flame/40 px-4 py-1.5 text-sm font-medium text-brand-flame"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div
              className="aspect-video w-full max-w-md rounded-lg bg-brand-purple/50 flex items-center justify-center"
              role="img"
              aria-label="Arte conceitual do Sanatório Flicker of Sanity"
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                className="text-brand-muted/40"
                aria-hidden="true"
              >
                <rect
                  x="8"
                  y="16"
                  width="48"
                  height="36"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M20 32h24M32 20v24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
