import React from "react";
import "./style.scss";
import back from "../../Assets/hero-bg.svg";
import back2 from "../../Assets/footer-bg.svg";
import arrows from "../../Assets/arrows.png";

interface Props {
  title: string;
  isHero: boolean;
}

function Hero({ title, isHero }: Props) {
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
              <a
                href="mailto: adesinasafee@gmail.com"
                className="link-underline"
              >
                adesinasafee@gmail.com
              </a>
            </div>
            {!isHero && (
              <ul className="contact-links">
                <li className="arrows-container">
                  <div>
                    <img src={arrows} alt="arrows" />
                  </div>
                </li>
                <li>
                  <a href="behance.net/Safeeee" className="link-underline">
                    behance
                  </a>
                </li>
                <li>
                  <a href="#" className="link-underline">
                    twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://ng.linkedin.com/in/sofiat-adesina-02546a241"
                    className="link-underline"
                  >
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
      {isHero && <hr />}
    </>
  );
}

export default Hero;
