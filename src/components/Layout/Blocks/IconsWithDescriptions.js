import React from "react";
import styled from 'styled-components';
import { Section, ColInSection, H1 } from "../";
import { HiOutlineSearch } from "react-icons/hi";
import { IoBookmarkOutline } from "react-icons/io5";
import { GiVideoConference } from "react-icons/gi";
import { VscFeedback } from "react-icons/vsc";

const ColoredP = styled.p`
  color: ${({theme}) => theme.fadedGreyBlue};
`

const IconsWithDescriptions = () => {
  //Logic

  return (
    <Section padding="100px 0px" alignItems="stretch" backgroundColor="AliceBlue" borderRadius="80% 80% 0px 0px/40%">
      <ColInSection
        col={4}
        flexCol
        textAlign="center"
        padding="2em 2em"
        lineHeight="2em"
        // backgroundColor="white"
        borderRadius="50%"
      >
        <H1 as="span">
          <HiOutlineSearch />
        </H1>
        <ColoredP>Browse or search our catalogue of topics, talks & speakers</ColoredP>
      </ColInSection>
      <ColInSection
        col={4}
        flexCol
        textAlign="center"
        padding="2em 2em"
        lineHeight="2em"
        // backgroundColor="white"
        borderRadius="50%"
      >
        <H1 as="span">
          <IoBookmarkOutline />
        </H1>
        <ColoredP>Request to book a speaker for a live presentation</ColoredP>
      </ColInSection>
      <ColInSection
        col={4}
        flexCol
        textAlign="center"
        padding="2em 2em"
        lineHeight="2em"
        // backgroundColor="white"
        borderRadius="50%"
      >
        <H1 as="span">
          <GiVideoConference />
        </H1>
        <ColoredP>Participate in live talk and questions via video conference</ColoredP>
      </ColInSection>
      <ColInSection
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
      </ColInSection>
    </Section>
  );
};

export default IconsWithDescriptions;
