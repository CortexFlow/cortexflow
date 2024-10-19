import React from "react";
import { Link } from "react-router-dom";

import "../../css/blog.css";

import "../../css/blog-responsive.css";
const HomeButton = () => {
  return (
    <>
      {/* Bottone in alto a sinistra */}
      <div className="button-home-container">
        <Link to="/blog">
          <button className="btn-home-blog">Home</button>
        </Link>
      </div>
    </>
  );
};
export default HomeButton;
