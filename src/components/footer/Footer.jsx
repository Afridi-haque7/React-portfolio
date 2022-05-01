import React from 'react'
import Wave from "../../img/wave.png";
import './Footer.css';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import LinkedIn from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{width:"100%"}}/>
      <div className="f-content">
            <span>afridi.hq97@gmail.com</span>
            <div className="f-icons">
              <a href="https://twitter.com/AfridiHaque7"
              target="_blank">
                <Twitter color="white" size="3rem" />
              </a>
              <a href="https://www.linkedin.com/in/afridi-haque-851924203/"
              target="_blank">
              <LinkedIn color="white" size="3rem" />

              </a>
              <a href="https://github.com/Afridi-haque7"
              target="_blank">
              <Github color="white" size="3rem" />

              </a>
            </div>
      </div>
    </div>
  )
}

export default Footer
