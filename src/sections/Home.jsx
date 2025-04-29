import '../styles/sections/Home.css'
import profileImage from '../assets/photo.jpg';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            <h1 className="home-title">
              Hi, I'm <span>Shraddha Ghule</span>
            </h1>
            <h2 className="home-subtitle">Full Stack  Developer</h2>
            <p className="home-description">
            I don't just adapt to change — I grow with it. Always ready to learn, build, and push boundaries to deliver value wherever I go.
            </p>
            <div className="home-buttons">
              <a href="#projects" className="btn">
                View My Work
              </a>
              <a 
                 href="/documents/resume.pdf" 
                 download="YourName_Resume.pdf"
                 className="btn btn-outline"
                >
                Download Resume
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Me
              </a>
            </div>
          </div>
          <div className="home-image">
            <div className="image-wrapper">
              
              <img src={profileImage} alt="Shraddha Ghule" className="placeholder-image" />

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home