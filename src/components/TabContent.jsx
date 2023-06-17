import React from "react";
import { useInView } from "react-intersection-observer";

const TabContent = ({ id, activeProject, children }) => {
  const { ref: coindashRef, inView: coindashInView } = useInView({
    triggerOnce: true,
  });
  return activeProject === id ? (
    <div className={coindashInView ? "showTab" : "hideTab"} ref={coindashRef}>
      {children}
    </div>
  ) : null;
};

export default TabContent;
