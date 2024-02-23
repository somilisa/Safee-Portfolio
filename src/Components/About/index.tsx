import React from "react";
import "./style.scss";
import profile from "../../Assets/profile.png";
import Button from "../Button";
import email from "../../Assets/Email.svg";
import search from "../../Assets/Search.svg";
function About() {
  return (
    <>
      <section>
        <div className="content">
          <h2 className="about-title">about me</h2>
          <div className="about-content">
            <div className="bio">
              <h3 className="bio-desktop-title">Adesina Sofiat</h3>
              <h3 className="bio-mobile-title">Hi! I’m Sofiat</h3>
              <p className="bio-text">
                I’m an entry level UI/UX designer with 3 years of self taught
                experience , possessing a keen eye for detail, adept at crafting
                visually compelling designs, and dedicated to solving problems
                and addressing user needs effectively.
              </p>
              <div className="mobile-only">
                <Button
                  link="mailto: adesinasafee@gmail.com"
                  text="adesinasafee@gmail.com"
                  icon="mail"
                />

                <Button
                  link="behance.net/Safeeee"
                  text="behance.net/Safeeee"
                  icon="search"
                />
              </div>
            </div>
            <div className="profile">
              <div className="profile-picture">
                <img src={profile} alt="profile" id="image" />
              </div>
              <div className="desktop-only">
                <Button
                  link="mailto: adesinasafee@gmail.com"
                  text="adesinasafee@gmail.com"
                  icon="mail"
                />

                <Button
                  link="behance.net/Safeeee"
                  text="behance.net/Safeeee"
                  icon="search"
                />
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
