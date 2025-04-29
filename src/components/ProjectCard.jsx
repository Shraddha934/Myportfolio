import '../styles/ProjectCard.css'

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          <a href="public/documents/Sentiment Analysis .pdf" 
            download="Sentiment Analysis.pdf"  target="_blank" rel="noreferrer">
            Code
          </a>
          {/* <a href={project.demo} className="btn" target="_blank" rel="noreferrer">
            Live Demo
          </a> */}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard