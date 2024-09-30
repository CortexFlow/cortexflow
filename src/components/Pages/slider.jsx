import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/homepage.css";
import dataAnalytics from "../assets/img/data-analytics.svg";
import simulateImg from "../assets/img/data-science.jpg";
import manageImg from "../assets/img/manage-img.png";
import libraries from "../assets/img/libraries.png";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 slide su schermi grandi
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    responsive: [
      {
        breakpoint: 1024, // Schermi medi
        settings: {
          slidesToShow: 1, // Mostra 2 slide
        },
      },
      {
        breakpoint: 768, // Schermi piccoli/tablet
        settings: {
          slidesToShow: 1, // Mostra 1 slide
        },
      },
      {
        breakpoint: 480, // Schermi molto piccoli
        settings: {
          slidesToShow: 1, // Mostra 1 slide
        },
      },
    ],
  };

  return (
    <div className="container slider-container">
      <Slider {...settings}>
        <div className="card">
          <img src={dataAnalytics} className="img-fluid" alt="Value 1" />
          <h3>Seamless Integration with Popular Frameworks</h3>
          <p>
            CortexFlow integrates effortlessly with industry-leading protocols,
            for example MQTT and CoAP and will feature LoRaWan, LPWAN, XMPP
            protocols, allowing you to scale data processing and analytics
            across thousands of machines. Whether you're working with batch or
            streaming data, creating a complex simulation involving multiple
            sensors, doing advanced machine learning, or handling with SQL
            analytics, CortexFlow’s modular architecture supports diverse
            protocols to ensure a seamless, scalable, and fault-tolerant
            ecosystem for all your IoT and data-driven applications.
          </p>
        </div>

        <div className="card">
          <img src={libraries} className="img-fluid" alt="Value 2" />
          <h3>Support for multiple libraries</h3>
          <p>
            CortexFlow has just one key concept in mind at its core: the ability
            to offer a concrete support to multiple libraries across a range of
            programming languages. Mainly written in Python will sooner support
            Rust,C,Scala,SQL and Go programming languages. We are currently
            designing the core structure in a way that will make it fully
            compatible and broadly integrated with the existing tools and
            frameworks, regardless of your preferred language. For more
            specialized use cases, CortexFlow offers the flexibility to build
            custom libraries, tailored to your unique requirements. Our platform
            ensures that both pre-built and custom solutions can scale
            effortlessly within our distributed architecture, empowering you to
            optimize performance and innovation across diverse projects.
          </p>
        </div>

        <div className="card">
          <img src={manageImg} className="img-fluid" alt="Value 3" />
          <h3>Unified Data Fabric and Mesh Architectures</h3>
          <p>
            CortexFlow will introduce comprehensive support for the creation and
            management of data fabric and data mesh architectures, allowing for
            scalable, decentralized data management. The data fabric will
            seamlessly connect disparate data sources, providing a unified,
            real-time view of structured and unstructured data across cloud,
            on-premise, and edge environments. With the data mesh approach,
            CortexFlow will empower domain teams by decentralizing data
            ownership and enabling domain-specific pipelines and services. This
            distributed architecture will allow machine learning workflows to
            operate independently across customizable clusters, facilitating
            cross-domain data sharing while maintaining data sovereignty and
            governance. ML models will be able to be trained and deployed across
            multiple nodes without the bottlenecks of centralized data control,
            ensuring scalability and resilience in production environments.
          </p>
        </div>

        <div className="card">
          <img src={simulateImg} className="img-fluid" alt="Value 4" />
          <h3>Fault-Tolerant Machine Learning Workflows</h3>
          <p>
            CortexFlow will deliver enhanced scalability for machine learning
            models through a distributed infrastructure optimized for
            performance and reliability. By leveraging hardware acceleration and
            custom optimization software, the platform will enable seamless
            transitions from local prototyping to production-scale deployments
            across fault-tolerant clusters. Machine learning workflows will
            benefit from dynamic resource allocation, allowing models to scale
            horizontally across multiple nodes, with automatic recovery and load
            balancing in case of hardware failures. The framework will also
            support customized training environments, where algorithms will be
            optimized based on the underlying hardware, including GPUs, TPUs,
            and FPGAs, ensuring efficient use of computational resources at
            scale.
          </p>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
