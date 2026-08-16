import { steps } from '../../content/landing'
import { Step } from './Step'

export function HowToPlay() {
  return (
    <section
      id="como-jogar"
      className="bg-brand-gray py-20 sm:py-28"
      aria-labelledby="howto-title"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="howto-title"
          className="font-heading text-3xl font-bold text-brand-white sm:text-4xl"
        >
          Como Jogar
        </h2>

        <div className="mt-12">
          {steps.map((step, index) => (
            <Step
              key={step.number}
              step={step}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <div className="mt-8">
          <a
            href="/regras"
            className="text-brand-flame underline-offset-4 transition-colors hover:text-brand-white hover:underline"
          >
            Leia as regras completas →
          </a>
        </div>
      </div>
    </section>
  )
}
