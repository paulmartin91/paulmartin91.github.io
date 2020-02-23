import React from 'react'

const ProjectCard = (props) => {
    return(
        <div className="projectCard">
            {/* <a href={props.url} target="_blank"> */}
                <div className="projectHover">
                    <h1>{props.name}</h1>
                    <p>{props.description}</p>
                    <a href={props.url} target="_blank">Link to github project</a>
                </div>
                <img src={props.image} alt={props.name} />
            {/* </a> */}
            <div 
                className="projectUsed"
            >
                {props.used.map(x=>
                    <img src={x} alt={"TEMP"} style={{height: "40px", width: "auto"}} />
                )}
            </div>
        </div>
    )
}

export default ProjectCard