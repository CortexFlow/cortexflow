import React, { memo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/blog.css";
import HomeButton from "./home_btn";
import blogHeroImg2 from "../../assets/img/blog-hero-img5.webp";
import "../../css/blog-responsive.css";

const BlogHero = () => {
  return (
    <div>
      <section className="blog-hero-container">
        <HomeButton />
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-12">
            <div className="blog-centering">
              <div className="hero-image-container">
                <img
                  src={blogHeroImg2}
                  title="blog banner image"
                  alt="blog-hero-img"
                  className="hero-bg"
                />
                <div className="hero-overlay"></div> {/* Overlay scuro */}
              </div>
              <div className="blog-title">
                <h1>Stories on Innovation, Technology & IoT</h1>
              </div>
              <div className="blog-subtitle">
                <h2>
                  Join our community and discover the latest insights,
                  tutorials, and breakthroughs in tech from the CortexFlow team
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default memo(BlogHero);
