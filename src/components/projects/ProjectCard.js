function ProjectCard({name, description, tags, githubLink, liveLink, imageLink}) {
   console.log(imageLink)
   return <div className="project-card">
        <div className="project-card-text-container">
            <h4>{name}</h4>
            <p>{description}</p>
            {liveLink && <button>Live Demo</button>}
            {githubLink && <button>Learn More</button>}
        </div>
        <div 
            className="project-card-image" 
            style={{ 
                backgroundImage: `url("${imageLink}")`, 
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}
        />
    </div>
}

export default ProjectCard