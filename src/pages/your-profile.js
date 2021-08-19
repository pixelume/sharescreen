import React, { useContext, useState, useEffect } from 'react';
import { ColInSection, H3, Section, P } from '../components/Layout';
import { Context } from '../components/RootElement';
import { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import Modal from '../components/Modal';
import { Button } from '../styles/Buttons';
import { LayoutContext } from '../components/Layout/Layout';
import EditProfile from '../components/editProfile';
import { gql, useQuery } from '@apollo/client';

const GET_PRESENTER_BY_USER_ID = gql`
  query getPresenterByUserId($userId: ID!) {
    presenters(limit: 1, where: { User: { id: $userId } }) {
      title
      name
      surname
      fullName
      email
      phone
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
        url
      }
    }
  }
`;

const ProfilePage = () => {
  const [rebuildReq, setRebuildReq] = useState(false);
  const [confirmBuildModal, setConfirmBuildModal] = useState(false);
  const { editProfile, setEditProfile, refetchPresenterProfile, setRefetchPresenterProfile } = useContext(LayoutContext);
  const { user, setUser } = useContext(Context);
  const userId = user ? user.user.id : null;
  const { radialGradientLight, headerHeightBig, medium1 } =
    useContext(ThemeContext);
  const { loading, error, data, refetch } = useQuery(GET_PRESENTER_BY_USER_ID, {
    variables: { userId },
  });

  const editData = (data && data.presenters && data.presenters.length === 1)? {
        name: data.presenters[0].name || '',
        surname: data.presenters[0].surname || '',
        title: data.presenters[0].title || '',
        email: data.presenters[0].email || '',
        phone: data.presenters[0].phone || '',
        country: data.presenters[0].country || '',
        city: data.presenters[0].city || '',
        qualifications: data.presenters[0].qualifications || null,
        institution: data.presenters[0].institution || '',
        role: data.presenters[0].role || '',
        biography: data.presenters[0].biography || '',
        subjectMatter: data.presenters[0].subjectMatter || null,
        industryMemberships: data.presenters[0].industryMemberships || null,
        availableHours: data.presenters[0].availableHours || '',
      }
    : null;

  const presenterId = (data && data.presenters && data.presenters.length === 1)? data.presenters[0].id: null;

  useEffect(() => {
    if (refetchPresenterProfile) {
      setRefetchPresenterProfile(false)
      refetch()
    }
  }, [refetchPresenterProfile])

  // const { loading, error, data } = useQuery(GET_PRESENTER_BY_ID, {variables: {userId}})

  // const presenterSlug = () => {
  //   if (user && user.user.role.name === 'Presenter') {
  //     let slug = '#'
  //     const findPresenter = presentersArr.filter((presenter, index) => presenter.User? presenter.User.id === user.user.id: false )
  //     if (findPresenter && findPresenter.length === 1) {
  //       slug = findPresenter[0].slug
  //     }
  //     return slug;
  //   }
  //   return null;
  // }

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  useEffect(() => {
    if (rebuildReq === 'trigger') {
      const triggerHook = async () => {
        try {
          const response = await axios({
            method: 'post',
            url: `${process.env.GATSBY_NETLIFY_BUILD_HOOK}`,
          });
          setRebuildReq('done');
        } catch (error) {
          console.log(error.response.data);
          setRebuildReq('error');
        }
      };
      triggerHook();
    }
  }, [rebuildReq]);

  return (
    <>
      <Section
        alignSelf='flex-start'
        alignItems='stretch'
        background={radialGradientLight}
        minHeight={`calc(100vh - ${headerHeightBig}px)`}
        justifyContent='center'
      >
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
                    <Link to='/complete-presenter-profile'>
                      Register as a presenter
                    </Link>
                  </div>
                )}
                {user.user.role.name === 'Presenter' && (
                  <>
                    <div
                      style={{
                        textAlign: 'center',
                        margin: '10px',
                        color: medium1,
                        textDecoration: 'underline',
                      }}
                    >
                      {/* <Link to={`/${presenterSlug()}`}>Edit your presenter profile</Link> */}
                      <button
                        style={{
                          color: medium1,
                          textDecoration: 'underline',
                          fontSize: '1em',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                        }}
                        type='button'
                        onClick={() => setEditProfile('edit')}
                      >
                        Edit your presenter profile
                      </button>
                    </div>
                  </>
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
                    <div
                      style={{
                        textAlign: 'center',
                        margin: '10px',
                      }}
                    >
                      {rebuildReq !== 'done' && (
                        <button
                          style={{
                            textDecoration: 'underline',
                            fontSize: '1em',
                            color: 'red',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                          }}
                          type='button'
                          onClick={() => setConfirmBuildModal(true)}
                        >
                          Trigger new build (Run only after updates completed)
                        </button>
                      )}
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
                  <Link to='/forgot-password'>Change your password</Link>
                </div>
                <div
                  style={{
                    margin: '10px',
                    color: medium1,
                    textAlign: 'center',
                  }}
                >
                  <button
                    style={{
                      textDecoration: 'underline',
                      fontSize: 'inherit',
                      cursor: 'pointer',
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
      </Section>
      {confirmBuildModal && (
        <Modal
          alignBody='center'
          closeHandler={() => setConfirmBuildModal(false)}
        >
          {!rebuildReq && (
            <>
              <H3
                style={{ padding: '0px 20px' }}
                textAlign='center'
                margin='auto auto 50px'
              >
                Trigger new build?
              </H3>
              <Button
                type='button'
                color='red'
                margin='auto 10px'
                display='inline-block'
                onClick={() => setConfirmBuildModal(false)}
              >
                Go Back
              </Button>
              <Button
                type='button'
                color='green'
                autofocus
                margin='auto 10px'
                display='inline-block'
                onClick={() => {
                  setRebuildReq('trigger');
                  // setConfirmBuildModal(false);
                }}
              >
                Yes Confirm
              </Button>
            </>
          )}
          {rebuildReq === 'trigger' && (
            <H3
              style={{ padding: '0px 20px' }}
              textAlign='center'
              margin='auto auto 20px'
            >
              Please wait...
            </H3>
          )}
          {rebuildReq === 'done' && (
            <>
              <H3
                style={{ padding: '0px 20px' }}
                textAlign='center'
                margin='auto auto 20px'
              >
                Re-build triggered. Please allow up to 10 minutes for the
                updates to be applied and then refresh the page.
              </H3>
              <Button
                type='button'
                color='blue'
                autofocus
                margin='auto 10px'
                display='inline-block'
                onClick={() => {
                  setConfirmBuildModal(false);
                  // setConfirmBuildModal(false);
                }}
              >
                Close
              </Button>
            </>
          )}
          {rebuildReq === 'error' && (
            <H3
              style={{ padding: '0px 20px' }}
              textAlign='center'
              margin='auto auto 20px'
            >
              An error occured.
            </H3>
          )}
        </Modal>
      )}
      {editProfile && (
        <EditProfile {...{ editData, presenterId, loading, error }} />
      )}
    </>
  );
};

export default ProfilePage;
