import { FaCode, FaPalette } from 'react-icons/fa'
import '../styles/sections/About.css'
import { FiCode } from 'react-icons/fi';


const About = () => {
  const skills = [
    'HTML/CSS', 'JavaScript', 'React', 'PostgreSQL', 'MongoDB',
    'AWS', 'Git', 'Machine learning beginner', 'C++', 'ExpressJS'
  ]

  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Building responsive and interactive websites with modern technologies.Modern web development technologies including React, Nodejs, Express, and MongoDB. I build efficient, scalable applications across both frontend and backend.'},
    {
      icon: <FaPalette />,
      title: 'Prompt Engineering ',
      description: 'Know how to use AI tools.Where I craft precise and strategic inputs to guide AI models in generating accurate and optimized outputs.'
    },
    {
      icon: <FiCode />,
      title: 'C++',
      description: 'I use C++ for mastering Data Structures and Algorithms , building strong problem-solving and optimization skills. I apply this foundation to develop efficient and high-performance applications.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Who I Am</h3>
            <p>
            Hey there! I’m a Full Stack Developer currently in my 3rd year of Information Technology Engineering. I’m someone who’s always curious, always learning, and genuinely excited about how fast technology is evolving. I love building things — whether it’s designing a clean front-end experience or crafting a solid back-end system. I believe that in tech (and in life), adaptability is everything. As the world moves forward, I’m growing and evolving right along with it, ready to take on new challenges and turn ideas into reality. Always learning, always building — that’s my mantra
            </p>
          </div>
          
                  {/* Skills Grid Section */}
        <div className="about-skills">
          <h3>My Skills</h3>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-box">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        
        <div className="services">
          <h3>What I Do</h3>
          <div className="services-grid">
            {services.map(service => (
              <div key={service.title} className="service-card">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About