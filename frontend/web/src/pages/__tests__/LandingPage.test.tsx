import { render, screen, within } from '@testing-library/react'
import { LandingPage } from '../LandingPage'

describe('LandingPage', () => {
  it('renders all sections', () => {
    render(<LandingPage />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(screen.getByText(/a escuridão consome a realidade/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /sobre o jogo/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /diferenciais/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /como jogar/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /pronto para enfrentar a escuridão/i })).toBeInTheDocument()
  })

  it('has Jogar Agora buttons pointing to /cadastro', () => {
    render(<LandingPage />)
    const ctaButtons = screen.getAllByRole('link', { name: /jogar agora/i })
    ctaButtons.forEach((button) => {
      expect(button.getAttribute('href')).toBe('/cadastro')
    })
  })

  it('renders all feature cards', () => {
    render(<LandingPage />)
    const featuresSection = screen.getByRole('heading', { name: /diferenciais/i }).closest('section')!
    const features = [
      'Tabuleiro Dinâmico',
      'Fog of War',
      'Monstros',
      'Minigames',
      'Cooperação',
      'Tempo Real',
    ]
    features.forEach((feature) => {
      expect(within(featuresSection).getByText(feature)).toBeInTheDocument()
    })
  })

  it('renders all how-to-play steps', () => {
    render(<LandingPage />)
    const howToSection = screen.getByRole('heading', { name: /como jogar/i }).closest('section')!
    const steps = [
      'Crie sua conta',
      'Crie uma sala',
      'Explore o sanatório',
      'Fuja antes que a escuridão vença',
    ]
    steps.forEach((step) => {
      expect(within(howToSection).getByText(step)).toBeInTheDocument()
    })
  })

  it('renders footer with links', () => {
    render(<LandingPage />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Regras')).toBeInTheDocument()
    expect(within(footer).getByText('Suporte')).toBeInTheDocument()
    expect(within(footer).getByText(/todos os direitos reservados/i)).toBeInTheDocument()
  })
})
