import React from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
      <div className="top">
        <Navbar />
        <Hero />
      </div>
      <main>
        <AboutMe />
      </main>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
