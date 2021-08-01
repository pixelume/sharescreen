import React, { useContext } from 'react';
import { ColInSection, H3, Section, P } from '../components/Layout';
import { Context } from '../components/RootElement';
import { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import { FaUserCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const { user, setUser } = useContext(Context);
  const { radialGradientLight, headerHeightBig, medium1 } =
    useContext(ThemeContext);

  return (
    <Section
      alignSelf='flex-start'
      alignItems='stretch'
      background={radialGradientLight}
      minHeight={`calc(100vh - ${headerHeightBig}px)`}
      justifyContent='center'
    >
      {/* <ColInSection col={3}>
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
      </ColInSection> */}

      {user.user && (
        <ColInSection
          col={3 / 2}
          backgroundColor='coolWhite'
          boxShadow='1px 1px 5px rgba(0, 0, 0, 0.1)'
          borderRadius='15px'
          display='flex'
          flexFlow='column nowrap'
          justifyContent='space-between'
        >
          <H3 margin='0 auto 1.5em' textAlign='center'>
            <FaUserCircle /> Your Account
          </H3>
          <div>
            <P textAlign='center' margin='0 auto 1.5em'>
              You are currently signed in as{' '}
              {user.user.role.name === 'Administrator' ? 'an' : 'a'}
            </P>
            <H3 margin='0 auto 1.5em' textAlign='center'>
              {user.user.role.name}
            </H3>
          </div>
          <div>
            <P textAlign='center' margin='auto auto 20px'>
              Select an option:
            </P>
            <nav style={{ width: '100%' }}>
              {user.user.role.name === 'Client' && (
                <div
                  style={{
                    textAlign: 'center',
                    margin: '10px',
                    color: medium1,
                    textDecoration: 'underline',
                  }}
                >
                  <Link to='#'>Become a contibuter</Link>
                </div>
              )}
              {user.user.role.name === 'Administrator' && (
                <>
                  <div
                    style={{
                      textAlign: 'center',
                      margin: '10px',
                      color: medium1,
                      textDecoration: 'underline',
                    }}
                  >
                    <Link to='/admin/presenterRegistration'>
                      Add a new presenter
                    </Link>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      margin: '10px',
                      color: medium1,
                      textDecoration: 'underline',
                    }}
                  >
                    <Link to='/admin/register-presentation'>
                      Add a new presentation
                    </Link>
                  </div>
                  <div
                    style={{
                      textAlign: 'center',
                      margin: '10px',
                      color: medium1,
                      textDecoration: 'underline',
                    }}
                  >
                    <Link to='#'>View connection requests</Link>
                  </div>
                </>
              )}
              <div
                style={{
                  textAlign: 'center',
                  margin: '10px',
                  color: medium1,
                  textDecoration: 'underline',
                }}
              >
                <Link to='#'>Change your password</Link>
              </div>
              <div
                style={{
                  margin: '10px',
                  color: medium1,
                  textAlign: 'center'
                }}
              >
                <button
                  style={{
                    textDecoration: 'underline',
                    fontSize: 'inherit',
                    cursor: 'pointer'
                  }}
                  as='button'
                  onClick={() => setUser(false)}
                >
                  Logout
                </button>
              </div>
            </nav>
          </div>
        </ColInSection>
      )}
      {!user && (
        <ColInSection col={3}>
          Please{' '}
          <Link style={{ textDecoration: 'underline' }} to='/login'>
            Login
          </Link>{' '}
          or{' '}
          <Link style={{ textDecoration: 'underline' }} to='/register'>
            Register
          </Link>{' '}
          to view your profile page
        </ColInSection>
      )}

      {/* <ColInSection
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
      </ColInSection> */}
    </Section>
  );
};

export default ProfilePage;
