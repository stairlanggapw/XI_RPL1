import React from 'react'
import assets from '../assets/assets'

function Gallery() {
  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-[#292653] py-16 md:py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">

        <div className="text-center text-white mb-10 md:mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] text-white/60 mb-3">
            Our Class
          </p>

          <h2 className="text-3xl md:text-5xl text-white font-bold">
            Class Gallery
          </h2>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 mt-5 md:mt-6 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mt-8 md:mt-10">

          <div className="bg-white border-none rounded-2xl text-[#292653] overflow-hidden hover:bg-white/60 hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300">
            <img
              src={assets.gallery1}
              alt="Gallery 1"
              className="w-full h-56 sm:h-52 md:h-64 object-cover"
            />

            <h4 className="text-lg md:text-xl font-bold m-4">
              Gallery 1
            </h4>

            <p className="text-sm md:text-base text-[#292653] mx-4 mb-4">
              Description of Gallery 1
            </p>
          </div>

          <div className="bg-white border-none rounded-2xl text-[#292653] overflow-hidden hover:bg-white/60 hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300">
            <img
              src={assets.gallery2}
              alt="Gallery 2"
              className="w-full h-56 sm:h-52 md:h-64 object-cover"
            />

            <h4 className="text-lg md:text-xl font-bold m-4">
              Gallery 2
            </h4>

            <p className="text-sm md:text-base text-[#292653] mx-4 mb-4">
              Description of Gallery 2
            </p>
          </div>

          <div className="bg-white border-none rounded-2xl text-[#292653] overflow-hidden hover:bg-white/60 hover:-translate-y-2 md:hover:-translate-y-3 transition-all duration-300">
            <img
              src={assets.gallery3}
              alt="Gallery 3"
              className="w-full h-56 sm:h-52 md:h-64 object-cover"
            />

            <h4 className="text-lg md:text-xl font-bold m-4">
              Gallery 3
            </h4>

            <p className="text-sm md:text-base text-[#292653] mx-4 mb-4">
              Description of Gallery 3
            </p>
          </div>

        </div>

        <div className="flex justify-center">
          <button className="mt-8 px-5 md:px-6 py-2.5 md:py-3 bg-white text-black rounded-xl text-base md:text-lg hover:bg-gray-300 hover:-translate-y-1 transition">
            View More →
          </button>
        </div>

      </div>
    </section>
  )
}

export default Gallery
