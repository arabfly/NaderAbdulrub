import React from "react";
import TechItem from "./TechItem";
import javascript from "../assets/javascript.svg";
import tailwind from "../assets/Tailwindcss.png";
import react from "../assets/react-logo.svg";
import github from "../assets/github.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import { useInView } from "react-intersection-observer";
import "./TechStack.css";

const stack = {
  0: {
    img: react,
    title: "ReactJS",
    description: "JavaScript library for building reusable UI components.",
  },
  1: {
    img: javascript,
    title: "JavaScript",
    description: "Interactive, versatile language for dynamic web experiences.",
  },
  2: {
    img: html,
    title: "HTML5",
    description: "Markup language for web page structure.",
  },
  3: {
    img: css,
    title: "CSS3",
    description: "Styling language for web page presentation.",
  },
  4: {
    img: tailwind,
    title: "Tailwind",
    description: "Utility-first CSS framework for rapid web development.",
  },
  5: {
    img: github,
    title: "Github",
    description: "Version control and collaboration platform for developers.",
  },
};

// img, title, description

const TechStack = () => {
  const { ref: StackRef, inView: StackInView } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="stackContainer">
      <div className="stackWrapper" ref={StackRef}>
        <div>
          <h1 className="stackTitle">TECHSTACK</h1>
        </div>
        <div className={StackInView ? "stackItems" : "hidden"}>
          {Object.keys(stack).map((keyName, i) => (
            <TechItem
              key={i}
              img={stack[keyName].img}
              title={stack[keyName].title}
              description={stack[keyName].description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
