import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Objective from "./components/about-me/Objective";
import './App.css'
import { onePages } from "./components/one-page/info";
import OnePageList from "./components/one-page/OnepageList";
import { Projects } from "./components/projects/info";
import ProjectList from "./components/projects/ProjectList";
import { networks } from "./components/find-me/info";
import FindList from "./components/find-me/FindList";


const App = () => {
    return (
        <div className="core-container">
            <Navbar />
            <Hero />
            <div className="info-container">
                <Objective className="test"/>
            </div>
            <div id="one" className="one-pages-container">
                <h1>One-Pages <small><small>or landing pages</small></small></h1>
                <OnePageList info={onePages}/>
            </div>
            <div id="pro" className="projects-container">
                <br />
                <h1 className="title">Projects</h1>
                <ProjectList Projects={Projects}/>
                <br />
            </div>
            <div id="find" className="find-me-container">
                <FindList networks={networks}/>
            </div>
        </div>
    );
}

export default App;