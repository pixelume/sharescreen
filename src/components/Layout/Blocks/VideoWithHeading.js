import React, {useContext} from 'react';
import styled, { ThemeContext } from 'styled-components';
import ReactPlayer from "react-player";
import { Section, ColInSection, H1, H3 } from "../";
import { Button } from '../../../styles/Buttons';
import { Link } from 'gatsby';
import treeSilhouette from '../../../svg/treeSilhouetteCompr.svg';
import video from '../../../images/aboutVideo.mp4';

const StTreeSilhoutte = styled(treeSilhouette)`
  position: absolute;
  top: 80px;
  left: 0px;
  opacity: 0.03;
  @media screen and (orientation: landscape) {
    height: calc(100vh - 80px);
  }
  @media screen and (orientation: portait) {
    width: 100%;
  }
  `

const VideoWithHeading = props => {
  const theme = useContext(ThemeContext)
  //Logic

  return (
    <Section padding="10px 0px 50px" background={theme.radialGradientLight}>
    <StTreeSilhoutte/>
        <ColInSection>
          <H1>Bringing experts into the classroom</H1>
          <H3>Interact Live With Leaders In Their Fields</H3>
          {/* <Notification color="offWhite">Description Here</Notification> */}
        </ColInSection>
        <ColInSection maintainAspect shadow borderRadius='5px'>
        <video
          controls
          style={{ position: "absolute", top: 0, left: 0, width: '100%' }}
        >
          <source src={video} type="video/mp4"/>
        </video>
          {/* <ReactPlayer
            style={{ position: "absolute", top: 0, left: 0 }}
            url="https://www.youtube.com/watch?v=sLxD1kaVjPA"
            light
            width="100%"
            height="100%"
          /> */}
        </ColInSection>
        <ColInSection col={1} textAlign="center" padding="50px">
          <Button
            as={Link}
            to="/register"
            display="inline-block"
            bgColor="dark1"
            textColor="white"
          >
            Register Free
          </Button>
        </ColInSection>
      </Section>
  );
}

export default VideoWithHeading;