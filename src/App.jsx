import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import HireModal from './components/HireModal.jsx'
import Hero from './sections/Hero'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  const [isHireOpen, setIsHireOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans bg-gray-950 text-gray-100 pt-6">
      <Navbar onHireClick={() => setIsHireOpen(true)} />
      <Header onHireClick={() => setIsHireOpen(true)} />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact onHireClick={() => setIsHireOpen(true)} />
      </main>
      <Footer />
      <HireModal isOpen={isHireOpen} onClose={() => setIsHireOpen(false)} />
    </div>
  )
}

export default App
