import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Education from "./Components/Education"
import Project from "./Components/Project";
// import Services from "./Components/Services";
import React from 'react'
import Contact from "./Components/Contact";
import Extra from "./Components/Extra";

function Merge() {
  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Technologies />
    <Education />
    <Experience />
    <Project />
    {/* <Services /> */}
    <Extra />
    <Contact />
    </>
  )
}

export default Merge



