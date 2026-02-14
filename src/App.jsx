
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
  <div className="w-full min-h-screen bg-[#0b0b0b] text-white">
      <Navbar />
      <ScrollProgress />
      <ThemeToggle />
       
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
