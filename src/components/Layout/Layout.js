import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { Footer } from './Footer';
import 'sanitize.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/typography.css';
import ContactUsForm from '../Forms/ContactUs/ContactUsForm';
import Modal from '../Modal';
import { H3 } from './Body/StyledTags';

// import { Context } from '../RootElement';
// import { navigate } from 'gatsby';
// import RequestSpeakerForm from '../Forms/RequestSpeakerForm/RequestSpeakerForm';
import { Fab } from '@mui/material';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { Box } from '@mui/material/Box';
import { Link } from 'gatsby';

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.headerHeightBig}px 0px 0px;
  font-family: montserrat;
`;

export const LayoutContext = React.createContext();

const Layout = ({ children, location }) => {
  const { pathname } = location;
  const [requestSpeaker, setRequestSpeaker] = useState(false);
  const [editProfile, setEditProfile] = useState(false);
  const [refetchPresenterProfile, setRefetchPresenterProfile] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  const [submitContact, setSubmitContact] = useState(false);
  // const {user} = useContext(Context)
  // const didMount = React.useRef(false);

  // useEffect(() => {
  //   if (!user || (user && user.user.role.name !== 'Administrator')) {
  //     if (pathname !== '/login') {
  //       navigate('/coming-soon')
  //     }
  //   }
  // }, [user, pathname])

  return pathname !== '/coming-soon' ? (
    <LayoutContext.Provider
      value={{
        requestSpeaker,
        setRequestSpeaker,
        editProfile,
        setEditProfile,
        openVideo,
        setOpenVideo,
        setSubmitContact,
        refetchPresenterProfile,
        setRefetchPresenterProfile,
      }}
    >
      <MainContainer>
        {children}
        <Fab
          variant='extended'
          aria-label='add'
          color='success'
          sx={{
            position: 'fixed',
            bottom: '25px',
            right: '25px',
            fontWeight: 'bold',
            alignItems: 'center',
            '&>a': {color: 'white'},
            '&:hover': { backgroundColor: '#84986b' },
          }}
        >
          <Link to='#events' style={{display: 'flex', alignItems: 'center'}}>
            <span style={{ fontSize: '2em' }}>
              <FaRegCalendarCheck />
            </span>
            &nbsp;&nbsp; Register for an upcoming talk
          </Link>
        </Fab>
        <Footer />
      </MainContainer>
      <Header />
      {submitContact && (
        <Modal margin='auto' closeHandler={() => setSubmitContact(false)}>
          <H3
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >
            Contact Us
          </H3>
          <ContactUsForm closeHandler={() => setSubmitContact(false)} />
        </Modal>
      )}
    </LayoutContext.Provider>
  ) : (
    children
  );
};

export default Layout;
