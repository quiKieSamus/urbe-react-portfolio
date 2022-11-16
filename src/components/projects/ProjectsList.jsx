import React from "react";
import OnePage from "./ProjectCard";

const OnePageList = ({ info }) => {
    return (
        <div>
            {
                info.map((user, i) => {
                    return (
                        <OnePage title={info[i].title} liveVersion={info[i].liveVersion} repoLink={info[i].repoLink} img={info[i].img} />
                    )
                })
            }
        </div>
    )
}

export default OnePageList;