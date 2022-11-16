import React from "react";

const FindMeCard = ({ icon, user, name, link }) => {
    return (
        <div className="find-me-card">
            <img src={icon}  alt={name + " of Rubén"} width="50" height="50"/>
            <div>
                {link !== "" ? <a href={link} className="live-link"><p>{user}</p></a> : <p>{user}</p>  }
            </div>
        </div>
    )
}

export default FindMeCard;