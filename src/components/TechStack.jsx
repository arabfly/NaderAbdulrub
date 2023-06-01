import React from "react";
import TechItem from "./TechItem";
import javascript from "../assets/javascript.svg";
import tailwind from "../assets/Tailwindcss.png";
import react from "../assets/react-logo.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import "./TechStack.css";

const TechStack = () => {
  return (
    <div className="stackContainer">
      <div className="stackWrapper">
        <div>
          <h1 className="stackTitle">TECHSTACK</h1>
        </div>
        <div className="stackItems">
          <TechItem
            img={react}
            title="ReactJS"
            description="JavaScript library for building reusable UI components."
          />
          <TechItem
            img={javascript}
            title="JavaScript ES6"
            description="Interactive, versatile language for dynamic web experiences."
          />
          <TechItem
            img={html}
            title="HTML5"
            description=" Markup language for web page structure."
          />
          <TechItem
            img={css}
            title="CSS3"
            description="Styling language for web page presentation."
          />
          <TechItem
            img={tailwind}
            title="Tailwind"
            description="Utility-first CSS framework for rapid web development."
          />
          <TechItem
            img={github}
            title="Github"
            description="Version control and collaboration platform for developers."
          />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
