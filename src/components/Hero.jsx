import React, { useEffect, useState } from 'react'
import assets from '../assets/assets'
import { FaInstagram, FaTiktok, FaGithub, FaSpotify } from 'react-icons/fa'

const Hero = () => {
  const texts = [
    'Welcome to',
    'Creative Students',
    'Future Developers',
  ]

  const [textIndex, setTextIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const text = 'Welcome to'
  const [typingText, setTypingText] = useState('')
  useEffect(() => {
      let currentIndex = 0
      let timeout
      const typeText = () => {
        const currentText = texts[textIndex]
        const interval = setInterval(() => {
          currentIndex++

          setDisplayText(
            currentText.slice(0, currentIndex)
          )

          if (currentIndex === currentText.length) {
            clearInterval(interval)

            timeout = setTimeout(() => {
              setDisplayText('')

              setTextIndex(
                (prev) => (prev + 1) % texts.length
              )
            }, 3000)
          }
        }, 120)
      }
      typeText()
      return () => {
        clearTimeout(timeout)
      }
    }, [textIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <img
        src={assets.background}
        alt="XI RPL 1"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 min-h-screen flex items-center px-6 md:px-10 lg:px-16 pt-24 md:pt-32">
        <div className="w-full max-w-xl text-white">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold h-14">
            {displayText}
            <span className="typing-cursor">|</span>
          </h2>

          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none">
            XI RPL 1
          </h1>

          <div className="w-full max-w-[600px] border-b-2 border-white my-4"></div>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          <button className="mt-6 md:mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black rounded-xl text-base md:text-lg hover:bg-gray-300 hover:-translate-y-1 transition">
            Learn more →
          </button>

          <div className="flex items-center gap-4 md:gap-6 mt-6 md:mt-8">
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition"
            >
              <FaInstagram size={20} className="md:hidden" />
              <FaInstagram size={24} className="hidden md:block" />
            </a>

            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition"
            >
              <FaTiktok size={20} className="md:hidden" />
              <FaTiktok size={24} className="hidden md:block" />
            </a>

            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition"
            >
              <FaGithub size={20} className="md:hidden" />
              <FaGithub size={24} className="hidden md:block" />
            </a>

            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#292653] transition"
            >
              <FaSpotify size={20} className="md:hidden" />
              <FaSpotify size={24} className="hidden md:block" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#292653] via-[#292653]/30 to-transparent"></div>
    </section>
  )
}

export default Hero
