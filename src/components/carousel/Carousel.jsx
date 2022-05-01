import React from 'react'
import './Carousel.css'
import {FaReact} from 'react-icons/fa'
import {FaCss3} from 'react-icons/fa'
import {FaHtml5} from 'react-icons/fa'
import {FaBootstrap} from 'react-icons/fa'
import {SiCplusplus} from 'react-icons/si'
import {FaFigma} from 'react-icons/fa'
import {SiAdobexd} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {FaJsSquare} from 'react-icons/fa'
import {themeContext} from "../../Context";
import { useContext } from 'react';



const Carousel = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="carousel" id="Skills">
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>Technologies I Use</span>
        </div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        <div className="car-parent">
            {/* <h1 className="position-absolute top-0 start-0 end-0 text-center">Technologies I Use</h1> */}
            <div className="gallery">
                <span style={{'--i': 1}}>
                    <FaReact color="cyan"/>
                </span>
                <span style={{'--i': 2}}>
                    <FaCss3 color="orangered"/>
                </span>
                <span style={{'--i': 3}}>
                    <FaHtml5 color="orange"/>
                </span>
                <span style={{'--i': 4}}>
                    <FaBootstrap color="purple" />
                </span>
                <span style={{'--i': 5}}>
                    <FaJsSquare color="yellow" />
                </span>
                <span style={{'--i': 6}}>
                    <SiCplusplus  color="blue" />
                </span>
                <span style={{'--i': 7}}>
                    <FaFigma color="pink"/>
                </span>
                <span style={{'--i': 8}}>
                    <SiAdobexd color="red" />
                </span>
                <span style={{'--i': 9}}>
                    <FaNodeJs color='green'/>
                </span>
                <span style={{'--i': 10}}>
                    <SiTailwindcss color="navy"/>
                </span>
            </div>
        </div>
        
    </div>
  )
}

export default Carousel