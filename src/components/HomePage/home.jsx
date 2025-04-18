import React, { useEffect, useState, useRef } from "react";

import Spline from "@splinetool/react-spline";

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
  const components = [
    <div key="1">
      <Character1 />
    </div>,
    <div key="3">
      <Character3 />
    </div>,
  ];

  /* useEffect(() => {
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
 */
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
        <Spline scene="https://prod.spline.design/nTebIFs-JJgnfeDN/scene.splinecode" />

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
