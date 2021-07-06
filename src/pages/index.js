import React, {useContext} from "react";
import VideoWithHeading from "../components/Layout/Blocks/VideoWithHeading";
import PartnerLogos from "../components/Layout/Blocks/PartnerLogos";
import IconsWithDescriptions from "../components/Layout/Blocks/IconsWithDescriptions";
import { ColInSection, Section, H3 } from "../components/Layout";
import Cards from '../components/Cards/Cards';
import { Context } from '../components/RootElement';
import { ThemeContext } from "styled-components";

const IndexPage = ({limit}) => {
  const {presentationsArr} = useContext(Context)
  const theme = useContext(ThemeContext)

  return (
    <>
      <VideoWithHeading />
      <IconsWithDescriptions />
      <Section padding="40px 0 70px" background={theme.radialGradientLight}>
        <ColInSection col={1} padding="0 0 30px">
          <H3 textAlign="center">Latest Presentations</H3>
        </ColInSection>
        {presentationsArr && <Cards presentationsArr={presentationsArr} limit={3} />}
        {/* <Presentations limit={2}/> */}
      </Section>
      <PartnerLogos />
    </>
  );
};

export default IndexPage;
