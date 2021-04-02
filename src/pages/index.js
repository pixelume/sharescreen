import React, {useContext} from "react";
import VideoWithHeading from "../components/Layout/Blocks/VideoWithHeading";
import PartnerLogos from "../components/Layout/Blocks/PartnerLogos";
import IconsWithDescriptions from "../components/Layout/Blocks/IconsWithDescriptions";
import { ColInSection, Section, SubHeading } from "../components/Layout";
import Cards from '../components/Cards/Cards';
import { Context } from '../components/RootElement';

const IndexPage = ({limit}) => {
  const {presentationsArr} = useContext(Context)

  return (
    <>
      <VideoWithHeading />
      <IconsWithDescriptions />
      <Section padding="40px 0 70px">
        <ColInSection col={1} padding="0 0 30px">
          <SubHeading textAlign="center">Latest Presentations</SubHeading>
        </ColInSection>
        {presentationsArr && <Cards presentationsArr={presentationsArr} limit={3} />}
        {/* <Presentations limit={2}/> */}
      </Section>
      <PartnerLogos />
    </>
  );
};

export default IndexPage;
