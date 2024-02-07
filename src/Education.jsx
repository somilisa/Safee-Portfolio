import React from "react";
import "./Education.scss";
import back from './Assets/back.png'

function Education() {
  return (
    <section>
      <div className="education-back">
        <img src={back} alt="" />
      </div>
      <div className="content education-content">
        <div className="education">
          <h3>education</h3>
          <ul>
            <li>
              <span>2010</span> Excel College
            </li>
            <li>
              <span>2018</span> Obafemi Awolowo University
            </li>
          </ul>
        </div>
        <div className="skills">
          <h3>skills</h3>
          <ul>
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>Product design</li>
            <li>Web design</li>
            <li>Information architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Education;
