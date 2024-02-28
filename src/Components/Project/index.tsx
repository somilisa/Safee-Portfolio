import React from "react";
import "./style.scss";

interface Props {
  background: string;
  imageUrl: string;
  title: string;
  description?: string;
  link?: string;
}

function Project({ background, imageUrl, title, description, link }: Props) {
  return (
    <div
      className="project-card"
      style={{
        background,
      }}
    >
      <header className="project-header">
        <h4>
          <a href={link}>{title}</a>
        </h4>
        <p>{description}</p>
      </header>
      <div className="project-image">
        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
}

export default Project;
