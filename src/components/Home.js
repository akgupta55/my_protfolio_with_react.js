import React from 'react'
import "../Styles/home.css";
import intro_img from "../assets/intro-bg.jpg"
import Navbar from "./Navbar";

const Home = () => {
    return (
        <section id="home">
            <Navbar />
            <div className="mask">
                <img className="intro_img" src={intro_img} alt="Intro_img" />
            </div>
            <div className="info">
                <p>Hi, My name is</p>
                <h1>Ajay Kumar Gupta</h1>
                <h3>I am Web Devloper build things for the web.</h3>
            </div>
        </section>
    )
}

export default Home
