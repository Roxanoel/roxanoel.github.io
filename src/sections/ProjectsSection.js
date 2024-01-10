function ProjectsSection() {
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
        </div>
    </div>
}

export default ProjectsSection;