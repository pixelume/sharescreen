import React from "react";
import styled from "styled-components";
import { fadeIn } from '../styles/animations';

const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalBody= styled.div`
  padding: 50px;
  position: relative;
  background-color: white;
  animation: ${fadeIn} 1s ease-out ${(props) => props.idx * 0.3 || '0'}s both;
  border-radius: 15px;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 0, 0.75);
  max-width: 50vw;
  @media only screen and (orientation: portrait) {
    max-width: 80vw;
  }
  text-align: center;
`

const TextLine = styled.div`
  margin: 20px 0px;
`

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
  background-color: transparent;
`

const BtnBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
`

const Modal = ({text, buttons, closeHandler}) => {

  return (
    //JSX
    <ModalBg onClick={closeHandler}>
      <ModalBody onClick={e => e.stopPropagation()}>
        <CloseBtn onClick={closeHandler}>&times;</CloseBtn>
        {text.map((par, idx) => <TextLine key={idx}>{par}</TextLine>)}
        {buttons &&
          <BtnBar>
            {buttons}
          </BtnBar>
        }
      </ModalBody>
    </ModalBg>
  );
};

export default Modal;
