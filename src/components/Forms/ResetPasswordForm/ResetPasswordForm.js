import React, { useState, useContext, useEffect } from 'react';
// import { Button } from "../styles/Buttons";
import axios from 'axios';
// import Notification from '../styles/Notification';
import { StForm } from '../FormStyles';
import ResetPasswordFormContent from './ResetPasswordFormContent';
import { Link, navigate } from 'gatsby';
import Notification from '../../../styles/Notification';
import { Context } from '../../RootElement';
import LoadAnimation from '../../../styles/LoadAnimation';
import { H3, P } from '../../Layout';

const ResetPasswordForm = ({location}) => {
  const code = new URLSearchParams(location.search).get('code')
  const initialFData = {
    // email: "",
    code: code,
    password: '',
    passwordConfirmation: '',
  };

  const [fData, setFData] = useState(initialFData);
  const [formStatus, setFormStatus] = useState('unSent');
  const [formError, setFormError] = useState(false);
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (formStatus === 'sent') {
      if (count > 0) {
        setTimeout(() => setCount((c) => c - 1), 1000);
      } else {
        navigate('/login')
      }
    }
  }, [count, formStatus]);

  // const { setUser } = useContext(Context);

  // useEffect(() => {
  //   if (formStatus === 'sent') {
  //     setTimeout(() => navigate('/'), 1000);
  //   }
  // }, [formStatus])

  const inputHandler = (e) => {
    if (formError) {
      setFormError(false);
    }
    const { id, value } = e.target;
    setFData((prevData) => ({ ...prevData, [id]: value }));
  };

  const clearField = (field) => {
    setFData((prevData) => ({ ...prevData, [field]: '' }));
    document.getElementById(field).focus();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    setFormStatus('sending');
    try {
      const response = await axios.post(
        `${process.env.GATSBY_STRAPI_URL}/auth/reset-password`,
        {
          code: fData.code,
          password: fData.password,
          passwordConfirmation: fData.passwordConfirmation
        }
      );
      // setUser(response.data);
      setFormStatus('sent');
    } catch (error) {
      setFormError(error.response.data.message[0].messages[0].message);
      setFormStatus('unSent');
    }
  };

  return (
    <StForm onSubmit={submitHandler}>
      {formStatus === 'unSent' && (
        <ResetPasswordFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          errorDisplay={formError}
        />
      )}
      {formStatus === 'sending' && <LoadAnimation />}
      {formStatus === 'sent' && (
        <>
          <H3 style={{ margin: 'auto', textAlign: 'center' }}>
            Your password has been reset
          </H3>
          <P textAlign='center'>
            You will automatically be re-directed to the{' '}
            <Link>login</Link>{' '}page in...
          </P>
          <P textAlign='center' style={{ fontWeight: 'bold', marginTop: 20 }}>
            {count} seconds
          </P>
        </>
      )}
      {formError && (
        <Notification animate color='red'>
          {formError}
        </Notification>
      )}
      {/* {formStatus !== 'sent' && (
        <div style={{ textAlign: 'center', color: 'darkgrey' }}>
          Go Back to&nbsp;
          <Link style={{ textDecoration: 'underline' }} to='/login'>
            Login Page?
          </Link>
        </div>
      )} */}
    </StForm>
  );
};

export default ResetPasswordForm;
