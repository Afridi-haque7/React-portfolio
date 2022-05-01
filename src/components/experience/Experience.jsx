import React from 'react'
import './Experience.css';
import {themeContext} from "../../Context";
import { useContext } from 'react';


const Experience = () => {
  return (
    <div className="experience" id="Experience">
      <div className="achievement">
          <div className="circle">0</div>
          <span>years of</span>
          <span>Experience</span>
      </div>
      <div className="achievement">
          <div className="circle">+10</div>
          <span>completed</span>
          <span>projects</span>
      </div>
      <div className="achievement">
          <div className="circle">+8</div>
          <span>online course</span>
          <span>certificates</span>
      </div>
    </div>
  )
}

export default Experience
