import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../../css/blog.css"

import blogHeroImg from "../../assets/img/blog-hero-img.png"; // L'immagine di sfondo dell'hero


const BlogHero = () => {
  return (
    <div>
      <navBlog />
      {/* Sezione Hero */}
      <section className="blog-hero-container">
        <img src={blogHeroImg} alt="blog-hero-img" className="hero-bg" />
        <div className="blog-title">
          <h1>Stories on Innovation, Technology & IoT</h1>
        </div>
        <div className="blog-subtitle">
          <h2>
            Join our community and discover the latest insights, tutorials, and
            breakthroughs in tech from the CortexFlow team
          </h2>
        </div>
      </section>
    </div>
  );
};

export default BlogHero;
