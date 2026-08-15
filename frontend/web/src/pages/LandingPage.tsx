import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { About } from '../components/About/About'
import { Features } from '../components/Features/Features'
import { HowToPlay } from '../components/HowToPlay/HowToPlay'
import { CallToAction } from '../components/CallToAction/CallToAction'
import { Footer } from '../components/Footer/Footer'
import { useScrollPosition } from '../hooks/useScrollPosition'

export function LandingPage() {
  const { isScrolled } = useScrollPosition()

  return (
    <div className="min-h-screen bg-brand-black">
      <Header isScrolled={isScrolled} />
      <main>
        <Hero />
        <About />
        <Features />
        <HowToPlay />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
