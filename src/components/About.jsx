import React, { useEffect, useRef } from 'react'
import assets from '../assets/assets'
import { FaUsers, FaGraduationCap, FaLaptopCode } from 'react-icons/fa'

function About() {
  const aboutRef = useRef(null)

  useEffect(() => {
    const elements = aboutRef.current.querySelectorAll('.about-reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-show')
          }
        })
      },
      {
        threshold: 0.2,
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => {
      elements.forEach((element) => observer.unobserve(element))
    }
  }, [])

  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative overflow-hidden bg-[#292653] py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="grid md:grid-cols-2 items-center gap-16">
          <div className="about-reveal about-left relative flex justify-center pr-0 md:pr-10">
            <div className="absolute w-64 h-80 md:w-80 md:h-96 bg-white rounded-3xl rotate-8"></div>
            <div className="relative z-10">
              <img
                src={assets.wakel}
                alt="Wali Kelas"
                className="w-64 h-80 md:w-80 md:h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
            <div className="absolute z-20 -bottom-3 right-0 md:-right-2 bg-white px-5 md:px-8 py-3 md:py-4 rounded-2xl shadow-xl">
              <p className="text-[#292653] font-bold text-base md:text-xl">
                Wali Kelas
              </p>
              <p className="text-gray-500 text-sm md:text-base">
                Bp. Joko Supriyono, S.Pd
              </p>
            </div>
          </div>
          <div className="about-reveal about-right text-white">
            <p className="text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] text-white/60 mb-3">
              About Us
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About XI RPL 1
            </h2>
            <div className="w-full max-w-[400px] md:w-100 h-1 bg-white mb-8"></div>
            <p className="text-sm md:text-lg leading-relaxed text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className="mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="about-reveal about-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5">
                <FaUsers className="text-2xl md:text-3xl mb-3 md:mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  30+
                </h3>
                <p className="text-sm md:text-base text-white/60">
                  Students
                </p>
              </div>
              <div className="about-reveal about-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5">
                <FaGraduationCap className="text-2xl md:text-3xl mb-3 md:mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  XI
                </h3>
                <p className="text-sm md:text-base text-white/60">
                  Grade
                </p>
              </div>
              <div className="about-reveal about-card bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 md:p-5">
                <FaLaptopCode className="text-2xl md:text-3xl mb-3 md:mb-4" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  RPL
                </h3>
                <p className="text-sm md:text-base text-white/60">
                  Major
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About