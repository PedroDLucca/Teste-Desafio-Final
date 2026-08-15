import { useState, useEffect } from 'react'

interface UseScrollPositionOptions {
  threshold?: number
}

export function useScrollPosition({ threshold = 50 }: UseScrollPositionOptions = {}): { isScrolled: boolean } {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold])

  return { isScrolled }
}
