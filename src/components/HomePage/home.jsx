import React, { useEffect, useState, useRef } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "../css/homepage.css";
import AOS from "aos"; // Importa AOS
import { Helmet } from "react-helmet";

import githubLogo from "../assets/img/github.png";

import Character1 from "../Characters/HeroCharacter1";
import Character3 from "../Characters/HeroCharacter3";

import Footer from "../Footer/footer";
import Navbar from "../navbar/navabar";
import Typed from "typed.js"; // Importa Typed.js

import Slider from "../Pages/slider";

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
      <Helmet>
        <title>CortexFlow - The Open Source IoT simulation framework</title>
        <meta
          name="description"
          content="A cutting-edge IoT simulation framework and big data analysis tool"
        />
        <meta
          name="keywords"
          content="IoT, data simulation, big data, big data analytics, analysis framework,IoT analysis framework,
           CortexFlow,open source,machine learning,python,metrics,
           metrics for IoT,tensorflow,database for IoT,simulation modelling,agent based modelling,artificial intelligence for IoT"
        />
        <meta name="author" content="CortexFlow" />
        <link rel="canonical" href="https://www.cortexflow.org/" />
      </Helmet>
      <Navbar />
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h1 data-aos="fade-up">
                  CortexFlow: Meet the Open Source IoT simulation framework and
                  Big data analytics Tool
                </h1>
                <p
                  className="typed-paragraph"
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

        <div className="container section-title-about" data-aos="fade-up">
          <h2>Key Features</h2>
          <p>Explore CortexFlow key features</p>
        </div>

        <section id="about" className="about section">
          <div className="container" data-aos="fade-up">
            <div className="row gx-5 gy-5">
              {/* Prima funzionalità */}
              <div
                className="col-lg-6 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="feature-box">
                  <h3>Unified Data Processing for IoT</h3>
                  <p>
                    Seamlessly unify the processing of batch and real-time
                    streaming data. Leverage the power of the Python programming
                    language for flexible and scalable data operations across
                    different systems and diverse situations.
                  </p>
                </div>
              </div>
              {/* Seconda funzionalità */}
              <div
                className="col-lg-6 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="feature-box">
                  <h3>Accelerated Analytics and Simulation</h3>
                  <p>
                    Run highly optimized queries across distributed data,
                    supporting dashboarding, reporting, and ad-hoc analysis. Our
                    engine is ready to outperform traditional data warehouses
                    for swift insights. Run a simulation and simulate an
                    environment faster than anyone.
                  </p>
                </div>
              </div>
              {/* Terza funzionalità */}
              <div
                className="col-lg-6 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="feature-box">
                  <h3>Scalable Data Science</h3>
                  <p>
                    Conduct large-scale Exploratory Data Analysis (EDA) on large
                    datasets without down sampling. Effortlessly explore data
                    trends, data-driven simulations, and relationships across
                    massive datasets using a high-performance analytical
                    environment.
                  </p>
                </div>
              </div>
              {/* Quarta funzionalità */}
              <div
                className="col-lg-6 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="feature-box">
                  <h3>Machine Learning at Scale</h3>
                  <p>
                    Leverage a unified data fabric to seamlessly train and scale
                    machine learning models across decentralized clusters with
                    thousands of nodes. Utilize the data mesh architecture to
                    empower domain teams, enabling agile transitions from
                    prototyping to production with fault-tolerant, distributed
                    ML capabilities.
                  </p>
                </div>
              </div>
              {/* Quinta funzionalità */}
              <div
                className="col-lg-6 d-flex flex-column"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <div className="feature-box">
                  <h3>Containerized Microservices for IoT</h3>
                  <p>
                    Leverage the power of Kubernetes and Docker to deploy,
                    manage, and scale containerized microservices for IoT
                    applications. Seamlessly integrate and orchestrate IoT
                    sensors and edge devices across distributed environments,
                    ensuring resilient, fault-tolerant operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <div className="container section-title-about" data-aos="fade-up">
          <h2>Our Vision</h2>
          <p>Roadmap and vision</p>
        </div>
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="content">
                  <h3>CortexFlow Technology</h3>
                  <h2>
                    Expedita voluptas omnis cupiditate totam eveniet nobis sint
                    iste. Dolores est repellat corrupti reprehenderit.
                  </h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed
                    deserunt et. Inventore et et dolor consequatur itaque ut
                    voluptate sed et. Magnam nam ipsum tenetur suscipit
                    voluptatum nam et est corrupti.
                  </p>
                  <div className="text-center text-lg-start">
                    <Link
                      to="#"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                <img src={roadmap} className="img-fluid" alt="About Us" />
              </div>
            </div>
          </div>
        </section>
         */}
        <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Technology</h2>
            <p>Explore CortexFlow's best features and services</p>
          </div>

          <Slider />
        </section>
        <Footer />
      </main>
    </>
  );
};

export default Homepg;
