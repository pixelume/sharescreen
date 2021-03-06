import React from "react"
import styled from "styled-components"
import Title from "./Title"
import MainNavContainer from "./MainNavContainer"

export const HeaderCont = styled.header`
  width: 100vw;
  /* background-color: ${({theme}) => theme.mediumLight1}; */
  /* background-color: ${({theme}) => theme.warmWhite}; */
  background-color: rgba(255,255,255,0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  height: ${({theme}) => theme.headerHeightBig}px;
  top: 0;
  left: 0;
  padding: 0px 10px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgrey;
  backdrop-filter: blur(15px);
  & a {
    text-decoration: none;
  }
  @media (min-width: ${({ theme }) => theme.mobileMenu}) {
    padding: 0px 10px;
  }
`

const Header = () => (
    <HeaderCont>
      <Title/>
      <MainNavContainer/>
    </HeaderCont>
)

export default Header