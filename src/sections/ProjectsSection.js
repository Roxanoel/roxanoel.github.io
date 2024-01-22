import ProjectCard from "../components/projects/ProjectCard";

function ProjectsSection() {
    const projectsData = require("../assets/data/projects.json")

    
    return <div id="projects-section"> 
        <div className="projects-section-title">
            <h2 className="section-header">
                PROJECTS
            </h2>
        </div>
        <div className="filters-container">
            {/* Put filters here, make button component. There will be state involved.*/}
        </div>
        <div className="projects-list-container">
            {/* Put project cards here; make component + list rendering*/}
            {
                projectsData.projects.map((project) => {
                return <ProjectCard 
                    key={project.name}
                    name={project.name} 
                    description={project.description} 
                    tags={project.tags}
                    liveLink={project.liveLink}
                    githubLink={project.githubLink}
                    imageLink={project.imageLink}  />})
            }
        </div>
    </div>
}

export default ProjectsSection;