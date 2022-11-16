import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Objective from "./components/Objective";
import './App.css'
import { onePages } from "./components/one-page/info";
import OnePageList from "./components/one-page/OnepageList";

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
        </div>
    );
}

export default App;