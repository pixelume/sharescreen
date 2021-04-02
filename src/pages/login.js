import React from 'react';
// import styled from 'styled-components';
import LoginForm from '../components/Forms/LoginForm/LoginForm';
import { SubHeading } from '../components/Layout';

const Login = () => {
  //Logic

  return (
    <div>
      <SubHeading textAlign='center' margin='30px auto'>Sign In</SubHeading>
      {/* {`<LoginForm/>`} */}
      <LoginForm/>
    </div>
  );
}

export default Login;