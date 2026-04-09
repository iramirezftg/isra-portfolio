import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Background3D from './components/Background3D'

function App() {
  return (
    <>
      <Background3D />
      
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
