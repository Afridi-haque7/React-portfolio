import React, { useState } from "react";
import "./Projects.css";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import {themeContext} from "../../Context";
import { useContext } from 'react';

const Projects = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="projects" id='Projects'>
      <div className="awesome" style={{textAlign: 'center'}}>
        <span style={{color: darkMode? 'white': ''}}>Recent Projects</span>
        <span>Portfolio</span>
      </div>

      <br />
      <div className="container projects-list">
        <div className="row">
          <div className="col">
            <div className="project-single">
              <img
                src="https://cdn.psdrepo.com/images/2x/apple-music-ios-concept-ui-ux-free-psd-r3.jpg"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>MELOPHILE</h3>
                <p>
                  A ReactJS based Music Player, part of University curriculum.
                </p>
                <a href="/">
                <button type="button p-button" className="btn btn-light">
                  Demo
                </button></a>
              </div>
            </div>

            <div className="project-single">
              <img
                src="https://content.instructables.com/ORIG/F8G/8Z16/JVE7O4L8/F8G8Z16JVE7O4L8.png?auto=webp"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>SNAKE GAME</h3>
                <p>A c++ console snake game, built with pure DSA concept.</p>
                <a href="/"><button className="primary-button">Demo</button></a>
              </div>
            </div>

            <div className="project-single">
              <img
                src="https://gieseanw.files.wordpress.com/2010/02/sudokusolver21.jpg"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>SUDOKU SOLVER</h3>
                <p>A Python based Sudoku solver, built with pygame.</p>
                <a href="/"><button className="primary-button">Demo</button></a>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="project-single">
              <img
                src="https://www.debtfreehappens.com/wp-content/uploads/2017/08/accountant-accounting-adviser-advisor-159804_edit.jpg"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>CALCULATOR</h3>
                <p>A Javascript based Simple Interest Calculator.</p>
                <a href="https://afridi-haque7.github.io/vftvk-Simple-Interest-Calculator/" target="_blank"><button className="primary-button">Demo</button></a>
              </div>
            </div>

            <div className="project-single">
              <img
                src="https://thecolourmoon.com/assets/images/movie-ticket-booking-app-01.png"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>MOVIE-MANIA</h3>
                <p>
                  A UX design project built with prototypes, wireframes, user
                  research
                </p>
                <a href="/"><button className="primary-button">Demo</button></a>
              </div>
            </div>

            <div className="project-single">
              <img
                src="https://inc42.com/wp-content/uploads/2021/11/feature-4.jpg"
                alt=""
                className="p-img"
              />
              <div className="project-content">
                <h3>E-SHOP</h3>
                <p>An Ecommerce Site built with ReactJS and API</p>
                <a href="/"><button className="primary-button">Demo</button></a>
              </div>
            </div>
          </div>
          <div
            className="blur s-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
