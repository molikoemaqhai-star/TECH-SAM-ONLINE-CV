import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">

          <h3>
            TECH-SAM
          </h3>

          <p>
            Modern, reliable and professional technology
            solutions for individuals and businesses.
          </p>

        </div>


        {/* QUICK LINKS */}
        <div className="footer-column">

          <h4>
            QUICK LINKS
          </h4>

          <div className="footer-links">

            <Link to="/">
              Home
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

        </div>


        {/* CONTACT */}
        <div className="footer-contact">

          <h4>
            CONTACT
          </h4>

          <p>
            Phone: +266 58790589
          </p>

          <p>
            Available for technology enquiries
          </p>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Tech-SAM.
          All rights reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;