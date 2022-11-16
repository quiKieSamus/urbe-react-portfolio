import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import './App.css'
import { onePages } from "./components/one-page/info";
import OnePageList from "./components/one-page/OnepageList";
import ProjectList from "./components/projects/ProjectList";
import { Projects } from "./components/projects/info";

const App = () => {
    return (
        <div className="core-container">
            <Navbar />
            <Hero />
            <div className="info-container">
                <Objective className="test"/>
            </div>
            <div className="one-pages-container">
                <h1>One-Pages</h1>
                <OnePageList info={onePages}/>
            </div>
            <div className="projects-container">
                <br />
                <h1 className="title">Projects</h1>
                <ProjectList Projects={Projects}/>
                <br />
            </div>
        </div>
    );
}

export default App;