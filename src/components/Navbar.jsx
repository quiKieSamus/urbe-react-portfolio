import React from "react"
const Navbar = () => {

    return (
        <div className="navbar-container">
            <a href="#obj" className="nav-link"><div className="bar-item">Objective</div></a>
            <a href="#one" className="nav-link"><div className="bar-item">One-pages</div></a>
            <a href="#pro" className="nav-link"><div className="bar-item">Projects</div></a>
            <a href="#find" className="nav-link"><div className="bar-item">Find Me</div></a>
        </div>
    );

}

export default Navbar