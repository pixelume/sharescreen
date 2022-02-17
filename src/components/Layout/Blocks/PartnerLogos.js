import React from 'react';
import { Section, ColInSection, H3 } from "../";
// import partnerLogos from "../../../Assets/Images/ngo_logos.png"
import lcaLogo from '../../../images/partner_logos/lca.png'
import sanparksLogo from '../../../images/partner_logos/sanparks.png'
import sapLogo from '../../../images/partner_logos/sap.png'
import spacLogo from '../../../images/partner_logos/spac.png'
import stdBankLogo from '../../../images/partner_logos/Standard-bank-logo.jpg'
import styled from 'styled-components';

const LogoContainer = styled.div`
  height: 100px;
  margin-bottom: 50px;
`

const PartnerLogos = props => {
  const logos = [
    lcaLogo,
    spacLogo,
    sanparksLogo,
    sapLogo,
    stdBankLogo
  ]

  return (
    <Section slanted='3' backgroundColor="warmWhite" padding="0px 0px 40px">
        <ColInSection col={1} paddingDesktop="30px 0px">
          <H3 as="h2" textAlign="center" color="textDark1">
          Founding Patrons
          </H3>
        </ColInSection>
        <ColInSection
          col={1}
          display='flex'
          justifyContent='space-evenly'
          flexFlow='row wrap'
        >
          {logos.map((logo, idx) => (
            <LogoContainer key={`logo-${idx}`}>
              <img key={`logo-${idx}`} src={logo} alt="" style={{display: 'block', height: idx === 3? '70%': ![1, 2].includes(idx)? '90%': '100%', objectFit: 'cover', margin: '20px'}}/>
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