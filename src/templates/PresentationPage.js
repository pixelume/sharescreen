import React, { useContext } from 'react';
import Notification from '../styles/Notification';
import { Link } from 'gatsby';
// import LoadAnimation2 from "../styles/LoadAnimation2";
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
import { FaPlay } from 'react-icons/fa';
import { LayoutContext } from '../components/Layout/Layout';
import Modal from '../components/Modal';
import { ThemeContext } from 'grommet';
import { useEffect } from 'react';

const PresentationPage = ({ data }) => {
  const { openVideo, setOpenVideo } = useContext(LayoutContext);
  const {headerHeightBig, nature} = useContext(ThemeContext);
  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.strapiPresentation;
  const profilePic = pData.presenter.profilePicture? getImage(pData.presenter.profilePicture.localFile): null;
  const presentationPic = pData.image? getImage(pData.image.localFile): null;

  useEffect(() => {
    console.log('Presenters Page Mounted')
  }, []);

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf='flex-start'
            alignItems='strecth'
            minHeight={`calc(100vh - ${headerHeightBig}px)`}
            // background='linear-gradient(90deg, #dfdfce 25%, white 45%, white 55%, #dfdfce 75%)'
            backgroundColor={nature.dfdfce}
          >
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Presentation
              </H3>
              {pData.image ? (
                <button
                  onClick={() => setOpenVideo(true)}
                  style={{
                    display: 'block',
                    width: '100%',
                    position: 'relative',
                    padding: '5px',
                    boxSizing: 'border-box',
                  }}
                >
                  <GatsbyImage
                    image={presentationPic}
                    alt={pData.description}
                    style={imgStyle}
                  />
                  <FaPlay
                    style={{
                      color: 'rgba(255,255,255,0.8)',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      marginTop: -25,
                      marginLeft: -25,
                      width: 50,
                      height: 50,
                      cursor: 'pointer'
                    }}
                  />
                  {/* <div style={{position: 'absolute', top: '50%', left: '50%', marginTop: -10, marginLeft: -10, width: 0, height: 0, borderLeft: '40px solid white', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', boxShadow: '3px 3px 8px 0px rgba(0, 0, 0, 0.75)', boxSizing: 'border-box'}}></div> */}
                  {/* <div style={{position: 'absolute', top: '50%', left: '50%', marginTop: -10, marginLeft: -10, width: 40, height: 0, borderLeft: '40px solid white', borderTop: '20px solid transparent', borderBottom: '20px solid transparent', boxShadow: '3px 3px 8px 0px rgba(0, 0, 0, 0.75)', boxSizing: 'border-box'}}></div> */}
                </button>
              ) : (
                <img
                  src={`${process.env.GATSBY_STRAPI_URL}/uploads/placeholder_e8d28bfc61.png`}
                  style={imgStyle}
                  alt='Placeholder'
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
                    {profilePic ? (
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
          {openVideo && (
            <Modal
              closeHandler={() => setOpenVideo(false)}
              width='80vw'
              height={`${0.5625*80}vw`}
              bgPadding='0px 0px 0px 0px'
              alignBody='center'
            >
            <iframe
          // width='560'
          // height='315'
          style={{ position: 'absolute', left: 0, top: 0, width: '100%', height: '100%' }}
          src={pData.videoLink}
          title='YouTube video player'
          frameBorder={0}
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen='true'
        ></iframe>
            </Modal>
          )}
        </>
      )}
      {/* {error && <Notification color="red">{error}</Notification>}
      {loading && <LoadAnimation2 />} */}
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
