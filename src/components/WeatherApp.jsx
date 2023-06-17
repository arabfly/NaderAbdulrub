import React from "react";
import weatherapp from "../assets/weatherapp.png";

const WeatherApp = () => {
  return (
    <div className="projectContainer">
      <img className="coindashImg" src={weatherapp} alt="coindash" />
      <div className="projectSpacer">
        <div className="projectHeader">
          <h1 className="projectTitle">TEMPUS - ( COMING SOON )</h1>
        </div>
        <p
          className="projectDescription"
          style={{
            color: "#4a4be2",
          }}
        >
          Weather Web App
        </p>
        <div className="projectList">
          <li>
            Created a web application that allows users to easily search and
            access current weather information for any city worldwide.
          </li>
          <li>
            Integrated a weather API to retrieve accurate and up-to-date weather
            data for the searched locations.
          </li>
          <li>
            Implemented geolocation functionality to automatically detect and
            display the weather in the user's current location.
          </li>
          <li>
            Designed an intuitive and visually appealing user interface for
            seamless user experience.
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
