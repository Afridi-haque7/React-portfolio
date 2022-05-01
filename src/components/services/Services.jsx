import React from 'react'
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../card/Card";
import Resume from "./resume.pdf";
import {motion} from "framer-motion"
import {themeContext} from "../../Context";
import { useContext } from 'react';


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = {duration: 2, type: 'spring'}

  return (
    <div className="services" id="Services">
      <div className="awesome">
        <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
        <span>Services</span>
        <span style={{color: darkMode? 'white': ''}}>
          I provide services for Front-end and Backend Web <br/> Development, Software development and UX designs.
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
      </div>
      


      <div className="cards">
        <motion.div
        initial={{left:'25rem' }}
        whileInView={{left: '16rem'}}
        transition={{transition}}
        style={{left:"25rem"}}>
            <Card
            emoji = {HeartEmoji}
            heading={'Design'}
            detail={"Figma, Sketch, Adobe XD, Photoshop"}
            />
        </motion.div>


        <motion.div 
        initial={{left:'20rem' }}
        whileInView={{left: '4rem'}}
        transition={{transition}}
        style={{top:"12rem" ,left:"-4rem"}}>
            <Card
            emoji = {Glasses}
            heading={'Web dev'}
            detail={"HTML, CSS3, JavaScript, ReactJS"}
            />
        </motion.div>

        <motion.div 
        initial={{left:'-25%' }}
        whileInView={{left: '18rem'}}
        transition={{transition}}
        style={{top:"19rem" ,left:"25rem"}}>
            <Card
            emoji = {Humble}
            heading={'Progammer'}
            detail={"C, C++, DSA, CP"}
            />
        </motion.div>
        <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
      </div>
    </div>
  )
}

export default Services
