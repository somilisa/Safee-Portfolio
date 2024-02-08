import React from "react";
import "./About.scss";
import profile from "./Assets/profile.png";

function About() {
  return (
    <>
      <section>
        <div className="content">
          <h2 className="about-heading">about me</h2>
          <div className="about-content">
            <div className="bio">
              <h3>Adesina Sofiat</h3>
              <p className="bio-text">
                I’m an entry level UI/UX designer with 3 years of self taught
                experience , possessing a keen eye for detail, adept at crafting
                visually compelling designs, and dedicated to solving problems
                and addressing user needs effectively.
              </p>
            </div>
            <div className="profile">
              <div className="profile-picture">
                <img src={profile} alt="profile" id="image" />
              </div>
              <div className="contact-info">
                <button>
                  <a href="mailto: adesinasafee@gmail.com">
                    adesinasafee@gmail.com
                  </a>
                </button>
                <button>
                  <a href="behance.net/Safeeee">behance.net/Safeeee</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default About;
