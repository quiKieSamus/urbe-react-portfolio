import React from "react";


const ProjectCard = ({title, technologies, overview, link}) => {
    return (
        <div className="card-container">
            <a href={link} className="project-card" target="_blank" rel="noopener noreferrer">
            <div>
                <h3>{title}</h3>
                <hr />
                <p>Used Technologies</p>
                <ul> 
                    {technologies.map((user, i) =>{
                        return(<li>{technologies[i]}</li>);
                    })}
                </ul>
                <p>Project Overview: <br />
                {overview}</p>
            </div>
        </a>
        </div>
    )
}

export default ProjectCard;