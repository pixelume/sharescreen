import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../styles/Buttons';
import {
  Formfield,
  Input,
  iconStyle,
  clearBtnStyle,
  // RadioLabel,
} from '../FormStyles';
import { MdClear } from 'react-icons/md';
import { HiOutlineMail } from 'react-icons/hi';
import { IoPersonOutline } from 'react-icons/io5';
import { BsPersonFill } from 'react-icons/bs';
import { RiKey2Line } from 'react-icons/ri';
import { Link } from 'gatsby';
// import {IoPeopleOutline} from "react-icons/io5";

const InputSignup = styled(Input)`
  padding-left: 2.5em;
`;

const StLink = styled(Link)`
  text-decoration: underline;
`;

const LoginFormContent = ({
  inputHandler,
  fData,
  clearField,
  validated,
  checkBoxHandler,
}) => {
  return (
    <>
      <Formfield width='50%'>
        <InputSignup
          placeholder='First Name *'
          id='name'
          name='name'
          type='name'
          aria-label='name'
          onChange={inputHandler}
          value={fData.name}
          required
        />
        <IoPersonOutline style={iconStyle} />
        {fData.name && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('name')} />
        )}
      </Formfield>
      <Formfield width='50%'>
        <InputSignup
          placeholder='Last Name *'
          id='surname'
          name='surname'
          type='surname'
          aria-label='surname'
          onChange={inputHandler}
          value={fData.surname}
          required
        />
        <BsPersonFill style={iconStyle} />
        {fData.surname && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('surname')} />
        )}
      </Formfield>
      <Formfield>
        <InputSignup
          placeholder='Email *'
          id='email'
          name='email'
          type='email'
          aria-label='email'
          onChange={inputHandler}
          value={fData.email}
          required
        />
        <HiOutlineMail style={iconStyle} />
        {fData.email && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('email')} />
        )}
      </Formfield>
      <Formfield>
        <InputSignup
          placeholder='Password *'
          id='password'
          name='password'
          type='password'
          aria-label='password'
          onChange={inputHandler}
          value={fData.password}
          required
        />
        <RiKey2Line style={iconStyle} />
        {fData.password && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('password')}
          />
        )}
      </Formfield>
      <Formfield>
        <InputSignup
          placeholder='Verify Password *'
          id='passwordVer'
          name='passwordVer'
          type='password'
          aria-label='passwordVer'
          onChange={inputHandler}
          value={fData.passwordVer}
          required
        />
        <RiKey2Line style={iconStyle} />
        {fData.passwordVer && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('passwordVer')}
          />
        )}
      </Formfield>
      <Formfield
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          marginTop: 40,
        }}
      >
        <Input
          style={{ height: '30px', width: '30px', marginRight: 15, flexShrink: 0 }}
          id='changeRoleToPresenter'
          type='checkbox'
          value={fData.changeRoleToPresenter}
          checked={fData.changeRoleToPresenter}
          onChange={checkBoxHandler}
        />
        <label htmlFor='changeRoleToPresenter' style={{ fontSize: '0.8em' }}>
          <span style={{ fontWeight: 'bold', color: 'lightcoral' }}>
            I want to register as a presenter.{' '}
          </span>
          <br />
          Please tick this box <span style={{fontWeight: 'bold'}}>only if you intend to register as a presenter</span> who
          will contribute to the platform in the form of a talk or presentation. If you are registering as a user, leave
          this box un-ticked.
        </label>
      </Formfield>
      <Formfield
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'start',
          marginTop: 40,
        }}
      >
        <Input
          style={{ height: '30px', width: '30px', marginRight: 15, flexShrink: 0 }}
          id='agreeToPolicies'
          type='checkbox'
          value={fData.agreeToPolicies}
          checked={fData.agreeToPolicies}
          onChange={checkBoxHandler}
        />
        <label htmlFor='agreeToPolicies' style={{ fontSize: '0.8em' }}>
          I acknowledge that I have read, and agree to the sharescreenafrica.org{' '}
          <StLink to='/terms-conditions'>terms &amp; conditions,</StLink>{' '}
          <StLink to='/privacy'>{`privacy policy`}</StLink>
          {` and `}
          <StLink to='/cookie-policies'>cookie policy</StLink>.
        </label>
      </Formfield>
      <Formfield>
        <Button
          disabled={!validated}
          margin='20px auto'
          type='submit'
          color={validated ? 'green' : 'grey'}
        >
          Submit
        </Button>
      </Formfield>
    </>
  );
};

export default LoginFormContent;
