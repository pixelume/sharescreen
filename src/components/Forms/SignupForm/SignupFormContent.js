import React from "react";
import styled from 'styled-components';
import { Button } from '../../../styles/Buttons';
import {
  Formfield,
  Input,
  iconStyle,
  clearBtnStyle,
  // RadioLabel,
} from "../FormStyles";
import { MdClear } from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi";
import {RiKey2Line} from "react-icons/ri";
import { Link } from "gatsby";
// import {IoPeopleOutline} from "react-icons/io5";

const InputSignup = styled(Input)`
  padding-left: 2.5em;
`

const StLink = styled(Link)`
  text-decoration: underline;
`

const LoginFormContent = ({
  inputHandler,
  fData,
  clearField,
  validated,
  checkBoxHandler
}) => {
  return (
  <>
    <Formfield>
      <InputSignup
        placeholder="Email"
        id="email"
        name="email"
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
      <InputSignup
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
        <MdClear style={clearBtnStyle} onClick={() => clearField("password")} />
      )}
    </Formfield>
    <Formfield>
      <InputSignup
        placeholder="Verify Password"
        id="passwordVer"
        name="passwordVer"
        type="password"
        aria-label="passwordVer"
        onChange={inputHandler}
        value={fData.passwordVer}
      />
      <RiKey2Line style={iconStyle} />
      {fData.passwordVer && (
        <MdClear style={clearBtnStyle} onClick={() => clearField("passwordVer")} />
      )}
    </Formfield>
    <Formfield
      style={{display: 'flex', justifyContent: 'center', alignItems: 'start', marginTop: 40}}
    >
      <Input 
        style={{height: '3em', width: '3em', marginRight: 15}}
        id='agreeToPolicies'
        type="checkbox" 
        value={fData.agreeToPolicies}
        checked={fData.agreeToPolicies}
        onChange={checkBoxHandler}
      />
      <label htmlFor='agreeToPolicies' style={{fontSize: '0.8em'}}>I acknowledge that I have read, and agree to the sharescreenafrica.org <StLink to='/terms-conditions'>terms &amp; conditions,</StLink>{' '}<StLink to='/privacy'>{`privacy policy`}</StLink>{` and `}<StLink to='/cookie-policies'>cookie policy</StLink>.</label>
    </Formfield>
    <Button disabled={!validated} margin="20px auto" type="submit" color={validated? "green": "grey"}>
      Submit
    </Button>
  </>
);
}

export default LoginFormContent