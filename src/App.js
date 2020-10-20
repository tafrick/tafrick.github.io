import React from 'react';
import './App.css';

import NavBar from './components/NavBar/navbar';

import AboutMe from './components/AboutMe/aboutMe';

import Skills from './components/Skills/skills';
import Projects from './components/Projects/projects';
import Education from './components/Education/education';
import Contact from './components/Contact/contact';

import HeadShot from './assets/images/LinkedInProfile.jpeg';
import Arrow from './components/UI/Arrow/Arrow';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header" id="section1">
        <div className="Background-wrapper">
          {/* <p>backgroundwraper</p> */}
        </div>
        <img src={HeadShot} alt="headDrop" />
        <h1>Tyler Frick</h1>
        <p>Web Developer / Grad Student</p>
        <p>About</p>
        <AboutMe />
        <Arrow Linked="section2" />
      </header>
      <div id="section2">
        <Skills />
      </div>
      <div id="section3" >
        <Projects />
      </div>
      <div id="section4">
        <Education />
      </div>
      <footer id="section5">
        <Contact />
      </footer>
    </div>
  );
}

export default App;
