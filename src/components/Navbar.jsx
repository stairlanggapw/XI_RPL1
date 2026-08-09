import React, { useState } from 'react'
import assets from '../assets/assets'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-3 left-2 right-2 z-50 m-2 px-5 md:px-10 py-3 rounded-2xl md:rounded-full bg-white/30 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            XI RPL 1
          </h1>
        </div>

        <ul className="hidden md:flex items-center gap-8 lg:gap-14 text-lg text-white">
          <li>
            <a
              href="#home"
              className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#structure"
              className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Structure
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="relative pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-2xl"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-5 pt-5 pb-3 text-base text-white">
          <li>
            <a
              href="#home"
              onClick={() => setIsOpen(false)}
              className="block py-1"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="block py-1"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#structure"
              onClick={() => setIsOpen(false)}
              className="block py-1"
            >
              Structure
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              onClick={() => setIsOpen(false)}
              className="block py-1"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block py-1"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar