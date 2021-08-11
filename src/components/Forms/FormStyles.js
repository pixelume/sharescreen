import styled, { css } from 'styled-components';
import { MdMailOutline } from 'react-icons/md';
import { bounceOutRight } from '../../styles/animations';

export const StForm = styled.form`
  display: ${({display}) => display || 'block'};
  justify-content: space-between;
  flex-flow: row wrap;
  border-radius: 15px;
  background-color: ${({theme}) => theme.offWhite};
  padding: 10px 30px 30px;
  box-sizing: border-box;
  width: 95%;
  @media only screen and (orientation: landscape) {
    width: 720px;
  }
`;

export const Formfield = styled.div`
  width: 100%;
  /* height: 4em; */
  padding: 0.5px;
  box-sizing: border-box;
  position: relative;
  ${(props) =>
    props.radio
      ? css`
          display: block;
          width: 100%;
          border-width: 0px;
          border-radius: 5px;
          box-sizing: border-box;
          background-color: white;
          padding: 0.2em 0em 0.2em 2.5em;
          &:focus {
            background-color: rgba(255, 140, 105, 0.1);
          }
          transition: all 0.2s ease-out;
        `
      : null}
  @media only screen and (orientation: landscape) {
    width: ${({width}) => width || '100%'};
  }
`;

export const RadioLabel = styled.label`
  display: block;
  font-size: 0.8em;
  margin: 1em 0em;
`;

export const Input = styled.input`
  display: block;
  position: relative;
  /* margin: 0px auto 5px; */
  width: 100%;
  border-width: 0px;
  /* border: 1px solid white; */
  /* border-color: white; */
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  padding-left: 0.7em;
  &:focus {
    background-color: rgba(255, 140, 105, 0.1);
    /* border-width: 0px 0px 5px;
    border-color: salmon; */
  }
  transition: all 0.2s ease-out;
  height: 4em;
  /* height: 100%; */
  font-family: montserrat;
`;

export const FormFieldFileDrop = styled(Formfield)`
  & .file-drop {
    position: relative;
    height: 100px;
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    border: 5px dashed lightgrey;
  }
  & .file-drop > .file-drop-target {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    /* horizontally and vertically center all content */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-content: center;
    text-align: center;
  }
  & .file-drop > .file-drop-target.file-drop-dragging-over-frame {
    /* overlay a black mask when dragging over the frame */
    border: none;
    background-color: white;
    box-shadow: none;
    z-index: 50;
    opacity: 1;
    /* typography */
    color: ${({ theme }) => theme.dark1};
  }
  & .file-drop > .file-drop-target.file-drop-dragging-over-target {
    /* turn stuff orange when we are dragging over the target */
    color: ${({ theme }) => theme.medium1};
    box-shadow: 0 0 13px 3px ${({ theme }) => theme.medium1};
  }
`;

export const iconStyle = {
  display: 'block',
  position: 'absolute',
  left: '0.5em',
  top: '1em',
  color: 'darkgrey',
};
export const clearBtnStyle = {
  display: 'block',
  position: 'absolute',
  right: '0.5em',
  top: '1em',
  color: 'darkgrey',
  border: 'none',
  backgroundColor: 'transparent',
  cursor: 'pointer'
};
export const CloseBtnRound = styled.button.attrs({type: 'button'})`
  display: flex;
  position: ${({position}) => position || 'absolute'};
  right: -5px;
  top: -5px;
  width: 15px;
  height: 15px;
  background-color: lightslategrey;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 0px;
  font-size: 1.2em;
  line-height: 0px;
`

export const SendingAnimation = styled(MdMailOutline)`
  animation: ${bounceOutRight} 1.5s both infinite;
`;
