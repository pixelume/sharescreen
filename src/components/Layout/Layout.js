import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import Header from './Header/Header';
import { Footer } from './Footer';
import { Context } from '../RootElement';
import { navigate } from 'gatsby';

const MainContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  box-sizing: border-box;
  padding: ${({ theme }) => theme.headerHeightBig} 0px 0px;
  font-family: montserrat;
`;

const Layout = ({ children, location }) => {
  const { pathname } = location;
  const {user} = useContext(Context)
  const didMount = React.useRef(false);

  // useEffect(() => {
  //   if (!user || (user && user.user.role.name !== 'SSA-Admin')) {
  //     if (pathname !== '/login') {
  //       navigate('/coming-soon')
  //     }
  //   }
  // }, [user, pathname])

  return pathname !== '/coming-soon' ? (
    <>
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
      <Header />
    </>
  ) : children;
};

export default Layout;
