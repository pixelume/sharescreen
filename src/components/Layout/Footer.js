import React from 'react';
import styled from "styled-components";
import { ColInSection } from "./Body/ColInSection";
// import { StLogo } from "./Header/Title";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const FooterContainer = styled.footer`
  position: absolute;
  box-sizing: border-box;
  top: 100%;
  left: 0px;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
  justify-content: space-between;
  width: 100vw;
  background-color: ${({ color, theme }) => theme[color] || color || 'LightBlue'};
  padding: ${(props) => props.padding || "20px 0px 0px 0px"};
`;

const Ul = styled.ul`
  @media only screen and (orientation: portrait) {
    min-width: 80%;
  }
`;

const Li = styled.li`
  list-style: none;
`;

const FooterColItem = ({ children }) => (
  <ColInSection col={4} color="textDark1" colFlex fontSize="0.9em">
    {children}
  </ColInSection>
);

const Footer = (props) => {
  //Logic

  return (
    <FooterContainer padding="20px 5vw" color="medium1">
      <FooterColItem>
        <StaticImage width={70} height={70} src="../../images/web_logo.png" alt="Logo"/>
        {/* <StLogo
          viewBox="0 0 455 243"
          width="100px"
          preserveAspectRatio="xMidYMid meet"
        /> */}
        <Ul>
          <Li>Share Screen ©&nbsp;{new Date().getFullYear()}</Li>
          <Li>Developed by WebJam Digital</Li>
        </Ul>
      </FooterColItem>
      <FooterColItem>
        <h4>ABOUT</h4>
        <Ul>
          <Li>About Us</Li>
          <Li>Sustainability Ethos</Li>
          <Li>Team</Li>
          <Li>Pillars</Li>
        </Ul>
      </FooterColItem>
      <FooterColItem>
        <h4>LEGAL</h4>
        <Ul>
          <Li><Link to="/privacy">Privacy Policy</Link></Li>
          <Li><Link to="/terms-conditions">Terms & Conditions</Link></Li>
          <Li><Link to="/cookie-policies">Cookie Preferences</Link></Li>
        </Ul>
      </FooterColItem>
      <FooterColItem>
        <h4>HELP</h4>
        <Ul>
          <Li>Contact Us</Li>
          <Li>FAQ</Li>
        </Ul>
      </FooterColItem>
    </FooterContainer>
  );
};

export { Footer };
