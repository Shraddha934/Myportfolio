import { useState } from 'react'
import Header from './components/Header'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import useScrollAnimation from './hooks/useScrollAnimation';
import './styles/App.css'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollAnimation(); 
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <div className="app">
      <Header 
        menuOpen={menuOpen} 
        toggleMenu={toggleMenu} 
        closeMenu={closeMenu} 
      />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App