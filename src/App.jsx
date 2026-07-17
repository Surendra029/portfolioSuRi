import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
  <div className="w-full min-h-screen bg-white text-gray-900">
      <Hero />
      <Experience />
      <About />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
