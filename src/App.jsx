import React from 'react'
import Navbar from './components/Navbar'
import SmoothScroll from './components/SmoothScroll'
import Hero from './components/Hero'
import TextBanner from './components/TextBanner'
import About from './components/About'
import Structure from './components/Structure'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <TextBanner />
        <About />
        <Structure />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App