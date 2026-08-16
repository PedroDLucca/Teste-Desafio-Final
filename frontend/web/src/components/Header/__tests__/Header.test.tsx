import { render, screen } from '@testing-library/react'
import { Header } from '../Header'

describe('Header', () => {
  it('renders logo and Jogar Agora button', () => {
    render(<Header isScrolled={false} />)
    expect(screen.getByText('Flicker of Sanity')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /jogar agora/i })).toBeInTheDocument()
  })

  it('shows mobile menu button on small screens', () => {
    render(<Header isScrolled={false} />)
    expect(screen.getByRole('button', { name: /abrir menu/i })).toBeInTheDocument()
  })
})
