import React from 'react'

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#292653] px-8 md:px-8 py-10 md:py-24"
    >
      <div className="relative z-10 max-w-6xl mx-auto">

        <div className="text-center text-white mb-10 md:mb-16">
          <p className="text-xs md:text-sm uppercase tracking-[3px] md:tracking-[4px] text-white/60 mb-3">
            Get in Touch
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Contact Us
          </h2>

          <div className="w-20 md:w-24 h-1 bg-white mx-auto mt-5 md:mt-6"></div>

          <p className="text-sm md:text-lg leading-relaxed text-white/80 mt-5 md:mt-6 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mt-8 md:mt-10 items-start">

          <form className="w-full">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/40"
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-5 md:px-6 py-2.5 md:py-3 bg-white text-black rounded-xl text-base md:text-lg hover:bg-gray-300 hover:-translate-y-1 transition"
            >
              Send Message
            </button>
          </form>

          <iframe
            title="SMK Negeri 3 Kendal Location"
            className="w-full h-[300px] sm:h-[335px] rounded-2xl border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.750963893791!2d110.27458361057687!3d-7.110872692862976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e706321d98b92fb%3A0xa5937f5a5e211d9f!2sSMK%20Negeri%203%20Kendal!5e1!3m2!1sid!2sid!4v1786276855713!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>
    </section>
  )
}

export default Contact
