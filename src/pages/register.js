import React from 'react';
// import styled from 'styled-components';
import SignupForm from '../components/Forms/SignupForm/SignupForm';
import { SubHeading } from '../components/Layout';

const Register = () => {
  //Logic

  return (
    <div>
      <SubHeading textAlign='center' margin='30px auto'>Sign In</SubHeading>
      {/* {`<LoginForm/>`} */}
      <SignupForm/>
    </div>
  );
}

export default Register;