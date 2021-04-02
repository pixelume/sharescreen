import React from 'react';
import styled from 'styled-components';
import ReactPlayer from "react-player";
import { Section, ColInSection, H1, SubHeading } from "../";
import { Button } from '../../../styles/Buttons';
import { Link } from 'gatsby';

const VideoWithHeading = props => {
  //Logic

  return (
    <Section padding="10px 0px 50px" background="radial-gradient(circle, rgba(255,255,255,1) 33%, rgba(240,248,255,1) 66%)">
        <ColInSection>
          <H1>Bringing experts into the classroom</H1>
          <SubHeading>Interact Live With Leaders In Their Fields</SubHeading>
          {/* <Notification color="offWhite">Description Here</Notification> */}
        </ColInSection>
        <ColInSection maintainAspect shadow>
          <ReactPlayer
            style={{ position: "absolute", top: 0, left: 0 }}
            url="https://www.youtube.com/watch?v=sLxD1kaVjPA"
            light
            width="100%"
            height="100%"
          />
        </ColInSection>
        <ColInSection col={1} textAlign="center" padding="50px">
          <Button
            as={Link}
            to="/register"
            display="inline-block"
            bgColor="fadedGreyBlue"
            textColor="white"
          >
            Register Free
          </Button>
        </ColInSection>
      </Section>
  );
}

export default VideoWithHeading;