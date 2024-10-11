import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../css/error404.css";
import Error404 from "../Characters/Error404";

const ErrorPage = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="row">
          <Error404 />
          <h1 className="typed-text">Sorry we couldn't find that page</h1>
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary" title="Return to Home Page">
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
