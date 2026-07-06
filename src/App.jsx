import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Hero from './sections/Hero'
import About from './sections/About.jsx'
import Projects from './sections/Projects.jsx'
import Skills from './sections/Skills.jsx'
import Contact from './sections/Contact.jsx'

function App() {
  return (
    <div className="min-h-screen font-sans bg-gray-950 text-gray-100 pt-6">
      <Navbar />
      <Header />
      <Hero />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
