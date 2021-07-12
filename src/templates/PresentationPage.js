import React from 'react';
import Notification from '../styles/Notification';
import { Link } from 'gatsby';
// import LoadAnimation from "../styles/LoadAnimation";
import {
  Section,
  ColInSection,
  H3,
  P,
  // Img,
  imgStyle,
} from '../components/Layout';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

const PresentationPage = ({ data }) => {
  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.strapiPresentation;
  const profilePic = getImage(pData.presenter.profilePicture.localFile);
  const presentationPic = getImage(pData.image.localFile);

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf='flex-start'
            alignItems='flex-start'
            // background="linear-gradient(90deg, rgba(255,255,255,1) 35%, rgba(240,248,255,1) 35%, rgba(240,248,255,1) 65%, rgba(255,255,255,1) 65%)"
            background='linear-gradient(90deg, aliceblue 25%, white 45%, white 55%, aliceblue 75%)'
          >
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presentation
              </H3>
              {pData.image ? (
                <GatsbyImage
                  image={presentationPic}
                  alt={pData.description}
                  style={imgStyle}
                />
              ) : (
                <img
                  src='http://localhost:1337/uploads/placeholder_e8d28bfc61.png'
                  style={imgStyle}
                  alt='Image Placeholder'
                />
              )}
              <H3 margin='1.5em auto' color='dark1'>
                {pData.name}
              </H3>
              {pData.presenter ? (
                <h3>
                  by {pData.presenter.title ? pData.presenter.title : null}
                  &nbsp;
                  {pData.presenter.fullName}
                </h3>
              ) : null}
            </ColInSection>
            <ColInSection col={3} display='flex' flexFlow='column'>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Description
              </H3>
              <div>
                <ReactMarkdown components={components}>
                  {pData.description}
                </ReactMarkdown>
              </div>
              {/* <div>
              {pData.Description.split(`\n`).map((par, idx) => (
                <P key={`par-${idx}`} margin="1.2em auto">{par}</P>
              ))}
              </div> */}
              {/* <Notification color="blue">
                <h2>Column Content</h2>
              </Notification> */}
            </ColInSection>
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presenter
              </H3>
              {pData.presenter ? (
                <>
                  {/* <Link to={`/presenters/${pData.presenter.id}`}> */}
                  <Link to={`/${pData.presenter.slug}`}>
                    {pData.presenter.profilePicture ? (
                      <GatsbyImage
                        image={profilePic}
                        alt={pData.presenter.fullName}
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
                    <H3>
                      {pData.presenter.title ? pData.presenter.title : null}
                      &nbsp;
                      {pData.presenter.fullName}
                    </H3>
                  </Link>
                  <h3>{pData.presenter.role}</h3>
                  <h3>at {pData.presenter.institution}</h3>
                </>
              ) : (
                <Notification borderRadius='10px' color='orange'>
                  <h4>
                    This presentation has not been linked to a presenter yet
                  </h4>
                </Notification>
              )}
            </ColInSection>
          </Section>
        </>
      )}
      {/* {error && <Notification color="red">{error}</Notification>}
      {loading && <LoadAnimation />} */}
    </>
  );
};

export default PresentationPage;

export const pageQuery = graphql`
  query ($slug: String!) {
    strapiPresentation(slug: { eq: $slug }) {
      description
      duration
      language
      name
      topic
      videoLink
      id
      presenter {
        fullName
        title
        role
        institution
        slug
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
      }
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;
