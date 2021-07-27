import React, { useEffect, useContext, useState } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { Footer } from './Footer';
// import Modal from '../Modal';
import { H1 } from './Body/StyledTags';
// import { Context } from '../RootElement';
// import { navigate } from 'gatsby';
// import RequestSpeakerForm from '../Forms/RequestSpeakerForm/RequestSpeakerForm';

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

export const LayoutContext = React.createContext()

const Layout = ({ children, location }) => {
  const { pathname } = location;
  const [requestSpeaker, setRequestSpeaker] = useState(false);
  const [openVideo, setOpenVideo] = useState(false);
  // const {user} = useContext(Context)
  // const didMount = React.useRef(false);

  // useEffect(() => {
  //   if (!user || (user && user.user.role.name !== 'SSA-Admin')) {
  //     if (pathname !== '/login') {
  //       navigate('/coming-soon')
  //     }
  //   }
  // }, [user, pathname])

  return pathname !== '/coming-soon' ? (
    <LayoutContext.Provider value={{requestSpeaker, setRequestSpeaker, openVideo, setOpenVideo}}>
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
      <Header />
      {/* {requestSpeaker && (
        <Modal>
          <RequestSpeakerForm/>
        </Modal>
      )} */}
    </LayoutContext.Provider>
  ) : children;
};

export default Layout;
