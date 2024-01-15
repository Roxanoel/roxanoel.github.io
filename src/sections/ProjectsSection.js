function ProjectsSection() {
    let projects = require("../assets/data/projects.json")
    
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
            {JSON.stringify(projects)}
        </div>
    </div>
}

export default ProjectsSection;