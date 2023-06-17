import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { Projects } from "./components/Projects";
import TechStack from "./components/TechStack";
import Team from "./components/Team";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Hero />
      </div>
      <main>
        <AboutMe />
        <TechStack />
        <Projects />
        <Team />
        <Contact />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
