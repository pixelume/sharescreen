import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import { H3 } from '../components/Layout';
import ElephantSvg from '../svg/elephant_banner_optimised.svg';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const MainContainer = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: flex-start;
  background: radial-gradient(
    circle,
    transparent 33%,
    rgba(204, 209, 174, 0.3) 66%
  );
`;

const VideoContainer = styled.div`
  width: 100%;
  height: calc(0.5625 * 100vw);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.41);
  border-radius: 5px;
  overflow: hidden;
  z-index: 0;
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 432px;
  }
`;

const StFooter = styled.footer`
  width: 100%;
  min-height: 50px;
  background-color: ${({ theme }) => theme.dark1};
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: -2;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1em;
  color: white;
  padding: 7px;
  box-sizing: border-box;
  border-radius: 50% 50% 0% 0% / 15px 15px 0% 0%;
`;

const FooterItem = styled.div`
  text-align: center;
  @media only screen and (orientation: portrait) {
    width: 100%;
    margin: 5px auto;
    font-size: 0.9em;
  }
`;

const Button = styled.button`
  border-radius: 15px;
  background-color: ${({ theme }) => theme.medium1};
  color: white;
  padding: 15px;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  @media only screen and (orientation: portrait) {
    font-size: 0.8em;
    padding: 8px;
  }
`;

const ComingSoonPage = (props) => {
  //Logic

  return (
    <>
      <ElephantSvg
        style={{
          position: 'absolute',
          left: 0,
          bottom: 45,
          width: '100%',
          opacity: 0.1,
          zIndex: -1,
        }}
      />
      <MainContainer>
        <div
          style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'center',
            width: '100%',
            margin: '25px auto 25px',
          }}
        >
          <StaticImage
            src='../images/web_logo.png'
            layout='fixed'
            width={150}
            height={150}
          />
          <H3
            textAlign='center'
            size={1.5}
            margin='auto 20'
            // color="logoText"
            // style={{ textTransform: "uppercase" }}
          >
            Coming Soon...
          </H3>
        </div>
        <VideoContainer>
          <iframe
            // width='560'
            // height='315'
            style={{width: '100%', height: '100%'}}
            src='https://www.youtube.com/embed/vulhF15fTDk'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            // allowFullScreen
          ></iframe>
          {/* <video controls style={{ width: "100%" }}>
          <source src={video} type="video/mp4" />
        </video> */}
        </VideoContainer>
        <div style={{ width: '100%', textAlign: 'center', marginTop: 20 }}>
          <Button as='a' href='https://forms.gle/viCre5oPAt2Q7Gbm6'>
            Register as a Presenter
          </Button>
        </div>
        <StFooter>
          <FooterItem>
            In association with the Leadership for Consevation in Africa
          </FooterItem>
          <FooterItem>
            <AiOutlinePhone style={{ verticalAlign: 'middle' }} />
            &nbsp;&nbsp;+27 12 460 5323
          </FooterItem>
          <FooterItem>
            <AiOutlineMail style={{ verticalAlign: 'middle' }} />
            &nbsp;&nbsp;admin@lcafrica.org
          </FooterItem>
        </StFooter>
      </MainContainer>
    </>
  );
};

export default ComingSoonPage;
