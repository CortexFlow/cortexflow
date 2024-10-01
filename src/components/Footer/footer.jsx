import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaGithub, FaDev } from 'react-icons/fa';
import xLogo from "../assets/img/x-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="footer-top">
        <div className="container-footer">
          <div className="row gy-5">
            <div className="col-lg-3 col-sm-6">
              <h1 className="sitename-footer">CortexFlow</h1>
              <div className="social-icons">
                <Link to="#" aria-label="Twitter">
                  <img src={xLogo} alt="X-logo"className="x-logo" />
                </Link>
                <Link to="#" aria-label="Instagram">
                  <FaInstagram />
                </Link>
                <Link to="https://github.com/orgs/CortexFlow" aria-label="GitHub">
                  <FaGithub />
                </Link>
                <Link to="#" aria-label="Dev.to">
                  <FaDev />
                </Link>
              </div>
              <p className="mb-0 copyright">
                &copy; 2024 CortexBrain. All rights reserved.
              </p>
            </div>

            <div className="col-lg-3 col-sm-6">
              <h5 className="footer-col-title mb-0 text-white">About us</h5>
              <div className="footer-line"></div>
              <ul className="footer-list">
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/blob/main/doc.md">
                    Documentation
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="#">Examples</Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="#">Use cases</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="footer-col-title mb-0 text-white">Community</h5>
              <div className="footer-line"></div>
              <ul className="footer-list">
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/issues">
                    Issues
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/pulls">
                    Pull Requests
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/discussions">
                    Discussions
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="#">Newsletter</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-sm-6">
              <h5 className="footer-col-title mb-0 text-white">Info</h5>
              <div className="footer-line"></div>
              <ul className="footer-list">
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/blob/main/LICENSE">
                    Apache 2.0
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/blob/main/CODE_OF_CONDUCT.md">
                    Code of conduct
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/blob/main/SECURITY.md">
                    Security
                  </Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="https://github.com/CortexFlow/CortexBrain/blob/main/CONTRIBUTING.md">
                    Contributing
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
