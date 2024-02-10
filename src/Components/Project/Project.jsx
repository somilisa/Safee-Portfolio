import React from "react";
import "./Project.scss";

function Project({ background, image, title, description, link }) {
  return (
    <div
      className="project-card"
      style={{
        background,
        borderRadius: 35,
      }}
    >
      <header className="project-header">
        <h4>{title}</h4>
        <p>{description}</p>
      </header>
      <div className="project-image">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Project;
