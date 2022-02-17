import React, { useContext } from 'react';
import VideoWithHeading from '../components/Layout/Blocks/VideoWithHeading';
import PartnerLogos from '../components/Layout/Blocks/PartnerLogos';
import IconsWithDescriptions from '../components/Layout/Blocks/IconsWithDescriptions';
import { ColInSection, Section, H3, P } from '../components/Layout';
import Cards from '../components/Cards/Cards';
import { Context } from '../components/RootElement';
import { ThemeContext } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';
import { Button } from '../styles/Buttons';
import { Link } from 'gatsby';
import PresentersCards from '../components/presentersCards';
import HowToUse from '../components/Layout/Blocks/HowToUse';

// I made a change to this file

const IndexPage = ({ limit }) => {
  const { presentationsArr, presentersArr } = useContext(Context);
  const theme = useContext(ThemeContext);

  return (
    <>
      <VideoWithHeading />
      <Section backgroundColor={theme.nature['dfdfce']}>
        {/* <Section background='radial-gradient(ellipse, rgba(232,255,213,1) 0%, rgba(157,196,124,1) 100%)'> */}
        <ColInSection col={1} display='flex' justifyContent='center'>
          <StaticImage
            width={100}
            height={100}
            src='../images/logo-dropshadow-720px.png'
            alt='ShareScreen Logo'
            // style={{overflow: 'visible'}}
            // imgStyle={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.25))'}}
          />
        </ColInSection>
        <ColInSection col={1}>
          <H3 textAlign='center' margin='0px auto 50px'>
            What is ShareScreen Africa?
          </H3>
          <P margin='0 auto 50px' textAlign='center'>
            ShareScreen Africa is a Pan-African conservation-based tutorial
            initiative to the benefit of universities, researchers, colleges,
            conservation departments and related training institutions, as well
            as conservation-NGO’s.
          </P>
          <div style={{ textAlign: 'center' }}>
            <Button
              as={Link}
              to='/about'
              display='inline-block'
              bgColor='5'
              style={{ color: 'white', cursor: 'pointer', margin: 'auto' }}
            >
              Learn More...
            </Button>
          </div>
        </ColInSection>
      </Section>
      <HowToUse/>
      {/* <IconsWithDescriptionsiptions /> */}
      <Section padding='40px 0 70px' backgroundColor='#FFF'>
        <ColInSection col={1} padding='0 0 30px'>
          <H3 textAlign='center' color='#515c35'>
            Featured Presenters
          </H3>
          {/* <H3 textAlign='center'>Latest Presentations</H3> */}
        </ColInSection>
        <ColInSection col={1} textAlign='center'>
          {/* <PresentersTable {...{ sortedArray, headings, sortClickHandler }} /> */}
          <PresentersCards arrToDisplay={presentersArr} limit={4} />
        </ColInSection>
        {/* {presentationsArr && (
          <Cards presentationsArr={presentationsArr} limit={3} />
        )} */}
        {/* <Presentations limit={2}/> */}
      </Section>
      <PartnerLogos />
    </>
  );
};

export default IndexPage;
