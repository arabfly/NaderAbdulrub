import React from "react";
import coindash from "../assets/coindash.png";
import coindashIphone from "../assets/coindashIphone.png";
import coindashLogo from "../assets/coindashLogo.png";
import "./Coindash.css";

const coindashDemo =
  "https://647a9b8d5a670c2678c52c86--remarkable-bonbon-8f2dca.netlify.app/";
const coindashCode = "https://github.com/nabdulrub/coindash";

const Coindash = () => {
  return (
    <div className="projectContainer">
      <img className="coindashImg" src={coindash} alt="coindash" />
      <img
        className="coindashIphone"
        src={coindashIphone}
        alt="coindashIphone"
      />
      <div className="projectSpacer">
        <div className="projectHeader">
          <h1 className="projectTitle">COINDASH</h1>
        </div>
        <p className="projectDescription">Cryptocurrency Web App</p>
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
          <a href={coindashCode} target="_blank" rel="noreferrer">
            <button className="projectCode">View Code</button>
          </a>
          <a href={coindashDemo} target="_blank" rel="noreferrer">
            <button className="projectDemo">Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Coindash;
