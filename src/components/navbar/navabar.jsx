import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/img/github.png";

const Homepg = () => {
  return (
    <nav className="px-6 w-full bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 shadow-lg fixed z-50">
      <div
        className="max-w-7xl mx-auto md:px-6 py-4 flex items-center justify-between
      sm:px-3"
      >
        {/* Logo e nome */}
        <Link to="/" className="flex items-center space-x-3">
          {/*<img src={logobrain} alt="CortexFlow Logo" className="h-10 w-10" />*/}
          <span className="text-2xl font-medium font-poppins text-white tracking-wide">
            CortexFlow
          </span>
        </Link>

        {/* Navbar */}
        <ul className="font-poppins sm:flex md:flex space-x-8 text-sm font-medium text-gray-300">
          <li>
            <Link
              to="/"
              className="hover:text-blue-500 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://blog.cortexflow.org/"
              className="hover:text-blue-500 transition duration-300"
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="https://docs.cortexflow.org/"
              className="hover:text-blue-500 transition duration-300"
            >
              Documentation
            </a>
          </li>
        </ul>

        {/* Get Started button */}
        <Link
          to="https://github.com/CortexFlow/CortexBrain"
          className="font-poppins hidden md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300"
        >
          <img src={githubLogo} alt="GitHub" className="h-4 w-4 mr-2" />
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Homepg;
