import React from "react";

const TabContent = ({ id, activeProject, children }) => {
  return activeProject === id ? <div>{children}</div> : null;
};

export default TabContent;
