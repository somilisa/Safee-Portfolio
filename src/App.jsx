import React from "react";
import "./App.css";
import Hero from "./Hero";
import About from "./About";
import Education from "./Education";
import Projects from "./Projects";

function App() {
  return (
    <div className="main-container">
      <Hero title="Creating seamless digital journeys..." isHero={true} />
      <About />
      <Education />
      <Projects />
      <Hero title="let’s do amazing work together..." isHero={false} />
    </div>
  );
}

export default App;
