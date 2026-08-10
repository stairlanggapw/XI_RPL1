import React, { useEffect, useRef } from 'react'
import Lenis from 'lenis'

const TextBanner = () => {
  const bannerRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    const handleScroll = () => {
      if (!bannerRef.current) return

      const scrollY = window.scrollY
      const offset = scrollY * 0.15

      bannerRef.current.style.setProperty(
        '--banner-offset',
        `${offset}px`
      )
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      lenis.destroy()
    }
  }, [])

  return (
    <section
      ref={bannerRef}
      className="relative overflow-hidden border-y-4 text-white border-none bg-[#292653] py-5"
    >
      <div
        className="flex w-max animate-marquee"
        style={{
          transform: 'translateX(var(--banner-offset, 0px))',
        }}
      >
        <div className="flex shrink-0 items-center">
          <span className="mx-6 text-2xl font-bold">
            XI RPL 1
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            REKAYASA PERANGKAT LUNAK
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            CODE • CREATE • INNOVATE
          </span>

          <span className="text-2xl">✦</span>
        </div>

        <div className="flex shrink-0 items-center">
          <span className="mx-6 text-2xl font-bold">
            XI RPL 1
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            REKAYASA PERANGKAT LUNAK
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            CODE • CREATE • INNOVATE
          </span>

          <span className="text-2xl">✦</span>
        </div>
      </div>

      <div className="mt-3 flex w-max animate-marquee-reverse">
        <div className="flex shrink-0 items-center">
          <span className="mx-6 text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            CODE • CREATE • INNOVATE
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            REKAYASA PERANGKAT LUNAK
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            XI RPL 1
          </span>
        </div>

        <div className="flex shrink-0 items-center">
          <span className="mx-6 text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            CODE • CREATE • INNOVATE
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            REKAYASA PERANGKAT LUNAK
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            XI RPL 1
          </span>
        </div>

        <div className="flex shrink-0 items-center">
          <span className="mx-6 text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            CODE • CREATE • INNOVATE
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            REKAYASA PERANGKAT LUNAK
          </span>

          <span className="text-2xl">✦</span>

          <span className="mx-6 text-2xl font-bold">
            XI RPL 1
          </span>
        </div>
      </div>
    </section>
  )
}

export default TextBanner