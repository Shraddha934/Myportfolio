import { FaBars, FaTimes } from 'react-icons/fa'
import Navbar from './Navbar'
import '../styles/Header.css'

const Header = ({ menuOpen, toggleMenu, closeMenu }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <a href="#home" className="logo" onClick={closeMenu}>
            Shraddha
          </a>
          
          <button 
            className="menu-btn" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <Navbar menuOpen={menuOpen} closeMenu={closeMenu} />
        </div>
      </div>
    </header>
  )
}

export default Header