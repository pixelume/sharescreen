import styled, { css, keyframes } from "styled-components"
import React, { useState } from "react"
import Burger from "./Burger"
import MainNavItems from "../../Navigation/MainNavItems";
import navData from '../../../data/navData';
import authBtnsData from '../../../data/authBtnsData';
import AuthBtnItems from '../../Navigation/AuthBtnItems';

export const StyledMenu = styled.nav`
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  text-align: left;
  /* padding: 2rem; */
  transition: all 0.3s ease-in-out;
  font-size: 0.9em;
  @media only screen and (min-width: ${({ theme }) => theme.mobileMenu}) {
    height: 100%;
    align-items: stretch;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobileMenu}) {
    width: 85%;
    /* background: transparent; */
    background: ${({ theme }) => theme.coolWhite};
    flex-direction: column;
    position: absolute;
    height: 100vh;
    top: 0;
    right: 0;
    border-radius: 150px 0px 0px 0px / 100% 0px 0px 0px;
    overflow: hidden;
    ${({ open }) =>
      !open
        ? css`
            transform: translateX(100%);
          `
        : css`box-shadow: -2px 0px 11px -4px rgba(0,0,0,0.75);`}
  }
`

const opacityFadeIn = keyframes`
  0% {
    opacity: 0
  }
  100% {
    opacity: 0.6
  }
`

const OpenDimBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  animation: ${opacityFadeIn} 0.2s ease-out forwards;
`
const MainNavContainer = () => {
  const [navOpen, setNavOpen] = useState(false)


  return (
    <>
      {navOpen && <OpenDimBg onClick={() => setNavOpen(false)} />}
      <StyledMenu open={navOpen}>
        <MainNavItems navOpen={navOpen} setNavOpen={setNavOpen} navData={navData}/>
        <AuthBtnItems navOpen={navOpen} setNavOpen={setNavOpen} authBtnsData={authBtnsData}/>
      </StyledMenu>
      {/* <StyledMenu open={navOpen}>
      </StyledMenu> */}
      <Burger
        clickHandler={() => setNavOpen(navOpen => !navOpen)}
        open={navOpen}
      />
    </>
  )
}
export default MainNavContainer
