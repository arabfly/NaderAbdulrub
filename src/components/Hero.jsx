import { InView, useInView } from "react-intersection-observer";
import { Link } from "react-scroll";
import { IoIosArrowDown } from "react-icons/io";
import { GoLocation } from "react-icons/go";
import { HiOutlineNewspaper } from "react-icons/hi";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsLinkedin, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import styled from "styled-components";
import me from "../assets/nader.png";
import ReactIcon from "../assets/React.svg";
import JavaScriptIcon from "../assets/javascript.svg";
import HtmlIcon from "../assets/html.svg";
import CssIcon from "../assets/css.svg";
import myResume from "../assets/Nader_Abdulrub_Resume.pdf";
import "./Hero.css";

const Card = styled.div`
  background-color: var(${(props) => props.backgroundColor});
  margin-left: ${(props) => props.marginLeft};
  width: 255px;
  height: 186px;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-evenly;
  gap: ${(props) => props.gap};
  overflow: hidden;
  font-family: "Space Grotesk", sans-serif;
`;

const Hero = () => {
  const { ref: NameRef, inView: NameInView } = useInView({ triggerOnce: true });
  const { ref: JobRef, inView: JobInView } = useInView({ triggerOnce: true });
  const { ref: ButtonsRef, inView: ButtonsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: SocialRef, inView: SocialsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: TechStackRef, inView: TechStackInView } = useInView({
    triggerOnce: true,
  });
  const { ref: ProjectsRef, inView: ProjectsInView } = useInView({
    triggerOnce: true,
  });
  const { ref: EducationRef, inView: EducationInView } = useInView({
    triggerOnce: true,
  });
  const { ref: MyImageRef, inView: MyImageInView } = useInView({
    triggerOnce: true,
  });

  const socials = {
    linkedIn: "https://www.linkedin.com/in/nader-abdulrub-69205a192/",
    twitter: "https://twitter.com/NAbdulrub",
    github: "https://github.com/nabdulrub",
    instagram: "https://www.instagram.com/naderabdulrub/",
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <div className="heroText" ref={MyImageRef}>
          <div>
            <div
              className={!NameInView ? "heroNameContainer" : "showFadeIn"}
              ref={NameRef}
            >
              <h1 className="heroTextAnimation">NADER</h1>
              <h1 className="heroTextAnimation">ABDULRUB</h1>
            </div>
            <h1 className={!JobInView ? "heroJobText" : "showJob"} ref={JobRef}>
              Frontend Web Developer
            </h1>
            <div
              ref={ButtonsRef}
              className={!ButtonsInView ? "hideButtons" : "showButtons"}
            >
              <Link to="projects" duration={800} smooth={true}>
                <button type="button" className="heroProjectsButton">
                  Projects
                </button>
              </Link>
              <a href={myResume} download={myResume}>
                <button type="button" className="heroResumeButton">
                  Resume <CgSoftwareDownload className="resumeIcon" size={25} />
                </button>
              </a>
            </div>
          </div>
          <div
            ref={SocialRef}
            className={!SocialsInView ? "heroBottom" : "showHeroBottom"}
          >
            <h1 className="heroJob">Socials</h1>
            <div className="heroSocialsContainer">
              <div className="heroSocialsLinkedin">
                <a href={socials.linkedIn} target="_blank" rel="noreferrer">
                  <BsLinkedin size={30} />
                </a>
              </div>
              <div className="heroSocialsGithub">
                <a href={socials.github} target="_blank" rel="noreferrer">
                  <BsGithub size={30} />
                </a>
              </div>
              <div className="heroSocialsInstagram">
                <a href={socials.instagram} target="_blank" rel="noreferrer">
                  <BsInstagram size={30} />
                </a>
              </div>
              <div className="heroSocialsTwitter">
                <a href={socials.twitter} target="_blank" rel="noreferrer">
                  <BsTwitter size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            !MyImageInView ? "heroMiddleContainer" : "showMiddleContainer"
          }
        >
          <img src={me} alt="me" className="me" />
        </div>
        <div className="heroInfoCardsContainer">
          <div
            ref={TechStackRef}
            className={!TechStackInView ? "hideCard" : "showCard"}
          >
            <Card
              backgroundColor={"--secondaryBlack"}
              gap={"20px"}
              marginLeft={"-50px"}
            >
              <h1 className="CardTitle">Tech Stack</h1>
              <div className="CardIcons">
                <img className="CardIcon" src={ReactIcon} alt="react" />
                <img
                  className="CardIcon"
                  src={JavaScriptIcon}
                  alt="javascript"
                />
                <img className="CardIcon" src={HtmlIcon} alt="html" />
                <img className="CardIcon" src={CssIcon} alt="css" />
              </div>
              <Link to="stackContainer" duration={500} smooth={true}>
                <button className="heroTechButton">VIEW ALL</button>
              </Link>
            </Card>
          </div>
          <div
            ref={ProjectsRef}
            className={!ProjectsInView ? "hideCard" : "projectsShowCard"}
          >
            <Card backgroundColor={"--buttonBlue"} gap={"10px"}>
              <h1 className="CardTitle">Projects</h1>
              <Link
                className="heroProject"
                to="projects"
                duration={500}
                smooth={true}
              >
                <div>
                  <h1 className="heroProjectTitle">COINDASH</h1>
                  <p className="heroProjectDescription">
                    Cryptocurrency Web App
                  </p>
                </div>
              </Link>
              <Link to="projects" duration={500} smooth={true}>
                <button className="heroProjectButton">MORE</button>
              </Link>
            </Card>
          </div>
          <div
            ref={EducationRef}
            className={!EducationInView ? "hideCard" : "educationShowCard"}
          >
            <Card
              backgroundColor={"--secondaryBlack"}
              gap={"10px"}
              marginLeft={"-50px"}
            >
              <h1 className="CardTitle">Education</h1>
              <div>
                <h1 className="heroCollege">MONROE COLLEGE</h1>
                <p className="heroDegree">Bachelor's Degree</p>
                <p className="heroMajor">Computer Information Systems</p>
              </div>
              <a href={socials.linkedIn} target="_blank" rel="noreferrer">
                <button className="heroTechButton">VIEW MORE</button>
              </a>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export const socials = {
  linkedIn: "https://www.linkedin.com/in/nader-abdulrub-69205a192/",
  twitter: "https://twitter.com/NAbdulrub",
  github: "https://github.com/nabdulrub",
  instagram: "https://www.instagram.com/naderabdulrub/",
};

export default Hero;
