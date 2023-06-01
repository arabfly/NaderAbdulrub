import React from "react";
import dogwalker from "../assets/dogwalker.png";
import dogwalkerIphone from "../assets/dogwalkerIphone.png";

const DogWalker = () => {
  return (
    <div className="projectContainer">
      <img className="coindashImg" src={dogwalker} alt="coindash" />
      <img className="coindashIphone" src={dogwalkerIphone} alt="coindash" />
      <div className="projectSpacer">
        <div className="projectHeader">
          <h1 className="projectTitle">Dog Walker</h1>
        </div>
        <p className="projectDescription" style={{ color: "#70bcb8" }}>
          Dog Walking Scheduling Web App
        </p>
        <div className="projectList">
          <li>
            Developed a real-time crypto web application using two APIs for data
            and news updates.
          </li>
          <li>
            Implemented user-friendly filtering for personalized cryptocurrency
            news feeds.
          </li>
          <li>
            Designed an interactive line chart to track historical crypto
            performance.
          </li>
          <li>
            Created a responsive and visually appealing user interface for
            optimal user experience.
          </li>
        </div>
        <div className="projectButtons">
          <button
            className="projectCode"
            style={{ backgroundColor: "#70bcb8", color: "black" }}
          >
            View Code
          </button>
          <button className="projectDemo">Demo</button>
        </div>
      </div>
    </div>
  );
};

export default DogWalker;
