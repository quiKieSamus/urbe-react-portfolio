import {FaBars} from "react-icons/fa";

const Navbar = () => {
    let prevScrollPos = window.pageYOffset;
    window.addEventListener("scroll", () => {
        let navBar = document.querySelector('.navbar-container');
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            navBar.style.top = "0";
        } else {
            navBar.style.top = "-130px";
            const navList = document.querySelector(".nav-list-container"); 
            if (navList.classList[1] === "nav-list-active") {
                navList.className = "nav-list-container nav-list";
            } 
        }
        prevScrollPos = currentScrollPos;
    });

    const navBarResponsive = () => {
        const navbar = document.querySelector(".nav-list-container");

        if (navbar.className === "nav-list-container nav-list") {
            navbar.className = "nav-list-container nav-list-active";
        } else {
            navbar.className = "nav-list-container nav-list";
        }
    }

    return (
        <div className="navbar-container">
            <div className="nav-list-container nav-list">
                <a href="#obj" className="nav-link"><div className="bar-item">Me</div></a>
                <a href="#one" className="nav-link"><div className="bar-item">One-pages</div></a>
                <a href="#pro" className="nav-link"><div className="bar-item">Projects</div></a>
                <a href="#find" className="nav-link"><div className="bar-item">Find Me</div></a>
            </div>
            <i onClick={navBarResponsive} className="hamburguer" id="hamb"><FaBars /></i>
        </div>
    );

}

export default Navbar