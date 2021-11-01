import React from 'react';
import styled from 'styled-components';
import { Section, ColInSection, H1 } from '../';
import { HiOutlineSearch } from 'react-icons/hi';
// import { IoBookmarkOutline } from "react-icons/io5";
// import { GiVideoConference } from "react-icons/gi";
import { MdOndemandVideo } from 'react-icons/md';
import { FaRegHandshake } from 'react-icons/fa';
import { VscFeedback } from 'react-icons/vsc';
import { Link } from 'gatsby';

const ColoredP = styled.p`
  color: ${({ theme }) => theme.dark1};
`;
const IconContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  padding: 20px;
  /* width: 250px; */
  height: 250px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme[3]};
  color: ${({ theme }) => theme[1]};
  filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.25));
`;

const IconsWithDescriptions = () => {
  //Logic
  //borderRadius="80% 80% 0px 0px/40%"
  return (
    <Section
      padding='50px 0px'
      alignItems='stretch'
      backgroundColor='warmWhite'
      color='warmWhite'
    >
      <ColInSection
        col={4}
        flexCol
        textAlign='center'
        padding='2em 2em'
        lineHeight='2em'
        // backgroundColor="white"
      >
        <IconContainer>
          <Link to='/presenters'>
            <H1 as='span'>
              <HiOutlineSearch />
            </H1>
            <ColoredP>Browse or search through all our speakers</ColoredP>
          </Link>
        </IconContainer>
      </ColInSection>
      <ColInSection
        col={4}
        flexCol
        textAlign='center'
        padding='2em 2em'
        lineHeight='2em'
        // backgroundColor="white"
      >
        <IconContainer>
          <Link to='/presentations'>
            <H1 as='span'>
              <MdOndemandVideo />
            </H1>
            <ColoredP>Browse or search through our video catalogue</ColoredP>
          </Link>
        </IconContainer>
      </ColInSection>
      <ColInSection
        col={4}
        flexCol
        textAlign='center'
        padding='2em 2em'
        lineHeight='2em'
        // backgroundColor="white"
      >
        <IconContainer>
          <Link to='/presenters'>
            <H1 as='span'>
              <FaRegHandshake />
            </H1>
            <ColoredP>Request to be linked to a presenter</ColoredP>
          </Link>
        </IconContainer>
      </ColInSection>
      {/* <ColInSection
        col={4}
        flexCol
        textAlign="center"
        padding="2em 2em"
        lineHeight="2em"
        // backgroundColor="white"
        borderRadius="50%"
      >
        <H1 as="span">
          <VscFeedback />
        </H1>
        <ColoredP>Provide feedback of your experience</ColoredP>
      </ColInSection> */}
    </Section>
  );
};

export default IconsWithDescriptions;
