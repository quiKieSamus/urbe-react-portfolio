import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectList = ({ Projects }) => {
    return (
        Projects.map((user, i) => {
            return (<ProjectCard title={Projects[i].title} technologies={Projects[i].technologies} overview={Projects[i].overview} link={Projects[i].link} />)
        })
    )

}

export default ProjectList;