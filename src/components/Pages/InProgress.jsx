import React from "react";
import { Link } from "react-router-dom";

// Styling
import "../css/error404.css";
import HammeringAnim from "../Characters/HammeringAnim";

const WorkInProgress = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="row">
          <HammeringAnim />
          <h1 className="typed-text">Work in progress...</h1> {/* Aggiunta classe typed-text */}
          
          <div className="error-actions">
            <Link to="/" className="btn btn-primary">
              Return to Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkInProgress;
