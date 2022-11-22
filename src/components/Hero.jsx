import React from "react";

const Hero = () => {
    return (
        <div className="hero-container">
            <h1>Hello, I'm <span className="hero-name">Rubén</span><br /> a Software Engineer</h1>
            
            <div className="hero-btn-container">
                <a href="#obj"><button className="hero-btn">Know about me</button></a>
            </div>
        </div>
    );
}

export default Hero;