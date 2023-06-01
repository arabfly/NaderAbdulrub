import React from "react";
import weatherapp from "../assets/weatherapp.png";

const WeatherApp = () => {
  return (
    <div className="projectContainer" style={{ flexDirection: "row-reverse" }}>
      <img className="coindashImg" src={weatherapp} alt="coindash" />
      <div className="projectSpacer">
        <div className="projectHeader">
          <h1 className="projectTitle">TEMPUS</h1>
        </div>
        <p
          className="projectDescription"
          style={{
            color: "#4a4be2",
          }}
        >
          AI-Powered Weather & Style App
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
            style={{
              background: "linear-gradient(-90deg, #ffbe63, #4a4be2)",
              color: "black",
            }}
          >
            View Code
          </button>
          <button className="projectDemo">Demo</button>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
