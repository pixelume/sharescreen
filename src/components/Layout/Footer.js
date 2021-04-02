import React from 'react';
import styled from "styled-components";
import { ColInSection } from "./Body/ColInSection";
import { StLogo } from "./Header/Title";

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
  <ColInSection col={4} color="greyBlue" colFlex fontSize="0.9em">
    {children}
  </ColInSection>
);

const Footer = (props) => {
  //Logic

  return (
    <FooterContainer padding="20px 5vw" color="skyBlue">
      <FooterColItem>
        <StLogo
          viewBox="0 0 455 243"
          width="100px"
          preserveAspectRatio="xMidYMid meet"
        />
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
          <Li>Privacy Policy</Li>
          <Li>Terms & Conditions</Li>
          <Li>Cookie Preferences</Li>
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
