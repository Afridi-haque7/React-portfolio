import React, {useState} from 'react';
import Navbar from "./components/navbar/Navbar";
import './App.css';
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Toogle from "./components/toogle/Toogle";
import Carousel from './components/carousel/Carousel';
import Sun from '@iconscout/react-unicons/icons/uil-sun'
import Moon from '@iconscout/react-unicons/icons/uil-moon'
import {themeContext} from './Context';
import {useContext} from 'react';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" 
    style={{
      background : darkMode? 'black' : '',
      color : darkMode? 'white' : '',
    }}
    >
        <Navbar />
        {/* <Toogle/> */}
        <Intro />
        <Services />
        <Carousel />
        <Experience />
        <Works /> 
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
