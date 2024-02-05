import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import Education from './Education'

function App() {
  return (
    <div className="main-container">
        <Home/>
        <hr/>
        <About/>
        <hr/>
        <Education></Education>
        <section></section>
        <section></section>
    </div>
  );
}

export default App;
