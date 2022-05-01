import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {themeContext} from "../../Context";
import { useContext } from 'react';




const Works = () => {
  //const transition={duration:2, }
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="works" id="Works">
      <div className="w-left">
        <div className="awesome">
          <span style={{color: darkMode? 'white': ''}}>Work </span>
          <span>Experience</span>
          <span style={{color: darkMode? 'white': ''}}>
            Didn't get any chance to prove my worth yet.
            <br />
            Inetrested in my portfolio?
          </span>

          <Link spy={true} to="Contact" smooth={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>

          {/* <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div> */}
        </motion.div>
        {/* <span>
          <FaLaptopCode color="white" id="w-logo"/>
        </span> */}
      </div>
    </div>
  );
};

export default Works;
