import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

const App = () => {
  return (
    <>
    <div className="bg-stone-800">
      <Navbar />

      {/* All pages combined */}
      <div id="home">
        <Home />
      </div>

      <div id="about">
        <About />
      </div>

       <div id="Education">
        <Education />
      </div>


      <div id="projects">
        <Projects />
      </div>

      <div id="contact">
        <Contact />
      </div>
        
      <Footer />
      </div>
    </>
  );
};

export default App;