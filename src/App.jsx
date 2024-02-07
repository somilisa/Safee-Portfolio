import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Education from './Education'
import Projects from './Projects'

function App() {
  return (
    <div className="main-container">
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Education/>
        <hr />
        <Projects/>
        <hr>
        <section></section>
    </div>
  );
}

export default App;
