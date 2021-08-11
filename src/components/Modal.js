import React from "react";
import styled, {css} from "styled-components";
import { fadeIn } from '../styles/animations';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  z-index: 10;
  padding: ${({theme}) => theme.headerHeightBig+ 30}px auto ${({theme}) => theme.headerHeightBig+ 30}px;
  ${({bgPadding}) => bgPadding? css`padding: ${bgPadding};`:null}
  box-sizing: border-box;
`;

const ModalBody= styled.div`
  padding: ${({padding}) => padding || '50px 0px'} ;
  position: relative;
  ${({margin}) => margin? css`margin: ${margin};`: null}
  /* top: ${({theme}) => theme.headerHeightBig + 20}px; */
  background-color: ${({backgroundColor}) => backgroundColor || 'white'};
  animation: ${fadeIn} 0.3s ease-out ${(props) => props.idx * 0.3 || '0'}s both;
  ${({width}) => width? css`width: ${width};`: null}
  ${({height}) => height? css`height: ${height};`: null}
  border-radius: 15px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.75);
  /* max-width: 50vw;
  @media only screen and (orientation: portrait) {
    max-width: 80vw;
  } */
  text-align: center;
  ${({alignBody}) => alignBody? css`align-self: ${alignBody};`: null}
  @media only screen and (min-width: 1024px) {
    max-width: 90vw;
  }
`

// const TextLine = styled.div`
//   margin: 20px 0px;
// `

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
  font-size: 3em;
  background-color: transparent;
`

// const BtnBar = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   margin-top: 30px;
// `

const Modal = ({children, closeHandler, width, height, bgPadding, alignBody, margin}) => {

  return (
    //JSX
    <ModalBg onClick={closeHandler}>
      <ModalBody onClick={e => e.stopPropagation()} {...{width, height, bgPadding, alignBody, margin}}>
        <CloseBtn onClick={closeHandler}>&times;</CloseBtn>
        {children}
      </ModalBody>
    </ModalBg>
  );
};

export default Modal;
