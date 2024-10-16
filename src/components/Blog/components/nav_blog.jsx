import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/blog.css"; 

import githubLogo from "../assets/img/github.png";
import logobrain from "../assets/img/logo-brain.png";
import comingsoon from "../assets/img/coming-soon2.png";

const navBlog = () => {
  return (
    <header
      id="header-blog"
      className="header-blog d-flex align-items-center fixed-top"
    >
      <div className="container-fluid-blog container-xl position-relative d-flex align-items-center">
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
              </Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link to="/blog" className="coming-soon-link">
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                Blog
              </Link>
            </li>
            <li>
              <Link to="/newsletter" className="coming-soon-link">
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                Newsletter
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/" className="dropdown-toggle">
                <img
                  src={comingsoon}
                  alt="coming soon"
                  className="comingsoon-flag"
                />
                Documentation
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              </Link>
              <ul>
                <li>
                  <Link to="/doc">Documentation 1</Link>
                </li>
              </ul>
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
export default navBlog;
