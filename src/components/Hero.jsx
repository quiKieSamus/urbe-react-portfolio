import React from "react";

const Hero = () => {
    return (
        <div className="hero-container">
            <h1>Hello, I'm <span className="hero-name">Rubén</span></h1>
            <div>a Software Engineer</div>
            <div>
                <a href="#obj"><button className="hero-btn">Know about me</button></a>
            </div>
        </div>
    );
}

export default Hero;