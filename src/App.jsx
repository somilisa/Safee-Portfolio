import React from "react";
import "./App.css";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Projects from "./Components/Projects/Projects";

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
