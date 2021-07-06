import React from "react"
import styled from "styled-components"
import Title from "./Title"
import MainNavContainer from "./MainNavContainer"

export const HeaderCont = styled.header`
  width: 100vw;
  /* background-color: ${({theme}) => theme.mediumLight1}; */
  background-color: ${({theme}) => theme.whitish};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  height: ${({theme}) => theme.headerHeightBig};
  top: 0;
  left: 0;
  padding: 0px 30px;
  box-sizing: border-box;
  border-bottom: 1px solid lightgrey;
  & a {
    text-decoration: none;
  }
  @media (min-width: ${({ theme }) => theme.mobileMenu}) {
    padding: 0px 100px;
  }
`

const Header = () => (
    <HeaderCont>
      <Title/>
      <MainNavContainer/>
    </HeaderCont>
)

export default Header