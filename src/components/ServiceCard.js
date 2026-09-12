import React from "react";

function ServiceCard({ icon, title, description }) {
  return (
    <article className="service-card">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <button className="service-button">Learn More</button>
    </article>
  );
}

export default ServiceCard;
