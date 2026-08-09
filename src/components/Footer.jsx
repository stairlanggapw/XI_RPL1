import React from 'react'

function Footer() {
  return (
    <footer className="bg-[#292653] border-t border-white/10 px-5 md:px-8 py-5">
      <div className="max-w-6xl mx-auto text-center text-white">

        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-sm md:text-base">
          <a
            href="#"
            className="hover:text-white/60 transition"
          >
            Privacy Policy
          </a>

          <span className="text-white/40 hidden sm:inline">
            |
          </span>

          <a
            href="#"
            className="hover:text-white/60 transition"
          >
            Terms of Use
          </a>

          <span className="text-white/40 hidden sm:inline">
            |
          </span>

          <a
            href="#contact"
            className="hover:text-white/60 transition"
          >
            Contact Support
          </a>
        </div>

        <p className="text-xs md:text-sm text-white/60 mt-4 leading-relaxed">
          Copyright © XI_RPL1_PROFILE.com. All Rights Reserved
          <span className="mx-2 hidden sm:inline">
            |
          </span>
          <span className="block sm:inline mt-1 sm:mt-0">
            Designed by{" "}
            <a
              href="https://XI_RPL1.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition"
            >
              XI_RPL1.github.io
            </a>
          </span>
        </p>

      </div>
    </footer>
  )
}

export default Footer
