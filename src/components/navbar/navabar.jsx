import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/img/github.png";
import Announcements from "../HomePage/Announcements";

const Homepg = () => {
  return (
    <nav class="flex-col w-full shadow-lg fixed z-50">
      {/*announcement tabs*/}
      <div className="w-full mx-auto bg-green-400 max-w-9xl">
        <Announcements />
      </div>
      {/*navbar sotto*/}
      <div className=" px-6 bg-slate-900 ">
        <div
          className="max-w-7xl mx-auto md:px-2 py-4 flex items-center justify-between
          lg:px-4
      sm:px-3"
        >
          {/* Logo e nome */}
          <Link to="/" className="flex items-center space-x-3">
            {/*<img src={logobrain} alt="CortexFlow Logo" className="h-10 w-10" />*/}
            <span className="text-2xl font-medium font-poppins text-white tracking-wide ">
              CortexFlow
            </span>
          </Link>

          {/* Navbar */}
          <ul
            className="font-poppins space-x-8 text-sm font-medium text-gray-300 
          md:hidden sm:hidden lg:flex xs:hidden"
          >
            <li>
              <a
                href="#hero"
                className="hover:text-blue-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#key-features"
                className="hover:text-blue-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-blue-500 transition duration-300"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#get-started"
                className="hover:text-blue-500 transition duration-300"
              >
                Install
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
            <li className="flex">
              <a
                href="https://docs.cortexflow.org/"
                className="hover:text-blue-500 transition duration-300"
              >
                Documentation
              </a>
              <span class="relative flex size-1 mt-2 ml-2">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex size-1 rounded-full bg-sky-500"></span>
              </span>
            </li>
          </ul>

          {/* Get Started button */}
          <Link
            to="https://github.com/CortexFlow/CortexBrain"
            className="font-poppins hidden items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300
            md:hidden sm:hidden lg:inline-flex"
          >
            <img src={githubLogo} alt="GitHub" className="h-4 w-4 mr-2" />
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Homepg;
