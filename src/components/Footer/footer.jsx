import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import { FaMedium, FaGithub, FaDev } from 'react-icons/fa';
import xLogo from "../assets/img/x-logo.png";

const Footer = () => {
  return (
    <footer className="bg-dark">
      <div className="footer-top">
        <div className="container-footer">
          <div className="row gy-5">
            <div className="col-lg-3 col-sm-6">
              <h2 className="sitename-footer">CortexFlow</h2>
              <div className="social-icons">
                <Link to="https://x.com/FlowCortex" aria-label="Twitter/X" title="Vist CortexFlow twitter page">
                  <img src={xLogo} alt="X-logo"className="x-logo" />
                </Link>
                <Link to="https://medium.com/@lorenzobradanini964" aria-label="Medium" title="Vist CortexFlow Medium page">
                  <FaMedium />
                </Link>
                <Link to="https://github.com/CortexFlow" aria-label="GitHub" title="Vist CortexFlow Github page">
                  <FaGithub />
                </Link>
                <Link to="https://dev.to/cortexflow" aria-label="Dev.to" title="Vist CortexFlow Dev.To page">
                  <FaDev />
                </Link>
              </div>
              <p className="mb-0 copyright">
                &copy; 2024 CortexFlow. All rights reserved.
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
                  <Link to="/examples">Examples</Link>
                </li>
                <li className="footer-list-objects">
                  <Link to="/use-cases">Use cases</Link>
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
                  <Link to="/newsletter">Newsletter</Link>
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
