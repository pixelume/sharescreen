import React from 'react';
// import styled from 'styled-components';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import { H3 } from '../components/Layout';

const Login = () => {
  //Logic

  return (
    <div>
      <H3 textAlign='center' margin='30px auto'>Sign In</H3>
      {/* {`<LoginForm/>`} */}
      <LoginForm/>
    </div>
  );
}

export default Login;