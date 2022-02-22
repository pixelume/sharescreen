import React, { useContext } from 'react';
import styled from 'styled-components';
import { ColInSection } from './Body/ColInSection';
// import { StLogo } from "./Header/Title";
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import { LayoutContext } from './Layout';

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
  background-color: ${({ bgColor, theme }) => theme[bgColor] || bgColor};
  padding: ${(props) => props.padding || '20px 0px 0px 0px'};
  color: ${({theme, color}) => theme[color] || color}
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
  <ColInSection col={4} color='textDark1' colFlex fontSize='0.9em'>
    {children}
  </ColInSection>
);

const Footer = () => {
  const { setSubmitContact } = useContext(LayoutContext);

  return (
    <FooterContainer padding='20px 5vw' color='warmWhite' bgColor='#84986B'>
      <FooterColItem>
        <StaticImage
          width={70}
          height={70}
          src='../../images/web_logo.png'
          alt='Logo'
          style={{overflow: 'visible'}}
          imgStyle={{filter: 'drop-shadow(1px 1px 5px rgba(0,0,0,0.75))'}}
        />
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
        <h4>IMPORTANT LINKS</h4>
        <Ul>
          <Li><a href="https://drive.google.com/file/d/13-_miKVsW4o2WL7WVS1WBcIGpjcCkYMA/view?usp=sharing">Guidelines for hosts</a></Li>
          <Li><a href="https://drive.google.com/file/d/1c-zItX5MSnNcWpRBkgklGIOM6u5rupfN/view?usp=sharing">Guidelines for presenters</a></Li>
          <Li><a href="https://drive.google.com/file/d/1CoXWPuy8o4J0QNw5NUIqTScTkBG5shRV/view?usp=sharing">Guidelines for students</a></Li>
        </Ul>
      </FooterColItem>
      <FooterColItem>
        <h4>LEGAL</h4>
        <Ul>
          <Li>
            <Link to='/privacy'>Privacy Policy</Link>
          </Li>
          <Li>
            <Link to='/terms-conditions'>Terms & Conditions</Link>
          </Li>
          <Li>
            <Link to='/cookie-policies'>Cookie Preferences</Link>
          </Li>
        </Ul>
      </FooterColItem>
      <FooterColItem>
        <h4>ABOUT</h4>
        <Ul>
          <Li><Link to='/about' >About Us</Link></Li>
          <Li
            role='button'
            style={{ cursor: 'pointer' }}
            onClick={() => setSubmitContact(true)}
          >
            Contact Us
          </Li>
          <Li>FAQ</Li>
        </Ul>
      </FooterColItem>
    </FooterContainer>
  );
};

export { Footer };
