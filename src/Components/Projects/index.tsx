import React from "react";
import "./style.scss";
import Project from "../Project";
import project_1 from "../../Assets/project_1.png";
import project_2 from "../../Assets/project_2.png";
import project_3 from "../../Assets/project_3.png";
import project_4 from "../../Assets/project_4.png";
import project_5 from "../../Assets/project_5.png";
import project_6 from "../../Assets/project_6.png";

function Projects() {
  return (
    <>
      <section>
        <div className="content">
          <h3>projects</h3>
          <div className="projects-wrapper">
            <Project
              background="rgba(252, 252, 252, 0.5)"
              title="Grocery Shop App"
              description="Online app to shop/order groceries"
              imageUrl={project_1}
              link="https://www.behance.net/gallery/184840191/Grocery-shopping-app-UI"
            />

            <Project
              background="rgba(83, 60, 107, 0.61)"
              title="Album Cover"
              description="Design cover for music album"
              imageUrl={project_2}
              link="https://www.behance.net/gallery/184842103/Album-Cover-UI"
            />

            <Project
              background="linear-gradient(245.48deg, rgba(164, 143, 214, 0.5) 3.15%, rgba(25, 162, 176, 0.5) 103.4%)"
              title="Bank web design"
              description="Web design sample for bank site"
              imageUrl={project_3}
              link="https://www.behance.net/gallery/187575239/Web-Design-for-Banking"
            />

            <Project
              background="rgba(248, 248, 248, 0.5)"
              title="Bank app design"
              description="App design sample for bank"
              imageUrl={project_4}
              link="https://www.behance.net/gallery/184841325/Finance-Manager-Application"
            />

            <Project
              background="linear-gradient(121.9deg, rgba(174, 111, 94, 0.5) 39.73%, rgba(196, 165, 148, 0.23) 66.52%)"
              title="Koffeeland"
              description="Online app for coffee"
              imageUrl={project_5}
              link="https://www.behance.net/gallery/184840299/Coffee-Ordering-app-UI"
            />

            <Project
              background="rgba(209, 83, 239, 0.15)"
              title="Payment checkout page"
              imageUrl={project_6}
              link="https://www.behance.net/gallery/184840405/Checkout-page-UI"
            />
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default Projects;
