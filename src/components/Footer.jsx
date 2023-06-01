import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { BsGithub, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Space Grotesk", sans-serif;
  background-color: var(--backgroundColor);
`;

const FooterWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondaryBlack);
`;

const FooterSection = styled.div`
  position: relative;
  width: ${(props) => {
    return props.width;
  }};
  padding: 5% 100px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 1000px) {
    display: none;
  }
`;
const FooterTitle = styled.div`
  font-size: 1rem;
  color: var(${(props) => props.footerColor});
  font-weight: 900;
  margin-bottom: 5px;
`;
const FooterLinks = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 100;
  text-align: center;
  border-bottom: solid 1px transparent;
  width: fit-content;
  transition: ease-in 0.2s;

  &:hover {
    border-bottom: solid 1px white;
    width: fit-content;
    transition: ease-in 0.2s;
  }
`;

const FooterText = styled.p`
  width: fit-content;
  color: white;
  font-size: 1rem;
`;

const MobileFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;
  height: 200px;
`;

const MobileSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 7vw;
`;

const MobileSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 50px;
`;

const MobileLinks = styled.a`
  cursor: pointer;
  font-size: 1rem;
  color: white;
  font-weight: 400;
  border-bottom: solid 1px transparent;
  width: fit-content;
  transition: color 0.3s;
  &:hover {
    color: var(--accentGreen);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <MobileFooter>
          <MobileSection>
            <Link to="nav-title" smooth={true} duration={700}>
              <MobileLinks>Home</MobileLinks>
            </Link>
            <Link to="#" smooth={true} duration={700}>
              <MobileLinks>Projects</MobileLinks>
            </Link>
            <Link to="#" smooth={true} duration={700}>
              <MobileLinks>Team</MobileLinks>
            </Link>
            <Link to="#" smooth={true} duration={700}>
              <MobileLinks>Contact</MobileLinks>
            </Link>
          </MobileSection>
          <MobileSocials>
            <MobileLinks>
              <BsLinkedin size={30} />
            </MobileLinks>
            <MobileLinks>
              <BsGithub size={30} />
            </MobileLinks>
            <MobileLinks>
              <BsTwitter size={30} />
            </MobileLinks>
            <MobileLinks>
              <BsInstagram size={30} />
            </MobileLinks>
          </MobileSocials>
        </MobileFooter>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
