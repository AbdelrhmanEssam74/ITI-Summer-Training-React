// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Hero from "./Components/Hero-section/Hero.jsx";
import About from "./Components/about/About.jsx";
import Skills from "./Components/skills/Skills.jsx";
import Portfolio from "./Components/portfolio/Portfolio.jsx";
import Footer from "./Components/footer/Footer.jsx";

function App() {
    return (
        <>
            <Hero/>
            <About/>
            <Skills/>
            <Portfolio/>
            <Footer/>
        </>
    )
}

export default App
