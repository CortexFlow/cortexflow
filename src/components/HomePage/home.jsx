import React, { useEffect, useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import AOS from "aos"; // Importa AOS

import githubLogo from "../assets/img/github.png";

import Character1 from "../Characters/HeroCharacter1";
import "../css/homepage.css";

import Footer from "../Footer/footer";
import Navbar from "../navbar/navabar";
import MetadataHelmet from "./metadata_helmet";
import Typed from "typed.js"; // Importa Typed.js
import KeyFeatures from "./key_features";
import TechFeatures from "./technology_features";
import FeatureShow from "./FeatureShow";
import HandsOn from "./hands_on";

const Homepg = () => {
  const [currentComponent, setCurrentComponent] = useState(0);
  const [showInfo, setShowInfo] = useState(false);
  const typedRef = useRef(null); // Referenza per il DOM di Typed.js

  const components = [
    <div key="1" class="lg:flex md:hidden sm:hidden xs:hidden">
      <Character1 />
    </div>,
    <div key="1" class="lg:flex md:hidden sm:hidden xs:hidden">
      <Character1 />
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
        "Your end-end-to end platform for creating and managing lightweight, intelligent and efficient service mesh architectures, to seamlessly connect cloud and edge devices",
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
        <section id="hero" className="mt-15">
          <div
            className="container max-h-[1000px] mb-[10px] mx-auto 
          lg:mt-8 lg:p-3.5 
          lg:max-w-6xl md:max-w-3xl
          md:mt-4 md:px-6"
          >
            <div className="row  py-10 ">
              <div class="mt-12 col-lg-6 d-flex font-normal flex-column justify-content-center font-poppins">
                <h1
                  class="mb-3 lg:text-7xl font-medium mt-30 font-poppins bg-gradient-to-r
                   from-blue-700 via-yellow-500 to-orange-600 inline-block 
                   text-transparent bg-clip-text
                   lg:mx-0
                   md:max-w-[600px] md:text-7xl md:mx-0
                   sm:max-w-[400px] sm:text-3xl 
                   xs:max-w-[600px] xs:text-7xl xs:mt-6 xs:mx-auto
                "
                >
                  CortexFlow
                </h1>
                <h1
                  class="lg:text-4xl font-medium py-3 font-poppins bg-gradient-to-r
                   from-blue-700 via-yellow-500 to-orange-600 inline-block 
                   text-transparent bg-clip-text
                   lg:text-left
                   md:max-w-[600px] md:text-4xl md:text-left
                   xs:max-w-[600px] xs:text-xl xs:text-center
                "
                >
                  Open-source Container Networking Infrastructure and Monitoring
                  Platform
                </h1>
                <p
                  class="mb-3 mt-10 font-poppins text-base xs:mx-auto xs:text-center xs:mt-5 lg:text-left md:text-left lg:mx-0 md:mx-0"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  ref={typedRef} // Imposta la referenza qui
                >
                  {/* Typed.js scriverà qui */}
                </p>
                <div
                  className="mt-5 flex align-items-center xs:mx-auto md:mx-0 lg:mx-0
                  "
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <form className="d-flex">
                    <a
                      href="https://github.com/CortexFlow/CortexBrain"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-poppins md:inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow transition duration-300"
                      title="Start contributing right now!"
                    >
                      Contribute
                    </a>

                    <button
                      type="button"
                      className="btn btn-info ms-2 "
                      onClick={() => setShowInfo(!showInfo)}
                      title="Contributing guidelines"
                    >
                      <i className="bi bi-info-circle"></i>
                    </button>
                  </form>
                  <a
                    href="https://github.com/CortexFlow/CortexBrain"
                    className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-2 ms-md-4 mt-md-0 hover:text-blue-500 
                    "
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
                  <div
                    className="font-poppins max-w-[600px] alert alert-info mt-3"
                    role="alert"
                  >
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
                class="mt-5 col-lg-6 order-1 order-lg-2 hero-img"
                data-aos="zoom-out lg:flex md:hidden sm:hidden xs:hidden"
              >
                {components[currentComponent]}
              </div>
            </div>
          </div>
        </section>
        <section id="key-features">
          <KeyFeatures />
        </section>
        <section id="features" class="xs:pt-[20px]">
          <FeatureShow />
          <TechFeatures />
        </section>
        <section id="get-started" class="xs:pt-[30px]">
          <HandsOn />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepg;
