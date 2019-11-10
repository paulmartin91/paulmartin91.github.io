import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            <img src={props.image} alt={props.name}/>
            <div className="projectUsed">{props.used.map(x=><img src={x} alt={"TEMP"} style={{height: "40px", width: "auto"}}></img>)}</div>
        </div>
    )
}

export default ProjectCard