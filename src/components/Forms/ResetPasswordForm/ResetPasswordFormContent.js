import React from "react";
import { Button } from '../../../styles/Buttons';
import {
  Formfield,
  Input,
  iconStyle,
  clearBtnStyle,
} from "../FormStyles";
import { MdClear } from "react-icons/md";
import {RiKey2Line} from "react-icons/ri";
// import {RiKey2Line} from "react-icons/ri";
import styled from 'styled-components';

const StInput = styled(Input)`
  padding-left: 2.5em;
`

const ResetPasswordFormContent = ({
  inputHandler,
  fData,
  clearField,
}) => {
  return (
  <>
    <Formfield>
    <StInput
        placeholder="Password"
        id="password"
        name="password"
        type="password"
        aria-label="password"
        onChange={inputHandler}
        value={fData.password}
      />
      <RiKey2Line style={iconStyle} />
      {fData.password && (
        <MdClear
          style={clearBtnStyle}
          onClick={() => clearField("password")}
        />
      )}
    </Formfield>
    <Formfield>
    <StInput
        placeholder="Confirm Password"
        id="passwordConfirmation"
        name="passwordConfirmation"
        type="password"
        aria-label="passwordConfirmation"
        onChange={inputHandler}
        value={fData.passwordConfirmation}
      />
      <RiKey2Line style={iconStyle} />
      {fData.passwordConfirmation && (
        <MdClear
          style={clearBtnStyle}
          onClick={() => clearField("passwordConfirmation")}
        />
      )}
    </Formfield>
    <Button margin="20px auto" type="submit" color="green">
      Submit
    </Button>
  </>
);
}

export default ResetPasswordFormContent