import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            <img src={props.image}/>
            <div className="projectUsed">{props.used.map(x=><img src={x} style={{height: "40px", width: "auto"}}></img>)}</div>
        </div>
    )
}

export default ProjectCard