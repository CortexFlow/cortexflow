import React, { useEffect, useContext } from "react";
import Spline from "@splinetool/react-spline";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "aos/dist/aos.css";
import "glightbox/dist/css/glightbox.min.css";
import "../css/homepage.css";
import "../css/deco.css";
import { Helmet } from "react-helmet";

import Footer from "../Footer/footer";
import Navbar from "../navbar/navabar";
import { SplineContext } from "../Context/SplineContext"; // Importa il context

const Homepg = () => {
  const { splineModel } = useContext(SplineContext); // Usa il context per accedere al modello precaricato

  const onSplineLoad = (spline) => {
    console.log("Spline caricato nella homepage");
  };

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
        <div className="deco-wrapper">
          <div className="corner is--left-top"></div>
          <div className="corner is--right-top"></div>
          <div className="corner is--left-bottom"></div>
          <div className="corner is--right-bottom"></div>
        </div>
        <div className="deco-h-lines">
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "250px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "500px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "750px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "1000px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "1250px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "1500px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "1750px" }}
          ></div>
          <div
            className="decorative-line vertical-line"
            style={{ top: "0px", left: "2000px" }}
          ></div>
        </div>
        <div className="deco-plus">
          <div
            className="decorative-plus"
            style={{ top: "200px", left: "500px" }}
          >
            +
          </div>
          <div
            className="decorative-plus-medium"
            style={{ top: "200px", left: "1600px" }}
          >
            +
          </div>

          <div
            className="decorative-plus-back"
            style={{ top: "50px", left: "923px" }}
          >
            +
          </div>
          <div
            className="decorative-plus"
            style={{ top: "650px", left: "802px" }}
          >
            +
          </div>
        </div>

        {/* Wrapper per la spline e il testo */}
        <div className="content-wrapper">
          {/* Testo di prova a sinistra */}
          <div className="left-side-text">
            <h1>CortexFlow</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore ipsa, quibusdam aspernatur odit neque a esse, eveniet,
              soluta vero facilis vel itaque amet. Quae consequatur repudiandae
              ut distinctio ducimus perspiciatis!
            </p>
          </div>

          {/* Componente Spline con il modello precaricato */}
          <Spline
            className="spline-wrapper"
            scene="https://prod.spline.design/nTebIFs-JJgnfeDN/scene.splinecode"
            onLoad={onSplineLoad}
            // Usa il modello precaricato se disponibile
            {...(splineModel && { preloadedmodel: splineModel })}
          />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default Homepg;
