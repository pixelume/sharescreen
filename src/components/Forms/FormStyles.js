import styled, { css } from "styled-components";
import { MdMailOutline } from "react-icons/md";
import { bounceOutRight } from "../../styles/animations";

export const StForm = styled.form`
  display: block;
  border-radius: 15px;
  background-color: #f5f5f5;
  padding: 10px 30px 30px;
  box-sizing: border-box;
  width: 95%;
  @media only screen and (orientation: landscape) {
    width: 500px;
  }
`;

export const Formfield = styled.div`
  width: 100%;
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
`;

export const RadioLabel = styled.label`
  display: block;
  font-size: 0.8em;
  margin: 1em 0em;
`

export const Input = styled.input`
  display: block;
  margin: 15px auto;
  width: 100%;
  border-width: 0px;
  /* border: 1px solid white; */
  /* border-color: white; */
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  background-color: white;
  padding-left: 2.5em;
  &:focus {
    background-color: rgba(255, 140, 105, 0.1);
    /* border-width: 0px 0px 5px;
    border-color: salmon; */
  }
  transition: all 0.2s ease-out;
  height: 2em;
`;

export const iconStyle = {
  display: "block",
  position: "absolute",
  left: "0.5em",
  top: "0.25em",
  color: "darkgrey",
};
export const clearBtnStyle = {
  display: "block",
  position: "absolute",
  right: "0.75em",
  top: "0.25em",
  color: "darkgrey",
  border: "none",
  backgroundColor: "transparent",
};

export const SendingAnimation = styled(MdMailOutline)`
  animation: ${bounceOutRight} 1.5s both infinite;
`;

