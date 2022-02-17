import React, { useContext, useEffect, createRef } from 'react';
import styled, { ThemeContext } from 'styled-components';
// import ReactPlayer from 'react-player';
import { Section, ColInSection, H1, H3, P } from '../';
import { Button } from '../../../styles/Buttons';
import { Link } from 'gatsby';
import treeSilhouette from '../../../svg/treeSilhouetteCompr.svg';
// import video from '../../../images/aboutVideo.mp4';
import { Context } from '../../RootElement';
import bannerVid from '../../../images/banner_vid_compressed.mp4'

const ref = createRef()

const StTreeSilhoutte = styled(treeSilhouette)`
  position: absolute;
  top: 80px;
  left: 0px;
  opacity: 0.03;
  z-index: -1;
  @media screen and (orientation: landscape) {
    height: calc(100vh - 80px);
  }
  @media screen and (orientation: portait) {
    width: 100%;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  & video {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    z-index: -1;
    @media (min-aspect-ratio: 16/9) {
      /* height = 100 * (9 / 16) = 56.25 */
      height: 56.25vw;
    }
    @media (max-aspect-ratio: 16/9) {
      /* width = 100 / (9 / 16) = 177.777777 */
      width: 177.78vh;
    }
  }
  & iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100vw;
    height: 100vh;
    transform: translate(-50%, -50%);
    z-index: -1;
    @media (min-aspect-ratio: 16/9) {
      /* height = 100 * (9 / 16) = 56.25 */
      height: 56.25vw;
    }
    @media (max-aspect-ratio: 16/9) {
      /* width = 100 / (9 / 16) = 177.777777 */
      width: 177.78vh;
    }
  }
  /* &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      background-color: ${({ theme }) => theme.warmWhite};
      opacity: 0.6;
      z-index: -1;
    } */
`;

const VideoWithHeading = () => {
  const { radialGradientLight, headerHeightBig } = useContext(ThemeContext);
  const { user } = useContext(Context);

  useEffect(() => {
    setTimeout(() => ref.current.play(), 1000)
  }, [])

  return (
    <Section
      // padding='0px'
      // background={radialGradientLight}
      backgroundColor='warmWhite'
      minHeight={`calc(100vh - ${headerHeightBig}px)`}
      style={{ padding: 0, position: 'relative' }}
    >
      <VideoContainer>
        <video ref={ref} loop muted autoplay>
          <source src={bannerVid} type='video/mp4' />
        </video>
        {/* <iframe src="https://www.youtube.com/embed/9jZH_5ZBuQQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&mute=1&playlist=9jZH_5ZBuQQ" frameBorder="0" allowFullScreen></iframe> */}
      </VideoContainer>
      {/* <StTreeSilhoutte /> */}
      <ColInSection
        col={1.2}
        textAlign='center'
        backgroundColor='rgba(255,255,255,0.8)'
        borderRadius='20px'
        padding='0 30px 50px'
      >
        <H1 color='#3e452e'>Bringing experts into the classroom</H1>
        <H3 color='#3e452e'>
          Interact Live With Leaders In The Fields of Nature Conservation
        </H3>
        {/* <Notification color="offWhite">Description Here</Notification> */}
      </ColInSection>
      {/* <ColInSection maintainAspect shadow borderRadius='5px'>
        <iframe
          // width='560'
          // height='315'
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: '100%',
          }}
          src='https://www.youtube.com/embed/dY8yU_DHsaA'
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          // allowFullScreen
        ></iframe>
      </ColInSection> */}
      {!user && (
        <ColInSection col={1} textAlign='center' padding='50px'>
          <Button
            as={Link}
            to='/register'
            display='inline-block'
            bgColor='5'
            style={{ color: 'white', cursor: 'pointer' }}
          >
            Register Free
          </Button>
        </ColInSection>
      )}
    </Section>
  );
};

export default VideoWithHeading;
