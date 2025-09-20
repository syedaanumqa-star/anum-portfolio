import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services/>
      <Projects />
      <Contact />

    </div>
  );
}

export default App;
