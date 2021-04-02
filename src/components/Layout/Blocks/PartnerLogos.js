import React from 'react';
import { Section, ColInSection, SubHeading } from "../";
// import partnerLogos from "../../../Assets/Images/ngo_logos.png"
import lcaLogo from '../../../images/partner_logos/lca.png'
import sanparksLogo from '../../../images/partner_logos/sanparks.png'
import sapLogo from '../../../images/partner_logos/sap.png'
import spacLogo from '../../../images/partner_logos/spac.png'
import stdBankLogo from '../../../images/partner_logos/stdbank.png'
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 80px;
  padding-bottom: 50px;
`

const PartnerLogos = props => {
  const logos = [
    lcaLogo,
    sanparksLogo,
    sapLogo,
    spacLogo,
    stdBankLogo
  ]

  return (
    <Section slanted='4' backgroundColor="aliceblue" padding="0px 0px 40px">
        <ColInSection col={1} paddingDesktop="30px 0px">
          <SubHeading as="h2" textAlign="center" color="greyBlue">
            Our Partners
          </SubHeading>
        </ColInSection>
        <ColInSection
          col={1}
          display='flex'
          justifyContent='space-between'
          flexFlow='row wrap'
        >
          {logos.map((logo, idx) => (
            <LogoContainer key={`logo-${idx}`}>
              <img key={`logo-${idx}`} src={logo} alt="" style={{display: 'block', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', margin: '20px'}}/>
            </LogoContainer>
          ))}
          {/* <img
            src={partnerLogos}
            alt=""
            style={{ width: "100%", objectFit: "contain" }}
          /> */}
          {/* <Notification color="orange">
            <h1>Home Page Content Here</h1>
          </Notification> */}
        </ColInSection>
      </Section>
  );
}

export default PartnerLogos;