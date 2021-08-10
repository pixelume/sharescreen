import React, { useState, useContext, useEffect } from 'react';
// import { Button } from "../styles/Buttons";
import axios from 'axios';
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from '../FormStyles';
import ContactUsFormContent from './ContactUsFormContent';
// import { Link, navigate } from 'gatsby';
import Notification from '../../../styles/Notification';
import { Context } from '../../RootElement';
// import { IoNuclearOutline } from 'react-icons/io5';
// import slugify from 'slugify';
import LoadAnimation from '../../../styles/LoadAnimation';

const ContactUsForm = ({closeHandler}) => {
  const { user } = useContext(Context);
  const initialFData = {
    name: '',
    email: user? user.user.email: '',
    phone: '',
    message: '',
    status: 'new', // new | processing | completed
  };

  const [fData, setFData] = useState(initialFData);
  // const [file, setFile] = useState(null)
  const [formStatus, setFormStatus] = useState('unSent');
  const [formError, setFormError] = useState(false);

  // useEffect(() => {
  //   if (formStatus === 'sent') {
  //     // setTimeout(() => navigate('/'), 1000);
  //     setTimeout(() => setFormStatus('unSent'), 1000);
  //   }
  // }, [formStatus]);

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
    // return null; // remove when done testing
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    setFormStatus('sending');
//Send as JSON. Not as Form data
    try {
      const response = await axios({
        method: 'post',
        url: `${process.env.GATSBY_STRAPI_URL}/contact-form-submissions`,
        data: fData,
        // headers: {
        //   Authorization: `Bearer ${user.jwt}`
        // }
      });
      setFormStatus('sent');
      setFData(initialFData);
      setTimeout(() => {
        closeHandler();
      }, 2000);
    } catch (error) {
      console.log(error);
      // setFormError(error.response.data.message);
      setFormStatus('unSent');
    }
  };

  return (
    <StForm onSubmit={submitHandler} display='flex' id="presentationRegForm">
      {formStatus === 'unSent' && (
        <ContactUsFormContent
          inputHandler={inputHandler}
          // arrayInputHandler={arrayInputHandler}
          fData={fData}
          // file={file}
          clearField={clearField}
          // clearFile={() => setFile(null)}
          errorDisplay={formError}
          // deletePillHandler={deletePillHandler}
          // fileSelectHandler={(file, event) => setFile(file)}
        />
      )}
      {formStatus === 'sending' && (
        <LoadAnimation />
      )}
      {formStatus === 'sent' && (
        <>
          <h2 style={{ margin: 'auto', textAlign: 'center' }}>
            Thank You. We will get back to you shortly.
          </h2>
        </>
      )}
      {formError && (
        <Notification animate color='red'>
          {formError}
        </Notification>
      )}
      {/* <div style={{textAlign: 'center', color: "darkgrey"}}>Don't have an account? <Link style={{textDecoration: 'underline'}} to='/signup'>Sign up here</Link></div> */}
    </StForm>
  );
};

export default ContactUsForm;
