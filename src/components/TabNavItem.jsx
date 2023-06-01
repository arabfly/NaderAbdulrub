import React from "react";
const TabNavItem = ({ id, title, activeProject, setActiveProject }) => {
  const handleClick = () => {
    setActiveProject(id);
  };

  return (
    <div className="tabName">
      <li
        className="tab"
        onClick={handleClick}
        className={activeProject === id ? "active" : ""}
      >
        {title}
      </li>
    </div>
  );
};
export default TabNavItem;
