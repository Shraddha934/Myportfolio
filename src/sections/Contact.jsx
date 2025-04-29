import { FaGithub, FaLinkedin,FaEnvelope } from 'react-icons/fa'
import '../styles/sections/Contact.css'

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>
              Feel free to reach out to me via email or connect with me on LinkedIn or GitHub.
            </p>
            
            {/* Personal email */}
            <div className="info-item">
              <a href="mailto:shraddhaghule82@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope size={30} style={{ marginRight: '8px',color:'red' }} />
                shraddhaghule82@gmail.com</a>
            </div>
            
            {/* LinkedIn profile with icon */}
            <div className="info-item">
              <a href="https://www.linkedin.com/in/shraddha-ghule-7324752b8" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ marginRight: '8px',color: '#0A66C2' }} />
                LinkedIn Profile
              </a>
            </div>
            
            {/* GitHub profile with icon */}
            <div className="info-item">
              <a href="https://github.com/Shraddha934" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ marginRight: '8px' ,color:'black' }} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
