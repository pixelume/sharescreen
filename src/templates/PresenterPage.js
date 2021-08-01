import React, { useContext } from 'react';
// import Notification from '../styles/Notification';
import {
  Section,
  ColInSection,
  H3,
  P,
  imgStyle,
  SmallHeading,
} from '../components/Layout';
// import Cards from '../components/Cards/Cards';
import ReactMarkdown from 'react-markdown';
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image';
import { graphql, Link } from 'gatsby';
import styled, { ThemeContext } from 'styled-components';
import { Button } from '../styles/Buttons';
import { LayoutContext } from '../components/Layout/Layout';
import Modal from '../components/Modal';
import RequestSpeakerForm from '../components/Forms/RequestSpeakerForm/RequestSpeakerForm';
import { Context } from '../components/RootElement';

const ReqBtn = styled(Button)`
  font-size: 0.9em;
  background-color: ${({ theme }) => theme.medium1};
  color: white;
  margin: 2em auto;
`;

const SinglePresenter = ({ data }) => {
  const { user } = useContext(Context);
  const { radialGradientLight, mediumLight1, headerHeightBig } =
    useContext(ThemeContext);
  const { requestSpeaker, setRequestSpeaker } = useContext(LayoutContext);

  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.strapiPresenter;
  const profilePic = getImage(pData.profilePicture.localFile);

  // const getPresentationColData = () => {
  //   const presentationsArr = pData.presentations;
  //   if (presentationsArr) {
  //     if (presentationsArr && presentationsArr.length > 0) {
  //       return (
  //         <Cards
  //           cardMargin='auto'
  //           withoutContainer
  //           presentationsArr={presentationsArr}
  //           fullName={pData.fullName}
  //         />
  //       );
  //     } else {
  //       return (
  //         <Notification color='blue'>
  //           <h2>No Presentations Yet</h2>
  //         </Notification>
  //       );
  //     }
  //   }
  // };

  return (
    <>
      {pData && (
        <>
          <Section
            alignSelf='flex-start'
            alignItems='stretch'
            background={radialGradientLight}
            minHeight={`calc(100vh - ${headerHeightBig}px)`}
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
              {pData.qualifications ? (
                <p>
                  {pData.qualifications.map((qual, idx) => (
                    <span key={`qual-${idx}`}>{qual},&nbsp;</span>
                  ))}
                </p>
              ) : null}
            </ColInSection>
            
            <ColInSection col={3}>
              <H3 margin='0 auto 1.5em' textAlign='center'>
                Biography
              </H3>
              <ReactMarkdown components={components}>
                {pData.biography}
              </ReactMarkdown>
            </ColInSection>
            <ColInSection
              col={3}
              backgroundColor='coolWhite'
              boxShadow='1px 1px 5px rgba(0, 0, 0, 0.1)'
              borderRadius='5px'
            >
              <H3 margin='0 auto 1.5em' textAlign='center'>
                About
              </H3>
              <p>
                <SmallHeading>Institution: </SmallHeading>
                <br />
                {pData.institution}
              </p>
              <p>
                <SmallHeading>Role: </SmallHeading>
                <br />
                {pData.role}
              </p>
              <p>
                <SmallHeading>Country: </SmallHeading>
                <br />
                {pData.country}
              </p>
              {pData.subjectMatter ? (
                <p>
                  <SmallHeading style={{ fontWeight: 'bold' }}>
                    Subjects:{' '}
                  </SmallHeading>
                  <br />
                  {pData.subjectMatter.map((qual, idx) => (
                    <span key={`qual-${idx}`}>{qual},&nbsp;</span>
                  ))}
                </p>
              ) : null}
              <p>
                <SmallHeading>Presentations: </SmallHeading>
              </p>
              {pData.presentations && pData.presentations.length > 0 ? (
                pData.presentations.map((presentation, idx) => (
                  <Link to={`/${presentation.slug}`} key={presentation.name}>
                    <div
                      style={{
                        marginTop: 10,
                        borderRadius: 5,
                        boxSizing: 'border-box',
                        display: 'flex',
                        alignItems: 'center',
                        padding: 5,
                        backgroundColor: mediumLight1,
                      }}
                    >
                      <GatsbyImage
                        image={getImage(presentation.image.localFile)}
                        style={{
                          marginRight: 10,
                          height: 100,
                          flexShrink: 0,
                        }}
                        alt={presentation.name}
                      />
                      <span style={{ textAlign: 'center', fontSize: '0.8em' }}>
                        {presentation.name}
                      </span>
                    </div>
                  </Link>
                ))
              ) : (
                <div
                  style={{
                    borderRadius: 5,
                    boxSizing: 'border-box',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 5,
                    backgroundColor: mediumLight1,
                  }}
                >
                  Coming Soon
                </div>
              )}
              <ReqBtn type='button' onClick={() => setRequestSpeaker(true)}>
                Connect with{` ${pData.title} ${pData.surname}`}
              </ReqBtn>
            </ColInSection>
          </Section>
        </>
      )}
      {requestSpeaker && (
        <Modal margin='20px 0px 0px' closeHandler={() => setRequestSpeaker(false)}>
          <H3
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >{`Connect with ${pData.title} ${pData.fullName}`}</H3>
          {user && <RequestSpeakerForm
            closeHandler={() => setRequestSpeaker(false)}
            presenterId={pData.id.slice(pData.id.indexOf('_') + 1)}
          />}
          {!user && <button style={{display: 'block', padding: '80px 30px'}} onClick={() => setRequestSpeaker(false)} >Please <Link style={{textDecoration: 'underline'}} to='/login'>Login</Link> or <Link style={{textDecoration: 'underline'}} to='/register'>Register</Link> to connect with this presenter</button>}
        </Modal>
      )}
    </>
  );
};

export default SinglePresenter;

export const pageQuery = graphql`
  query ($slug: String!) {
    strapiPresenter(slug: { eq: $slug }) {
      title
      fullName
      surname
      qualifications
      institution
      role
      country
      subjectMatter
      biography
      id
      profilePicture {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 450)
          }
        }
      }
      presentations {
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(layout: FIXED, width: 150)
            }
          }
        }
        name
        videoLink
        slug
      }
    }
  }
`;
