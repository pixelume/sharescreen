import React, { useContext } from 'react';
import Notification from '../styles/Notification';
import { Section, ColInSection, H3, P, imgStyle, SmallHeading } from '../components/Layout';
import Cards from '../components/Cards/Cards';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
// import { graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';
import data from '../data/tempPresenter.json';
import { Link } from 'gatsby';

const PresenterPageTemp = () => {
  // console.log(data);
  const { radialGradientLight, mediumLight1 } = useContext(ThemeContext);

  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.data.strapiPresenter;
  console.log(pData);
  const profilePic = getImage(pData.profilePicture.localFile);

  const getPresentationColData = () => {
    const presentationsArr = pData.presentations;
    if (presentationsArr) {
      if (presentationsArr && presentationsArr.length > 0) {
        return (
          <Cards
            cardMargin='auto'
            withoutContainer
            presentationsArr={presentationsArr}
            fullName={pData.fullName}
          />
        );
      } else {
        return (
          <Notification color='blue'>
            <h2>No Presentations Yet</h2>
          </Notification>
        );
      }
    }
  };

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf='flex-start'
            alignItems='flex-start'
            background={radialGradientLight}
          >
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presenter
              </H3>
              {pData.profilePicture ? (
                <GatsbyImage
                  image={profilePic}
                  alt={pData.fullName}
                  style={imgStyle}
                />
              ) : (
                <StaticImage
                  src='../images/placeholder_image.png'
                  layout='fixed'
                  width={350}
                  height={233}
                />
              )}
              <H3 margin='1em auto' color='dark1'>
                {pData.title ? pData.title + ' ' : null}
                {pData.fullName}
              </H3>
              {pData.qualifications ? <p>{pData.qualifications.map((qual, idx) => <span key={`qual-${idx}`}>{qual},&nbsp;</span>)}</p>: null}
            </ColInSection>
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                About
              </H3>
              <p><SmallHeading >Role: </SmallHeading><br/>{pData.role}</p>
              <p><SmallHeading >Institution: </SmallHeading><br/>{pData.institution}</p>
              <p><SmallHeading >Country: </SmallHeading><br/>{pData.country}</p>
              {pData.subjectMatter ? <p><SmallHeading style={{fontWeight: 'bold'}}>Subjects: </SmallHeading><br/>{pData.subjectMatter.map((qual, idx) => <span key={`qual-${idx}`}>{qual},&nbsp;</span>)}</p>: null}
              <p><SmallHeading >Presentations: </SmallHeading></p>
              {pData.presentations.map((presentation, idx) => (
                <Link to={`/${presentation.slug}`} key={presentation.name}>
              <div style={{borderRadius: 5, boxSizing: 'border-box', display: 'flex', alignItems: 'center', padding: 5, backgroundColor: mediumLight1 }}>
                <GatsbyImage
                  image={getImage(presentation.image.localFile)}
                  style={{
                    marginRight: 10,
                    height: 100,
                    flexShrink: 0,
                  }}
                  alt={presentation.name}
                />
                <span style={{textAlign: 'center'}}>{presentation.name}</span>
              </div>
                </Link>
              ))}
            </ColInSection>
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Biography
              </H3>
              <ReactMarkdown components={components}>
                {pData.biography}
              </ReactMarkdown>
            </ColInSection>
          </Section>
        </>
      )}
    </>
  );
};

export default PresenterPageTemp;
