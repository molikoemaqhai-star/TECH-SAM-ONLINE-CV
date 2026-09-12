import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/tech-sam-logo.png";

function Header() {
  return (
    <header className="site-header">
      <div className="header-container">

        {/* TECH-SAM LOGO */}
        <Link to="/" className="logo">
          <img
            src={logo}
            alt="TECH-SAM"
            className="logo-image"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="navigation">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </NavLink>

        </nav>

      </div>
    </header>
  );
}

export default Header;