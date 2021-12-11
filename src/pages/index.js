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

// I made a change to this file

const IndexPage = ({ limit }) => {
  const { presentationsArr } = useContext(Context);
  const theme = useContext(ThemeContext);

  return (
    <>
      <VideoWithHeading />
      <Section backgroundColor={theme.nature['dfdfce']}>
      {/* <Section background='radial-gradient(ellipse, rgba(232,255,213,1) 0%, rgba(157,196,124,1) 100%)'> */}
        <ColInSection col={6}>
          <StaticImage
            width={100}
            height={100}
            src='../images/logo-dropshadow-720px.png'
            alt='ShareScreen Logo'
            // style={{overflow: 'visible'}}
            // imgStyle={{filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.25))'}}
          />
        </ColInSection>
        <ColInSection col={6 / 5}>
          <H3 textAlign='center' margin='0px auto 50px'>
            What is ShareScreen Africa?
          </H3>
          <P margin='0 auto 50px'>
            ShareScreen Africa is a Pan-African conservation-based tutorial
            initiative to the benefit of universities, researchers, colleges,
            conservation departments and related training institutions, as well
            as conservation-NGO’s.
          </P>
          <div style={{textAlign: 'right'}}>
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
      <IconsWithDescriptions />
      <Section padding='40px 0 70px' backgroundColor='5' color='warmWhite'>
        <ColInSection col={1} padding='0 0 30px'>
          <H3 textAlign='center'>Latest Presentations</H3>
        </ColInSection>
        {presentationsArr && (
          <Cards presentationsArr={presentationsArr} limit={3} />
        )}
        {/* <Presentations limit={2}/> */}
      </Section>
      <PartnerLogos />
    </>
  );
};

export default IndexPage;
