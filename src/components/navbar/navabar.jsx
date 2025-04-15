import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "../css/homepage.css";

import githubLogo from "../assets/img/github.png";

import logobrain from "../assets/img/logo-brain.png";

const Homepg = () => {
  return (
    <header id="header" className="header d-flex align-items-center fixed-top">
      <div className="container-fluid container-xl position-relative d-flex align-items-center">
        <Link to="/" className="logo d-flex align-items-center me-auto">
          <img
            src={logobrain}
            alt="brain Logo"
            title="CortexFlow logo"
            className="brain-logo"
          />
          <h2 className="sitename">CortexFlow</h2>
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
              <a href="https://blog.cortexflow.org/">
                {" "}
                {/* this must be a href */} <span>Blog</span>{" "}
                <i className="bi toggle-dropdown"></i>
              </a>
            </li>
            <li className="dropdown">
              <a href="/doc/">
                {" "}
                {/* this must be a href */} <span>Documentation</span>{" "}
                <i className="bi toggle-dropdown"></i>
              </a>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>

        <Link
          className="btn-getstarted flex-md-shrink-0"
          to="https://github.com/CortexFlow/CortexBrain"
          title="Get started with CortexFlow"
        >
          <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
          Get Started
        </Link>
      </div>
    </header>
  );
};

export default Homepg;
