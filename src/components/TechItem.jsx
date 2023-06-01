import React from "react";

const TechItem = ({ img, title, description }) => {
  return (
    <div className="techContainer">
      <div>
        <img src={img} alt="tech" className="techImg" />
      </div>
      <div className="techText">
        <h1 className="techTitle">{title}</h1>
        <p className="techDescription">{description}</p>
      </div>
    </div>
  );
};

export default TechItem;
