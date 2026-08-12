import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'

function Support() {
  const supportRef = useRef(null)

  useEffect(() => {
    const elements = supportRef.current.querySelectorAll('.support-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('support-show')
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="support"
      ref={supportRef}
      className="relative overflow-hidden bg-[#292653]"
    >
      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center text-white mb-8 support-reveal">
          <p className="text-xs md:text-sm uppercase tracking-[4px] text-white/60 mb-2">
            Our Support
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Supported By
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-20">

          <div className="support-reveal">
            <img
              src={assets.pplg}
              alt="Institution 1"
              className="max-w-[160px] max-h-20 object-contain"
            />
          </div>

          <div className="support-reveal">
            <img
              src={assets.SMK}
              alt="Institution 2"
              className="max-w-[160px] max-h-20 object-contain"
            />
          </div>

          <div className="support-reveal">
            <img
              src={assets.PK}
              alt="Institution 3"
              className="max-w-[160px] max-h-20 object-contain"
            />
          </div>

          <div className="support-reveal">
            <img
              src={assets.godev}
              alt="Institution 3"
              className="max-w-[160px] max-h-30 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Support