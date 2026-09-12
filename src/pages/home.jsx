import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home-page">

      {/* =========================
          HERO
          ========================= */}
      <section className="hero-section">
        <div className="hero-content">

          <p className="hero-label">
            WELCOME TO TECH-SAM SOLUTIONS
          </p>

          <h1>
            Smart Technology.
            <br />
            <span>Powerful Solutions.</span>
          </h1>

          <p className="hero-intro">
            Tech-SAM provides modern, reliable and professional
            technology solutions designed to help individuals and
            businesses work smarter, improve productivity and achieve
            their digital goals. We combine practical technology,
            creative thinking and dependable support to deliver
            solutions that are simple, effective and built around
            our clients' needs.
          </p>

          <div className="hero-buttons">
            <Link
              to="/contact"
              className="btn btn-primary"
            >
              GET STARTED
            </Link>
          </div>

        </div>
      </section>

      {/* =========================
          ABOUT
          ========================= */}
      <section className="about-section">
        <div className="section-container">

          <p className="section-label">
            ABOUT TECH-SAM
          </p>

          <h2 className="section-heading">
            Technology designed around your needs.
          </h2>

          <p className="about-text">
            Tech-SAM is a technology solutions company focused on
            providing modern, reliable and practical digital solutions.
            We help individuals and businesses use technology more
            effectively by combining professional support, creative
            thinking and dependable solutions.
          </p>

          <p className="about-text">
            Our goal is to make technology simple, accessible and
            useful while helping our clients improve productivity and
            achieve their digital goals.
          </p>

        </div>
      </section>

      {/* =========================
          SERVICES
          ========================= */}
      <section className="services-section">
        <div className="section-container">

          <p className="section-label">
            WHAT WE OFFER
          </p>

          <h2 className="section-heading">
            Our Technology Solutions
          </h2>

          <p className="services-intro">
            We provide practical technology services designed to
            support individuals and businesses in a changing digital
            environment.
          </p>

          <div className="services-grid">

            <ServiceCard
              icon="💻"
              title="Web Development"
              description="Modern and responsive websites designed to provide professional digital experiences."
            />

            <ServiceCard
              icon="⚙️"
              title="Technology Support"
              description="Reliable technical assistance to help users solve technology problems and work efficiently."
            />

            <ServiceCard
              icon="📊"
              title="Digital Solutions"
              description="Practical digital solutions that help businesses improve productivity and achieve their goals."
            />

          </div>

        </div>
      </section>

      {/* =========================
          FOOTER
          ========================= */}
      <Footer />

    </div>
  );
}

export default Home;