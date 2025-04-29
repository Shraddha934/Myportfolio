import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const Navbar = ({ menuOpen, closeMenu }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
      <ul className="nav-list">
        {navItems.map(item => (
          <li key={item.id} className="nav-item">
            <a 
              href={`#${item.id}`} 
              className="nav-link"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          </li>
        ))}
         <li className="nav-item">
          <a 
            href="portfolio/public/documents/Shraddha Ghule.pdf" 
            download="Shraddha_Resume.pdf"
            className="nav-link nav-resume"
            onClick={closeMenu}
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar