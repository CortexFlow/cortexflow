import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "../css/homepage.css";

import githubLogo from "../assets/img/github.png";

import logobrain from "../assets/img/logo-brain.png";
import comingsoon from "../assets/img/coming-soon2.png";

const Homepg = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img src={logobrain} alt="brain Logo" className="brain-logo" />
          <h1 className="sitename">CortexFlow</h1>
        </Link>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li>
              <Link to="/" className="active">
                Home
                <br />
              </Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="/blog">
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/newsletter">
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                Newsletter
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/">
                {" "}
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                <span>Documentation</span>{" "}
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                {
                  <li>
                    <Link to="/doc">Documentation 1</Link>
                  </li>
                  /* <li className="dropdown">
                  <Link to="#">
                    <span>Deep Documentation</span>{" "}
                    <i className="bi bi-chevron-down toggle-dropdown"></i>
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Documentation 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Documentation 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Documentation 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Documentation 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Documentation 5</Link>
                    </li>
                  </ul>
                </li> */
                }
                {/* <li>
                  <Link to="#">Documentation 2</Link>
                </li>
                <li>
                  <Link to="#">Documentation 3</Link>
                </li>
                <li>
                  <Link to="#">Documentation 4</Link>
                </li> */}
              </ul>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link
          className="btn-getstarted flex-md-shrink-0"
          to="https://github.com/CortexFlow/CortexBrain"
        >
          <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Homepg;
