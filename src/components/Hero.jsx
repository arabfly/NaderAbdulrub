import React, { useRef } from "react";
import { Link } from "react-scroll";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "../assets/typingAnimation.json";
import { IoIosArrowDown } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Hero.css";

const Hero = () => {
  const animation = useRef();

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="heroText">
          <h1 className="heroTextAnimation">Hi there!</h1>
          <div className="heroNameText">
            <h1 className="heroTextAnimation">My name is&nbsp;</h1>
            <div className="bold">Nader</div>
          </div>
          <div className="heroButtons">
            <div className="heroProjectsButton">Projects</div>
            <div className="heroResumeButton">
              Resume
              <div>
                <HiOutlineNewspaper size={20} />
              </div>
            </div>
          </div>
        </div>
        <Lottie
          className="animation"
          onComplete={() => {
            console.log("complete");
            animation.current?.goToAndPlay(45, true);
          }}
          loop={false}
          lottieRef={animation}
          animationData={animationData}
        />
      </div>
      <div className="heroBottom">
        <h1 className="heroJob">Frontend Web Developer</h1>
        <div className="heroLocation">
          <GoLocation className="heroJobIcon" size={30} />
          <h1>Bronx,&nbsp;&nbsp;New York</h1>
        </div>
        <div className="heroSocialsContainer">
          <div className="heroSocialsLinkedin">
            <a
              href="https://www.linkedin.com/in/nader-abdulrub-69205a192/"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={30} />
            </a>
          </div>
          <div className="heroSocialsGithub">
            <a href="/" target="_blank" rel="noreferrer">
              <BsGithub size={30} />
            </a>
          </div>
          <div className="heroSocialsInstagram">
            <a href="/" target="_blank" rel="noreferrer">
              <BsInstagram size={30} />
            </a>
          </div>
          <div className="heroSocialsTwitter">
            <a href="/" target="_blank" rel="noreferrer">
              <BsTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
      <div className="heroButton">
        <div className="heroLearnMore">More</div>
        <i className="heroLearnMoreIcon">
          <Link to="aboutmeContainer" smooth={true} duration={1000}>
            <IoIosArrowDown size={25} />
          </Link>
        </i>
      </div>
    </div>
  );
};

export default Hero;
