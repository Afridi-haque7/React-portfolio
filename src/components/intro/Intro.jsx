import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import human from "../../img/human.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {themeContext} from "../../Context";
import { useContext } from 'react';

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span style={{color: darkMode? 'white': ''}}>Hi! I Am</span>
          <span>Afridi Haque</span>
          <span style={{color: darkMode? 'white': ''}}>
            I am a BE-CSE undergrad, pursuing engineering from Chandigarh
            University. I am a passionate Web Developer, an asthetic UI/UX
            Designer and an ambitious programmer.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
          <button className="button i-button">Hire Me</button>
        </Link>
        <div className="i-icons">
          <a href="https://github.com/Afridi-haque7" target="_blank">
            <img src={Github} alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/afridi-haque-851924203/"
            target="_blank"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a href="https://www.instagram.com/mahi_afridi/" target="_blank">
            <img src={Instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={human} alt="" />
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />
        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "64%" }}
          transition={transition}
          style={{ top: "-4%", left: "74%" }}
        >
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "18rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "18rem", left: "-3rem" }}
        >
          <FloatingDiv image={thumbup} txt1="UI/UX" txt2="Designer" />
        </motion.div>
        <div className="blur" style={{ background: "rgb(238 210 255)" }}>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
