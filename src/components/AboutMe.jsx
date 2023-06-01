import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import nader from "../assets/typingKeyboard.png";
import blob from "../assets/blob.png";
import "./AboutMe.css";

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 50px;
`;

const CardContainer = styled.div`
  display: flex;
  white-space: nowrap;
  background-color: var(--secondaryBlack);
  padding: 10px;
  border-radius: 20px;
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Card = styled.div`
  border-radius: 15px;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: #e8e8e8;
  overflow: hidden;
  place-content: center;
  place-items: center;
`;

const Text = styled.p`
  color: white;
  font-size: 1.2rem;
  z-index: 1;
  font-weight: 100;
`;

const CardText = styled.p`
  color: white;
  font-size: 1.2rem;
  z-index: 1;
  font-weight: 100;
`;

const Bold = styled.span`
  font-weight: 900;
  color: var(${(props) => props.color});
`;

const Title = styled.h1`
  font-size: 2rem;
  color: var(--textWhite);
  font-weight: 900;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 20px;
  margin-left: 50px;
  margin-right: 12px;
  position: relative;
`;

const AboutMe = () => {
  const { ref: BoxRef, inView: BoxInView } = useInView({ triggerOnce: true });
  const { ref: ImageRef, inView: ImageInView } = useInView({
    triggerOnce: true,
  });
  const { ref: ListRef1, inView: ListInView1 } = useInView({
    triggerOnce: true,
  });
  const { ref: ListRef2, inView: ListInView2 } = useInView({
    triggerOnce: true,
  });
  const { ref: ListRef3, inView: ListInView3 } = useInView({
    triggerOnce: true,
  });
  const { ref: ListRef4, inView: ListInView4 } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="aboutme">
      <div ref={BoxRef} className="aboutmeTextContainer">
        <div className="aboutmeText">
          <Title>
            It's a pleasure to meet you! here's a something about me...
          </Title>
          <Text>
            Hey there! I'm Nader Abdulrub, a passionate
            <Bold color={"--buttonBlue"}> Frontend Web Developer </Bold>
            committed to continuous growth and learning. Let's create amazing
            things together! Here's what makes me{" "}
            <Bold color={"--accentGreen"}>stand out:</Bold>
          </Text>
          <List className="list">
            <li
              ref={ListRef1}
              className={!ListInView1 ? "hideList" : "showList"}
            >
              Avid learner, always staying updated with the latest technologies.
            </li>
            <li
              ref={ListRef2}
              className={!ListInView2 ? "hideList2" : "showList2"}
            >
              Collaborative spirit, thriving in teamwork with fellow developers.
            </li>
            <li
              ref={ListRef3}
              className={!ListInView3 ? "hideList3" : "showList3"}
            >
              Creative problem solver, tackling complexity with unique
              solutions.
            </li>
            <li
              ref={ListRef4}
              className={!ListInView4 ? "hideList4" : "showList4"}
            >
              Attention to detail, crafting pixel-perfect designs and seamless
              user experiences.
            </li>
          </List>
        </div>
        <div className="showAboutMeImage">
          <img
            src={nader}
            alt="me"
            ref={ImageRef}
            className={!BoxInView ? "myImage" : "showMyImage"}
          />
        </div>
        <img className="blob" src={blob} alt="blob" />
        <img className="blob2" src={blob} alt="blob" />
      </div>
    </div>
  );
};

export default AboutMe;
