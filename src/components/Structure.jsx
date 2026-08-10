import React, { useEffect, useRef } from 'react'
import ClassStructure from './ClassStructure'
import ClassMembers from './ClassMembers'

function Structure() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const structureRef = useRef(null)
  const membersRef = useRef(null)

  useEffect(() => {
    const elements = [
      headingRef.current,
      structureRef.current,
      membersRef.current,
    ]

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('structure-show')
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    elements.forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => {
      elements.forEach((element) => {
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  return (
    <section
      id='structure'
      ref={sectionRef}
      className="relative overflow-hidden bg-[#292653] py-20 md:py-28"
    >
      <div className="container mx-auto px-5 md:px-10">

        <div
          ref={headingRef}
          className="structure-hidden text-center text-white mb-10 md:mb-16"
        >
          <p className="text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] text-white/60 mb-3">
            Our Class
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Class Structure
          </h2>

          <div className="w-20 md:w-24 h-1 bg-white mx-auto mt-5 md:mt-6"></div>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 mt-5 md:mt-6 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div
          ref={structureRef}
          className="structure-hidden structure-delay-1"
        >
          <ClassStructure />
        </div>

        <div
          ref={membersRef}
          className="structure-hidden structure-delay-2"
        >
          <ClassMembers />
        </div>

      </div>
    </section>
  )
}

export default Structure
