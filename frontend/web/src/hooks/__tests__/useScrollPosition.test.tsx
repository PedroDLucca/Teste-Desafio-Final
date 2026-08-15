import { renderHook } from '@testing-library/react'
import { useScrollPosition } from '../useScrollPosition'

describe('useScrollPosition', () => {
  beforeEach(() => {
    window.scrollY = 0
  })

  it('returns false when scroll is below threshold', () => {
    const { result } = renderHook(() => useScrollPosition({ threshold: 50 }))
    expect(result.current.isScrolled).toBe(false)
  })

  it('returns true when scroll is above threshold', () => {
    window.scrollY = 100
    const { result } = renderHook(() => useScrollPosition({ threshold: 50 }))
    expect(result.current.isScrolled).toBe(true)
  })

  it('uses default threshold of 50', () => {
    window.scrollY = 51
    const { result } = renderHook(() => useScrollPosition())
    expect(result.current.isScrolled).toBe(true)
  })
})
