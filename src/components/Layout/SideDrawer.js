import styled, { css } from "styled-components";
import React, { useState } from "react";
import {IoFunnelOutline} from 'react-icons/io5';
import { GrClose } from "react-icons/gr";

export const DrawerContainer = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  transition: all 0.3s ease-in-out;
  width: 350px;
  background: ${({ theme }) => theme.whitish};
  flex-direction: column;
  position: fixed;
  height: 100vh;
  top: 0;
  right: 0;
  overflow: hidden;
  z-index: 15;
  padding: calc(20px + ${({theme}) => theme.headerHeightBig}) 1em 0px;
  ${({ open }) =>
    !open
      ? css`
          transform: translateX(100%);
        `
      : css`
          box-shadow: -2px 0px 11px -4px rgba(0, 0, 0, 0.75);
        `}
`;


const OpenDimBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;
  z-index: 14;
`;

export const OpenBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4em;
  font-size: 1.7em;
  position: fixed;
  right: 2vw;
  top: 130px;
  background-color: rgba(0,0,0,0.3);
  color: white;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
`

const CloseBtn = styled(OpenBtn)`
  position: absolute;
  top: 1em;
  left: 1em;
  z-index: 17;
  background-color: transparent;
  color: ${({theme}) => theme.fadedGreyBlue};
`

const SideDrawer = ({children}) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {navOpen && <OpenDimBg onClick={() => setNavOpen(false)} />}
      <DrawerContainer open={navOpen}>
        {children}
        <CloseBtn onClick={() => setNavOpen(false)}><GrClose /></CloseBtn>
      </DrawerContainer>
      <OpenBtn
        onClick={() => setNavOpen(true)}
        open={navOpen}
      >
      <IoFunnelOutline/>
      </OpenBtn>
      {/* <Burger
        clickHandler={() => setNavOpen((navOpen) => !navOpen)}
        open={navOpen}
      /> */}
    </>
  );
};
export default SideDrawer;
