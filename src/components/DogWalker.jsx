import React from "react";
import dogwalker from "../assets/dogwalker.png";
import dogwalkerIphone from "../assets/dogwalkerIphone.png";

const DogWalker = () => {
  const dogwalkerDemo = "https://www.dogwalkerco.com";

  return (
    <div className="projectContainer dogwalker">
      <img className="coindashImg" src={dogwalker} alt="coindash" />
      <img className="coindashIphone" src={dogwalkerIphone} alt="coindash" />
      <div className="projectSpacer">
        <div className="projectHeader">
          <h1 className="projectTitle">DOG WALKER</h1>
        </div>
        <p className="projectDescription" style={{ color: "#70bcb8" }}>
          Dog Walking Scheduling Web App
        </p>
        <div className="projectList">
          <li>
            Developed a one-page web application for a client's dog walking
            service with a user-friendly interface.
          </li>
          <li>
            Implemented a calendar feature for convenient scheduling of dog
            walking appointments.
          </li>
          <li>
            Designed a visually appealing and responsive website layout for
            optimal user experience.
          </li>
          <li>
            Collaborated closely with the client, providing regular updates
            during the development process.
          </li>
        </div>
        <div className="projectButtons">
          <a href={dogwalkerDemo} target="_blank" rel="noreferrer">
            <button className="projectDemo">Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DogWalker;
