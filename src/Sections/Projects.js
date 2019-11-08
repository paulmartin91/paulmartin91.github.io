import React from 'react';
import './SectionsSCSS/Projects.scss';
import ProjectCard from './ProjectCard';
import ProjectsInfo from './ProjectsInfo';

const Projects = (props) => {

        return(
            (props.compRender && props.sectionShow === "projects") &&
            <section 
            className='projectHolder'
            >
                <div 
                className={(props.isMobile) ? "mobileProjectCardHolder" : "projectCardHolder"}>
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