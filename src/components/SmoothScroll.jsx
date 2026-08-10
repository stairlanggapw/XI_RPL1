import { useEffect } from 'react'
import Lenis from 'lenis'

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      smoothWheel: true,
      syncTouch: true,
    })

    const handleAnchorClick = (event) => {
      const link = event.target.closest('a')

      if (!link) return

      const href = link.getAttribute('href')

      if (!href || !href.startsWith('#')) return

      const target = document.querySelector(href)

      if (!target) return

      event.preventDefault()

      lenis.scrollTo(target, {
        duration: 1.4,
        offset: -20,
      })
    }

    document.addEventListener('click', handleAnchorClick)

    let animationFrame

    const raf = (time) => {
      lenis.raf(time)
      animationFrame = requestAnimationFrame(raf)
    }

    animationFrame = requestAnimationFrame(raf)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(animationFrame)
      lenis.destroy()
    }
  }, [])

  return null
}

export default SmoothScroll