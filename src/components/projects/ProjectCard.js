function ProjectCard({name, description, tags, githubLink, liveLink}) {
    return <div className="project-card">
        <h4>{name}</h4>
        <p>{description}</p>
        {liveLink && <button>Live Demo</button>}
        {githubLink && <button>Learn More</button>}
    </div>
}

export default ProjectCard