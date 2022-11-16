import React from "react";

const OnePage = ({title, liveVersion, repoLink, img}) => {
    return(
        <div className="one-page">
            <a href={liveVersion} className="live-link">{title}</a>
            <hr />
            <a href={repoLink} className="repo-link">Github repo</a><br />
            <img src={img} className="one-page-img" alt="one-page" />
        </div>
    )
}

export default OnePage;