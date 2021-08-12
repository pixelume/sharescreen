import React, { useContext, useState, useEffect } from 'react';
import { ColInSection, H3, Section, P } from '../components/Layout';
import { Context } from '../components/RootElement';
import { ThemeContext } from 'styled-components';
import { Link } from 'gatsby';
import { FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import Modal from '../components/Modal';
import { Button } from '../styles/Buttons';

const ProfilePage = () => {
  const [rebuildReq, setRebuildReq] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { user, setUser, presentersArr } = useContext(Context);
  const { radialGradientLight, headerHeightBig, medium1 } =
    useContext(ThemeContext);

  const presenterSlug = () => {
    if (user && user.user.role.name === 'Presenter') {
      let slug = '#'
      const findPresenter = presentersArr.filter((presenter, index) => presenter.User? presenter.User.id === user.user.id: false )
      if (findPresenter && findPresenter.length === 1) {
        slug = findPresenter[0].slug
      }
      return slug;
    }
    return null;
  }

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
                    <Link to='#'>Become a contibuter</Link>
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
                      <Link to={`/${presenterSlug()}`}>View & edit your presenter profile</Link>
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
                            color: medium1,
                            textDecoration: 'underline',
                            fontSize: '1em',
                            color: 'red',
                            fontWeight: 'bold',
                            cursor: 'pointer',
                          }}
                          type='button'
                          onClick={() => setShowModal(true)}
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
      {showModal && (
        <Modal alignBody='center' closeHandler={() => setShowModal(false)}>
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
                onClick={() => setShowModal(false)}
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
                  // setShowModal(false);
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
                  setShowModal(false);
                  // setShowModal(false);
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
    </>
  );
};

export default ProfilePage;
