import React from 'react';
import './SectionsSCSS/Projects.scss';
import ProjectCard from './ProjectCard';
import ProjectsInfo from './ProjectsInfo';

const Projects = (props) => {

        return(
            <section 
            className='projectHolder'
            style={(props.sectionShow === "projects" && props.sideNavShow) ? {diplay: "flex"} : {display: "none"}}
            >
                <div className="projectCardHolder">
                    <div className="projectTitle">
                        <h2>Projects</h2>
                    </div>
                        {ProjectsInfo.map(x=>{ return(
                            <ProjectCard 
                            name = {x.name}
                            image = {x.image}
                            used = {x.used}
                            url = {x.url}
                            />
                        )})
                    }
                </div>    
            </ section>
        )
}

export default Projects