import React from "react"

const Navbar = () => {
    let prevScrollPos = window.scrollY;
    window.onscroll = () => {
        let navBar = document.querySelector('.navbar-container');
        let currentScrollPos = window.scrollY;
        if (prevScrollPos > currentScrollPos) {
            navBar.style.top = "0";
        } else {
            navBar.style.top = "-130px"
        }
        prevScrollPos = currentScrollPos;
    }

    return (
        <div className="navbar-container">
            <a href="#obj" className="nav-link"><div className="bar-item">Me</div></a>
            <a href="#one" className="nav-link"><div className="bar-item">One-pages</div></a>
            <a href="#pro" className="nav-link"><div className="bar-item">Projects</div></a>
            <a href="#find" className="nav-link"><div className="bar-item">Find Me</div></a>
        </div>
    );

}

export default Navbar