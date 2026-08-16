import type { Feature } from '../../content/landing'

interface FeatureCardProps {
  feature: Feature
}

function FeatureIcon({ icon }: { icon: Feature['icon'] }) {
  const icons: Record<Feature['icon'], React.ReactNode> = {
    board: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="4" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <rect x="22" y="22" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    fog: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M6 14h28M10 20h20M14 26h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    monster: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <path d="M20 6l4 8h8l-6 6 2 10-8-5-8 5 2-10-6-6h8z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    minigame: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
        <path d="M20 8v4M20 28v4M8 20h4M28 20h4M11.5 11.5l2.8 2.8M25.7 25.7l2.8 2.8M11.5 28.5l2.8-2.8M25.7 14.3l2.8-2.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    coop: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <circle cx="26" cy="14" r="5" stroke="currentColor" strokeWidth="2" />
        <path d="M6 32c0-4.4 3.6-8 8-8M26 24c4.4 0 8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 24c-2.2 0-4 1.8-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    clock: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2" />
        <path d="M20 10v10l7 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }

  return <>{icons[icon]}</>
}

export function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <div className="group rounded-lg bg-brand-gray/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-flame/10">
      <div className="text-brand-flame transition-colors group-hover:text-brand-white">
        <FeatureIcon icon={feature.icon} />
      </div>
      <h3 className="mt-4 font-heading text-lg font-semibold text-brand-white">
        {feature.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">
        {feature.description}
      </p>
    </div>
  )
}
