import React from 'react'
import ClassStructure from './ClassStructure'
import ClassMembers from './ClassMembers'

function Structure() {
  return (
    <section
      id="structure"
      className="relative overflow-hidden bg-[#292653] py-16 md:py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">

        <div className="text-center text-white mb-10 md:mb-16">
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

        <ClassStructure />

        <ClassMembers />

      </div>
    </section>
  )
}

export default Structure
