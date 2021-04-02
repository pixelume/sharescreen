import React from "react";
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
// import {IoPeopleOutline} from "react-icons/io5";


const LoginFormContent = ({
  inputHandler,
  fData,
  clearField,
  validated
}) => {
  return (
  <>
    <Formfield>
      <Input
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
      <Input
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
      <Input
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
    {/* <Formfield radio onChange={inputHandler}>
    <span style={{display: 'block', fontSize: '1.1em', fontWeight: 'bold'}}>Register as a</span>
      <RadioLabel>
      <input
        name="role"
        id="Client"
        type="radio"
        value="Client"
        checked={fData.role === "Client"}
      />
      Client
      </RadioLabel>
      <RadioLabel>
      <input
        name="role"
        id="Service Provider"
        type="radio"
        value="Service Provider"
        checked={fData.role === "Service Provider"}
      />
      Service Provider
      </RadioLabel>
      <RadioLabel>
      <input
        name="role"
        id="Editor"
        type="radio"
        value="Editor"
        checked={fData.role === "Editor"}
      />
      Editor
      </RadioLabel>
      <IoPeopleOutline style={iconStyle} />
    </Formfield> */}
    <Button disabled={!validated} margin="20px auto" type="submit" color={validated? "green": "grey"}>
      Submit
    </Button>
  </>
);
}

export default LoginFormContent