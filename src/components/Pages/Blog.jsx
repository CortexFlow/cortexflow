import React from "react";
import "../css/blog.css"; // Importa il file CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assicurati di installare font-awesome
import { faCalendarAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons"; // Importa le icone che utilizzi

import Navbar from "../navbar/navabar";
import Footer from "../Footer/footer";

const Blog = () => {
  return (
    <div className="blog">
      <Navbar />
      <main>
        <section id="blog" classname="blog-container">
          <div className="container section-title" data-aos="fade-up">
            <h2>Latest Insights and Research</h2>
          </div>
          <div className="blog-entry">
            <h3>Understanding IoT Data Streams</h3>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> August 26, 2024
            </p>
            <p>
              This blog explores the intricacies of IoT data streams and how
              CortexBrain processes and analyzes these streams for actionable
              insights.
            </p>
            <a href="blog/understanding-iot-data-streams.html">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
          <div className="blog-entry">
            <h3>Advanced Sensor Simulation Techniques</h3>
            <p>
              <FontAwesomeIcon icon={faCalendarAlt} /> July 15, 2024
            </p>
            <p>
              Discover the latest techniques in simulating complex sensor
              networks using CortexBrain's advanced algorithms.
            </p>
            <a href="blog/advanced-sensor-simulation-techniques.html">
              Read more <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
