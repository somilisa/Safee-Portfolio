import React from "react";
import "./Hero.scss";
import back from "./Assets/hero-bg.png";
import back2 from "./Assets/footer-bg.png";
import arrows from "./Assets/arrows.png";

function Hero({ title, isHero }) {
  return (
    <>
      <section>
        {isHero && (
          <div className="back">
            <img src={back} alt="" />
          </div>
        )}
        <div className="content">
          <h2>{title}</h2>
          <div className="contact">
            <div className="contact-intro">
              <p>Adesina Sofiat</p>
              {isHero && <p>Product (UI/UX) Designer</p>}
              <p>adesinasafee@gmail.com</p>
            </div>
            {!isHero && (
              <ul className="contact-links">
                <li>
                  <div className="arrows-container">
                    <img src={arrows} alt="arrows" />
                  </div>
                </li>
                <li>
                  <a href="behance.net/Safeeee">behance</a>
                </li>
                <li>
                  <a href="#">twitter</a>
                </li>
                <li>
                  <a href="https://ng.linkedin.com/in/sofiat-adesina-02546a241">
                    linkedIn
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
        {!isHero && (
          <div className="back_2">
            <img src={back2} alt="" />
          </div>
        )}
      </section>
      <hr />
    </>
  );
}

export default Hero;
