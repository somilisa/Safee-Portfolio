import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Education from './Education'
import Projects from './Projects'



function App() {
  return (
    <div className="main-container">
        <Home title="Creating seamless digital journeys..." home={true} />
        <hr/>
        <About/>
        <hr/>
        <Education/>
        <hr />
        <Projects/>
        <hr/>
        <Home title="let’s do amazing work together..." home={false}/>
    </div>
  );
}

export default App;
