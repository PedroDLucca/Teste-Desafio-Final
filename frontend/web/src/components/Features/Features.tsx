import { features } from '../../content/landing'
import { FeatureCard } from './FeatureCard'

export function Features() {
  return (
    <section
      id="features"
      className="bg-brand-black py-20 sm:py-28"
      aria-labelledby="features-title"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="features-title"
          className="font-heading text-3xl font-bold text-brand-white sm:text-4xl"
        >
          Diferenciais
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
