import React from "react";

const KeyFeatures = () => {
  return (
    <>
      <div
        class="container section-title-about font-poppins"
        data-aos="fade-up"
      >
        <h2 class="font-poppins">Key Features</h2>
        <p class="font-poppins">Explore CortexFlow key features</p>
      </div>

      <section id="about" className="about section">
        <div className="container" data-aos="fade-up">
          <div className="row gx-5 gy-5">
            {/* Prima funzionalità */}
            <div
              class="col-lg-6 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="font-poppins feature-box">
                <h3 class="font-poppins mb-3 text-xl">
                  Unified Data Processing for IoT
                </h3>
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
              class="col-lg-6 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="font-poppins feature-box">
                <h3 class="font-poppins mb-3 text-xl">
                  Accelerated Analytics and Simulation
                </h3>
                <p>
                  Run highly optimized queries across distributed data,
                  supporting dashboarding, reporting, and ad-hoc analysis. Our
                  engine is ready to outperform traditional data warehouses for
                  swift insights. Run a simulation and simulate an environment
                  faster than anyone.
                </p>
              </div>
            </div>
            {/* Terza funzionalità */}
            <div
              class="col-lg-6 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="font-poppins feature-box">
                <h3 class="font-poppins mb-3 text-xl">Scalable Data Science</h3>
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
              class="col-lg-6 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="font-poppins feature-box">
                <h3 class="font-poppins mb-3 text-xl">
                  Machine Learning at Scale
                </h3>
                <p>
                  Leverage a unified data fabric to seamlessly train and scale
                  machine learning models across decentralized clusters with
                  thousands of nodes. Utilize the data mesh architecture to
                  empower domain teams, enabling agile transitions from
                  prototyping to production with fault-tolerant, distributed ML
                  capabilities.
                </p>
              </div>
            </div>
            {/* Quinta funzionalità */}
            <div
              class="col-lg-6 d-flex flex-column"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div class="font-poppins feature-box">
                <h3 class="font-poppins mb-3 text-xl">
                  Containerized Microservices for IoT
                </h3>
                <p>
                  Leverage the power of Kubernetes and Docker to deploy, manage,
                  and scale containerized microservices for IoT applications.
                  Seamlessly integrate and orchestrate IoT sensors and edge
                  devices across distributed environments, ensuring resilient,
                  fault-tolerant operations.
                </p>
              </div>
            </div>
            {/*chiusura*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyFeatures;
