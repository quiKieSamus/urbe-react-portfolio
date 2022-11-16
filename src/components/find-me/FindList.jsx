import React from "react";
import FindMeCard from "./FindMeCard";


const FindList = ({ networks }) => {
    return (
        <div><h1 className="title-find title">Where to find me</h1>
            <div className="find-list-container">
                {networks.map((user, i) => {
                    return (<FindMeCard icon={networks[i].icon} user={networks[i].user} name={networks[i].name} link={networks[i].link} />);
                })}
            </div>
        </div>
    )
}

export default FindList;