import React, {useContext} from 'react';
import Notification from '../styles/Notification';
import { Section, ColInSection, H3, P, imgStyle } from '../components/Layout';
import Cards from '../components/Cards/Cards';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import { ThemeContext } from 'styled-components';


const SinglePresenter = ({ data }) => {
  const {radialGradientLight} = useContext(ThemeContext)

  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.strapiPresenter;
  const profilePic = getImage(pData.profilePicture.localFile);

  const getPresentationColData = () => {
    const presentationsArr = data.strapiPresenter.presentations;
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
              <H3 margin='1.5em auto' color='dark1'>
                {pData.title ? pData.title + ' ' : null}
                {pData.fullName}
              </H3>
              <h3>{pData.role}</h3>
              <h3>{pData.institution}</h3>
            </ColInSection>
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                biography
              </H3>
              <ReactMarkdown components={components}>
                {pData.biography}
              </ReactMarkdown>
            </ColInSection>
            <ColInSection col={3} padding='0px'>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presentations
              </H3>
              {getPresentationColData()}
            </ColInSection>
          </Section>
        </>
      )}
    </>
  );
};

export default SinglePresenter;

export const pageQuery = graphql`
  query ($slug: String!) {
    strapiPresenter(slug: { eq: $slug }) {
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
      biography
      title
      fullName
      role
      institution
      presentations {
        id
        name
        slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 350, height: 233)
            }
          }
        }
      }
    }
  }
`;
