import React from "react";
import { Button } from '../../../styles/Buttons';
import {
  Formfield,
  Input,
  iconStyle,
  clearBtnStyle,
} from "../FormStyles";
import { MdClear } from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import {RiKey2Line} from "react-icons/ri";
import styled from 'styled-components';

const InputLogin = styled(Input)`
  padding-left: 2.5em;
`

const LoginFormContent = ({
  inputHandler,
  fData,
  clearField,
}) => {
  return (
  <>
    <Formfield>
      <InputLogin
        placeholder="Email"
        id="email"
        type="email"
        aria-label="email"
        onChange={inputHandler}
        value={fData.email}
      />
      <HiOutlineMail style={iconStyle} />
      {fData.email && (
        <MdClear
          style={clearBtnStyle}
          onClick={() => clearField("email")}
        />
      )}
    </Formfield>
    <Formfield>
      <InputLogin
        placeholder="Password"
        id="password"
        type="password"
        aria-label="password"
        onChange={inputHandler}
        value={fData.password}
      />
      <RiKey2Line style={iconStyle} />
      {fData.password && (
        <MdClear style={clearBtnStyle} onClick={() => clearField("password")} />
      )}
    </Formfield>
    {/* {errorDisplay && <Notification color="red">{errorDisplay}</Notification>} */}
    <Button margin="20px auto" type="submit" color="green">
      Submit
    </Button>
  </>
);
}

export default LoginFormContent