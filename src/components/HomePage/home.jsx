import React, { useEffect, useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "../css/homepage.css";
import AOS from "aos"; // Importa AOS

import githubLogo from "../assets/img/github.png";

import Character1 from "../Characters/HeroCharacter1";
import Character3 from "../Characters/HeroCharacter3";

import Footer from "../Footer/footer";
import Navbar from "../navbar/navabar";
import MetadataHelmet from "./metadata_helmet";
import Typed from "typed.js"; // Importa Typed.js
import KeyFeatures from "./key_features";
import TechFeatures from "./technology_features";

const Homepg = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const typedRef = useRef(null); // Referenza per il DOM di Typed.js

  const components = [
    <div key="1">
      <Character1 />
    </div>,
    <div key="3">
      <Character3 />
    </div>,
  ];

  useEffect(() => {
    // Verifica se l'utente è su un dispositivo mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Intervallo in millisecondi: 10 secondi per desktop, 5 minuti per mobile
    const changeInterval = isMobile ? 5 * 60 * 1000 : 10000;

    const interval = setInterval(() => {
      setCurrentComponent((prev) => (prev + 1) % components.length);
    }, changeInterval);

    return () => clearInterval(interval); // Pulizia dell'intervallo al momento della dismount
  }, [components.length]);
  useEffect(() => {
    AOS.init(); // Inizializza AOS

    // Opzioni per Typed.js
    const options = {
      strings: [
        "A cutting-edge data simulation and big data analysis framework developed by CortexFlow, designed to simplify the simulation and the analysis of IoT devices.",
      ],
      showCursor: false,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: false,
    };

    // Inizializza Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup
    return () => {
      typed.destroy();
    };
  }, []); // [] assicura che venga eseguito solo una volta al caricamento del componente

  return (
    <>
      <MetadataHelmet />
      <Navbar />
      <main className="main">
        <section id="hero" className="mt-30">
          <div className="container">
            <div className="row gy-4">
              <div class="mt-24 col-lg-6 d-flex font-normal flex-column justify-content-center font-poppins">
                <h1
                  class="text-3xl font-medium mt-30 font-poppins
                "
                >
                  CortexFlow: Open-source Container Networking Infrastructure
                  and monitoring Platform
                </h1>
                <p
                  class="mb-3 mt-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  ref={typedRef} // Imposta la referenza qui
                >
                  {/* Typed.js scriverà qui */}
                </p>
                <div
                  className="d-flex flex-column flex-md-row align-items-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <form className="d-flex">
                    <a
                      href="https://github.com/CortexFlow/CortexBrain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary me-2"
                      title="Start contributing right now!"
                    >
                      Contributions
                    </a>

                    {/*                     <input
                      type="email"
                      className="form-control"
                      placeholder="youremail@example.com"
                      required
                    /> */}
                    <button
                      type="button"
                      className="btn btn-info ms-2"
                      onClick={() => setShowInfo(!showInfo)}
                      title="Contributing guidelines"
                    >
                      <i className="bi bi-info-circle"></i>
                    </button>
                  </form>
                  <a
                    href="https://github.com/CortexFlow/CortexBrain"
                    className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
                  >
                    <img
                      src={githubLogo}
                      alt="GitHub Logo"
                      className="github-logo"
                      title="view on Github"
                    />
                    <span>Github</span>
                  </a>
                </div>
                {showInfo && (
                  <div className="alert alert-info mt-3" role="alert">
                    If you would like to contribute on a new feature, we ask you
                    to open a discussion before submitting a Pull Request. This
                    is to ensure that all new features align with the project's
                    goals and to avoid overlapping work or conflicting views.
                    Please initiate a discussion in the GitHub Discussions
                    section where we can collectively review, refine, and
                    approve your idea before you begin implementation. Pull
                    Requests for new features that have not been discussed
                    beforehand may be declined to maintain project coherence and
                    ensure alignment with the broader roadmap. By collaborating
                    in this manner, we can maintain clarity and consistency,
                    ensuring that all contributors are working towards the same
                    objectives. Thank you for your understanding and
                    contributions!
                  </div>
                )}
              </div>
              <div
                className="col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
              >
                {components[currentComponent]}
              </div>
            </div>
          </div>
        </section>

        <KeyFeatures />
        <TechFeatures />
        <Footer />
      </main>
    </>
  );
};

export default Homepg;
