
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // =========================
  // HANDLE INPUT CHANGES
  // =========================
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    // Remove the error for the field once the user starts correcting it
    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: "",
    }));

    setSubmitted(false);
  };

  // =========================
  // FORM VALIDATION
  // =========================
  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =========================
  // FORM SUBMISSION
  // =========================
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      setSubmitted(true);

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });

      setErrors({});
    }
  };

  return (
    <div className="contact-page">
      {/* =========================
          CONTACT HEADER
          ========================= */}
      <section className="contact-hero">
        <div className="section-container">
          <p className="section-label">GET IN TOUCH</p>

          <h1 className="section-heading">
            Let&apos;s Work Together
          </h1>

          <p className="section-description">
            Have a project, question, or idea? Send us a message and
            we&apos;ll get back to you.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT FORM
          ========================= */}
      <section className="contact-section">
        <div className="section-container contact-container">

          <div className="contact-intro">
            <p className="section-label">CONTACT TECH-SAM</p>

            <h2 className="section-heading">
              Start a Conversation
            </h2>

            <p>
              Whether you need a modern website, software solution,
              or technical support, Tech-SAM is ready to help.
            </p>

            <Link to="/" className="contact-back-link">
              ← Back to Home
            </Link>
          </div>

          <div className="contact-form-wrapper">
            {submitted && (
              <div className="success-message">
                Your message has been submitted successfully. Thank you
                for contacting Tech-SAM.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>

              {/* FULL NAME */}
              <div className="form-group">
                <label htmlFor="fullName">
                  Full Name
                </label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                />

                {errors.fullName && (
                  <p className="form-error">{errors.fullName}</p>
                )}
              </div>

              {/* EMAIL */}
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                />

                {errors.email && (
                  <p className="form-error">{errors.email}</p>
                )}
              </div>

              {/* PHONE */}
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

                {errors.phone && (
                  <p className="form-error">{errors.phone}</p>
                )}
              </div>

              {/* SUBJECT */}
              <div className="form-group">
                <label htmlFor="subject">
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter the subject"
                />

                {errors.subject && (
                  <p className="form-error">{errors.subject}</p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message"
                  rows="6"
                />

                {errors.message && (
                  <p className="form-error">{errors.message}</p>
                )}
              </div>

              {/* SUBMIT */}
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;