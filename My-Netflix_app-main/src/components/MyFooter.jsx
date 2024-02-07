import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="row justify-content-center">
        <div className="col col-6">
          <div className="row">
            <div className="col mb-2"></div>
          </div>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span>Audio and Subtitles</span>
                  </p>
                  <p>
                    <span>Media Center</span>
                  </p>
                  <p>
                    <span>Privacy</span>
                  </p>
                  <p>
                    <span>Contact us</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span>Audio Description</span>
                  </p>
                  <p>
                    <span>Investor Relations</span>
                  </p>
                  <p>
                    <span>Legal Notices</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span>Help Center</span>
                  </p>
                  <p>
                    <span>Jobs</span>
                  </p>
                  <p>
                    <span>Cookie Preferences</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <div className="col footer-links">
                  <p>
                    <span>Gift Cards</span>
                  </p>
                  <p>
                    <span>Terms of Use</span>
                  </p>
                  <p>
                    <span>Corporate Information</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2">
              <button
                type="button"
                className="btn btn-sm footer-button rounded-0 mt-3"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col mb-2 mt-2 copyright">
              © 1997-2023 Netflix, Inc.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
