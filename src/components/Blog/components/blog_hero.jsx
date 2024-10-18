import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/blog.css";
import HomeButton from "./home_btn";
import blogHeroImg from "../../assets/img/blog-hero-img.png";

const BlogHero = () => {
  return (
    <div>
      {/* Verifica che il nome del componente sia corretto */}
      <section className="blog-hero-container">
      <HomeButton />

        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Contenuto centrato */}
            <div className="blog-centering">
              <img src={blogHeroImg} alt="blog-hero-img" className="hero-bg" />
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

export default BlogHero;
