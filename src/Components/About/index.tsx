import React from "react";
import "./style.scss";
import profile from "../../Assets/profile.png";
import Button from "../Button";
function About() {
  return (
    <>
      <section>
        <div className="content">
          <div className="about-content">
            <div className="bio">
              <h3 className="desktop-only">Adesina Sofiat</h3>
              <h3 className="bio-title mobile-only">Hi! I’m Sofiat</h3>
              <p className="bio-text">
                I’m an entry level UI/UX designer with 3 years of self taught
                experience , possessing a keen eye for detail, adept at crafting
                visually compelling designs, and dedicated to solving problems
                and addressing user needs effectively.
              </p>
              <div className="contact-info mobile-only">
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
              <h2 className="about-title">about me</h2>
              <div className="profile-picture">
                <img src={profile} alt="profile" id="image" />
              </div>
              <div className=" contact-info desktop-only">
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
