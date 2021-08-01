import React from 'react';
// import styled from 'styled-components';
import SignupForm from '../components/Forms/SignupForm/SignupForm';
import { H3 } from '../components/Layout';

const Register = () => {
  //Logic

  return (
    <div>
      <H3 textAlign='center' margin='30px auto'>Register</H3>
      {/* {`<LoginForm/>`} */}
      <SignupForm/>
    </div>
  );
}

export default Register;