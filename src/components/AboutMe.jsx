import React from "react";
import styled from "styled-components";
import nader from "../assets/nader.png";
import "./AboutMe.css";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
`;

const Card = styled.div`
  background-color: var(--backgroundColor);
  border-radius: 15px;
  width: 100%;
  height: 250px;
  padding: 20px;
  display: flex;
  position: relative;
  color: #e8e8e8;
  overflow: hidden;
  place-content: center;
  place-items: center;
  border: solid 2px;
  border-color: var(
    ${(props) => (props.rotationColor ? "--accentGreen" : "--buttonBlue")}
  );
`;

const CardContainer = styled.div`
  background-color: var(--secondaryBlack);
  padding: 30px;
  border-radius: 20px;
`;

const Text = styled.p`
  color: white;
  font-size: 1.2rem;
  z-index: 1;
`;

const AboutMe = () => {
  return (
    <div className="aboutmeContainer">
      <div className="aboutme">
        <div className="aboutmeTextContainer">
          <div className="aboutmeText">
            <h1 className="aboutmeTitle">ABOUT ME</h1>
            <Text>
              I'm Nader Abdulrub, a Frontend Web Developer who is passionate
              about continuous learning and growth. I'm always eager to acquire
              new skills and expand my expertise. With a focus on staying
              up-to-date with the latest technologies and trends, I embrace
              every project as an opportunity to learn and push my boundaries.
              Collaboration is key to my approach, as I believe in the power of
              teamwork and learning from fellow developers. If you're seeking a
              dedicated Frontend Web Developer who is enthusiastic about
              constant advancement, I'm ready to join your team and create
              amazing things together!
            </Text>
          </div>
          <div className="aboutmeImage">
            <img src={nader} alt="me" />
          </div>
        </div>
        <CardWrapper>
          <CardContainer>
            {/*Green*/}
            <Card rotationColor={true}>
              <Text>
                Contrary to popular belief Contrary to popular belief Contrary
                to popular belief Contrary to popular belief
              </Text>
            </Card>
          </CardContainer>
          <CardContainer>
            {/*Blue*/}
            <Card>
              <Text>
                Contrary to popular belief Contrary to popular belief Contrary
                to popular belief Contrary to popular belief
              </Text>
            </Card>
          </CardContainer>
          <CardContainer>
            {/*Green*/}
            <Card rotationColor={true}>
              <Text>
                Contrary to popular belief Contrary to popular belief Contrary
                to popular belief Contrary to popular belief
              </Text>
            </Card>
          </CardContainer>
          <CardContainer>
            {/*Blue*/}
            <Card>
              <Text>
                Contrary to popular belief Contrary to popular belief Contrary
                to popular belief Contrary to popular belief
              </Text>
            </Card>
          </CardContainer>
        </CardWrapper>
      </div>
    </div>
  );
};

export default AboutMe;
