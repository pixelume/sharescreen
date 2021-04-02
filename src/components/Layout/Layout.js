import React from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import { Footer } from "./Footer";

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

const Layout = ({ children }) => {
  //Logic

  return (
    <>
      <MainContainer>
        {children}
        <Footer />
      </MainContainer>
      <Header />
    </>
  );
};

export default Layout;
