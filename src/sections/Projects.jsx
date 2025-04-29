import { useState } from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import '../styles/sections/Projects.css'
import ecommerceImage from '../assets/ecommerce.png'
import senti from '../assets/semti.jpg'
import bi from '../assets/bi.png'
const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const projects = [
    {
      id: 1,
      title: 'WedBliss',
      description: 'Developed a full-stack MERN e-commerce platform with user authentication, role-based authorization (admin/user), and secure payment integration using Razorpay. Implemented features like product management, cart, order tracking, and real-time payment status updates.',
      tags: ['React', 'NodeJS', 'MongoDB','ExpressJS'],
      image: ecommerceImage,
      github: 'https://github.com/Shraddha934/E-commerce',
    },
    {
      id: 2,
      title: 'Semantic Analysis',
      description: 'Built a Social Media Sentiment Analysis system using real-time tweets fetched via the Twitter API. Cleaned and labeled data with TextBlob, and compared four machine learning models (Logistic Regression, Random Forest, SVM, LSTM) for sentiment classification. Logistic Regression achieved the highest accuracy of 82.67%.',
      tags: ['python','ML'],
      image: senti,
      // github: 'https://github.com/Shlokyy4/Semantic-Analysis',
      demo: '#'
    },
    {
      id: 3,
      title: 'Supplier Performance Dashboard',
      description: 'Developed a Business Intelligence dashboard using Streamlit, SQLite, and data visualization libraries. Created a relational database with synthetic data and built an interactive dashboard featuring supplier filtering, performance visualization, sales trend forecasting with Prophet, and supplier clustering using K-Means.',
      tags: ['python','ML'],
      image: bi,
      github: 'https://github.com/Shraddha934/BI-PROJECT',
      demo: '#'
    }
  ]

  const filters = ['All']

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="project-filters">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects