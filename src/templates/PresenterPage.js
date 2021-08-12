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
import { FiEdit } from 'react-icons/fi';
import PresenterRegistrationForm from '../components/Forms/PresenterRegistrationForm/PresenterRegistrationForm';

const ReqBtn = styled(Button)`
  font-size: 0.9em;
  background-color: ${({ theme }) => theme.medium1};
  color: white;
  margin: 2em auto;
`;

const EditBtn = styled(Button)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  background-color: ${({ theme }) => theme.mediumDark1};
  color: white;
  font-size: 0.9em;
  z-index: 1;
`;

const SinglePresenter = ({ data }) => {
  const { user } = useContext(Context);
  const { radialGradientLight, mediumLight1, headerHeightBig } =
    useContext(ThemeContext);
  const { requestSpeaker, setRequestSpeaker } = useContext(LayoutContext);
  const { editProfile, setEditProfile } = useContext(LayoutContext);

  const components = {
    p: ({ children }) => <P margin='1.2em auto'>{children}</P>,
  };

  const pData = data.strapiPresenter;
  const profilePic = pData.profilePicture
    ? getImage(pData.profilePicture.localFile)
    : null;

  const renderProfile = (
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
                      {presentation.image ? (
                        <GatsbyImage
                          image={getImage(presentation.image.localFile)}
                          style={{
                            marginRight: 10,
                            height: 100,
                            flexShrink: 0,
                          }}
                          alt={presentation.name}
                        />
                      ) : (
                        <StaticImage
                          src='../images/placeholder_image.png'
                          style={{
                            marginRight: 10,
                            height: 100,
                            flexShrink: 0,
                          }}
                          layout='fixed'
                          width={150}
                          height={100}
                        />
                      )}
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
        <Modal
          margin='20px 0px 0px'
          closeHandler={() => setRequestSpeaker(false)}
        >
          <H3
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >{`Connect me with ${pData.title} ${pData.fullName}`}</H3>
          {user && (
            <RequestSpeakerForm
              closeHandler={() => setRequestSpeaker(false)}
              presenterId={pData.id.slice(pData.id.indexOf('_') + 1)}
            />
          )}
          {!user && (
            <button
              style={{ display: 'block', padding: '80px 30px' }}
              onClick={() => setRequestSpeaker(false)}
            >
              Please{' '}
              <Link style={{ textDecoration: 'underline' }} to='/login'>
                Login
              </Link>{' '}
              or{' '}
              <Link style={{ textDecoration: 'underline' }} to='/register'>
                Register
              </Link>{' '}
              to connect with this presenter
            </button>
          )}
        </Modal>
      )}
      {editProfile && (
        <Modal margin='20px 0px 0px' closeHandler={() => setEditProfile(false)}>
          <H3
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >
            Edit Speaker Profile
          </H3>
          {/* <P style={{padding: '15px 20px'}}>We are constantly working on the platform and you will soon be able to edit your profile here. For the time being please contact us if you would like to make any edits.</P> */}
          {editProfile === 'edit' && (
            <PresenterRegistrationForm
              editData={{
                name: pData.name || '',
                surname: pData.surname || '',
                title: pData.title || '',
                email: '' || '',
                phone: '' || '',
                country: pData.country || '',
                city: pData.city || '',
                qualifications: pData.qualifications || null,
                institution: pData.institution || '',
                role: pData.role || '',
                biography: pData.biography || '',
                subjectMatter: pData.subjectMatter || null,
                industryMemberships: pData.industryMemberships || null,
                availableHours: pData.availableHours || '',
              }}
              presenterId={pData.id.slice(pData.id.indexOf('_') + 1)}
              setEditProfile={setEditProfile}
            />
          )}
          {editProfile === 'done' && (
            <>
              <P style={{ padding: '0px 30px', marginTop: 50 }}>
                Profile Successfully Updated. Changes are pending review and may
                take up to 24 hours to reflect.
              </P>
              <Button
                type='button'
                color='red'
                onClick={() => setEditProfile(false)}
              >
                Close
              </Button>
            </>
          )}
        </Modal>
      )}
      {pData &&
        (user &&
          pData.User &&
          pData.User.id &&
          pData.User.id === user.user.id) ||
        (user && user.user.role.name === 'Administrator') ? (
        <EditBtn type='button' onClick={() => setEditProfile('edit')}>
          <FiEdit />
          &nbsp;&nbsp;Edit&nbsp;
          {user.user.role.name === 'Administrator' ? 'Speaker' : 'Your'}
          &nbsp;Profile
        </EditBtn>
      ) : null}
    </>
  );

  const renderUnverified = (
    <Section>
      <ColInSection textAlign='center' col={1}>
        <H3 textAlign='center'>This Profile is pending verification</H3>
      </ColInSection>
    </Section>
  );

  return pData &&
    (pData.profileVerified ||
      (user && pData.User && pData.User.id && pData.User.id === user.user.id) ||
      (user && user.user.role.name === 'Administrator'))
    ? renderProfile
    : renderUnverified;
};

export default SinglePresenter;

export const pageQuery = graphql`
  query ($slug: String!) {
    strapiPresenter(slug: { eq: $slug }) {
      title
      name
      surname
      fullName
      qualifications
      institution
      role
      country
      city
      subjectMatter
      industryMemberships
      availableHours
      biography
      id
      profileVerified
      User {
        id
      }
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
