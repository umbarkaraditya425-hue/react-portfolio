import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
   const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "dark" : ""}>
      <Navbar />
      <Hero/>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;