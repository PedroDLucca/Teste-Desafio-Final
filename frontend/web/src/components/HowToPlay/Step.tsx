import type { Step } from '../../content/landing'

interface StepProps {
  step: Step
  isLast: boolean
}

export function Step({ step, isLast }: StepProps) {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col items-center">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-brand-flame bg-brand-black font-heading text-lg font-bold text-brand-flame">
          {step.number}
        </div>
        {!isLast && (
          <div className="mt-2 h-full w-0.5 bg-brand-gray" aria-hidden="true" />
        )}
      </div>

      <div className="pb-10">
        <h3 className="font-heading text-xl font-semibold text-brand-white">
          {step.title}
        </h3>
        <p className="mt-2 text-brand-muted">{step.description}</p>
      </div>
    </div>
  )
}
