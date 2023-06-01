import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import TabNavItem from "./TabNavItem";
import Coindash from "./Coindash";
import DogWalker from "./DogWalker";
import WeatherApp from "./WeatherApp";
import "./Projects.css";
import TabContent from "./TabContent";

const ProjectsContainer = styled.div``;

const ProjectsWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 15%;
  margin-right: 15%;
`;

export const Projects = () => {
  const [activeProject, setActiveProject] = useState("tab1");
  const { ref: coindashRef, inView: coindashInView } = useInView();

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <div className="projectsHeader">
          <h1 className="projectsTitle">PROJECTS</h1>
          <div className="projectsButtons">
            <TabNavItem
              title="COINDASH"
              id="tab1"
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
            <TabNavItem
              title="WEATHER APP"
              id="tab2"
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
            <TabNavItem
              title="DOG WALKER"
              id="tab3"
              activeProject={activeProject}
              setActiveProject={setActiveProject}
            />
          </div>
        </div>
      </ProjectsWrapper>
      <div className="projectTabs">
        <TabContent id="tab1" activeProject={activeProject}>
          <Coindash />
        </TabContent>

        <TabContent id="tab2" activeProject={activeProject}>
          <WeatherApp />
        </TabContent>

        <TabContent id="tab3" activeProject={activeProject}>
          <DogWalker />
        </TabContent>
      </div>
    </ProjectsContainer>
  );
};
