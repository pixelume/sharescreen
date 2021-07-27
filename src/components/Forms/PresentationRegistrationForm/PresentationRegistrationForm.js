import React, { useState, useContext, useEffect } from 'react';
// import { Button } from "../styles/Buttons";
import axios from 'axios';
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from '../FormStyles';
import PresentationRegistrationFormContent from './PresentationRegistrationFormContent';
import { Link, navigate } from 'gatsby';
import Notification from '../../../styles/Notification';
import { Context } from '../../RootElement';
import { IoNuclearOutline } from 'react-icons/io5';
import slugify from 'slugify';

const PresentationRegistrationForm = () => {
  const initialFData = {
    name: '',
    topic: '',
    language: '',
    duration: '',
    description: '',
    presenter: '',
    videoLink: '',
    tags: '',
    slug: '',
  };

  const [fData, setFData] = useState(initialFData);
  const [file, setFile] = useState(null);
  const [formStatus, setFormStatus] = useState('unSent');
  const [formError, setFormError] = useState(false);
  const [isUrlValid, setIsUrlValid] = useState(false)

  const { user } = useContext(Context);

  useEffect(() => {
    if (formStatus === 'sent') {
      // setTimeout(() => navigate('/'), 1000);
      setTimeout(() => setFormStatus('unSent'), 1000);
    }
  }, [formStatus]);

  const inputHandler = (e) => {
    if (formError) {
      setFormError(false);
    }
    const { id, value } = e.target;
    console.log('e.target.value', e.target.value)
    if (id === 'videoLink') {
      const expression =
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
      // var regex = new RegExp(expression);
      if (value.match(expression)) {
        if (!isUrlValid) {
          setIsUrlValid(true)
        }
      } else {
        if (isUrlValid) {
          setIsUrlValid(false)
        }
      }
    }
    setFData((prevData) => ({ ...prevData, [id]: value }));
  };

  const arrayInputHandler = (el, val) => {
    if (formError) {
      setFormError(false);
    }
    if (fData[el]) {
      setFData((prevData) => ({
        ...prevData,
        [el]: prevData[el].concat([val]),
      }));
    } else {
      setFData((prevData) => ({ ...prevData, [el]: [val] }));
    }
  };

  const clearField = (field) => {
    setFData((prevData) => ({ ...prevData, [field]: '' }));
    document.getElementById(field).focus();
  };

  const deletePillHandler = (idx, field) => {
    if (fData[field].length === 1) {
      setFData((prevData) => ({ ...prevData, [field]: '' }));
    } else {
      let newArr;
      if (idx === 0) {
        newArr = fData[field].slice(idx + 1);
      } else if (idx === fData[field].length - 1) {
        newArr = fData[field].slice(0, -1);
      } else {
        newArr = fData[field].slice(0, idx).concat(fData[field].slice(idx + 1));
      }
      setFData((prevData) => ({ ...prevData, [field]: newArr }));
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // return null; // remove when done testing
    if (formError) {
      setFormError(false);
    }
    const slug = slugify(fData.name, {lower: true, remove: /[*+~.()'",!:@?]/g});
    setFormStatus('sending');
    console.log(JSON.stringify({ ...fData, slug: slug }));
    const formData = new FormData();
    formData.append('data', JSON.stringify({ ...fData, slug: slug }));
    formData.append('files.image', file);

    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:1337/presentations',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${user.jwt}`,
        },
      });
      setFormStatus('sent');
      setFData(initialFData);
      setFile(null);
    } catch (error) {
      console.log(error.response.data);
      setFormError(error.response.data.message);
      setFormStatus('unSent');
    }
  };

  return (
    <StForm onSubmit={submitHandler} display='flex' id='PresentationRegForm'>
      {formStatus === 'unSent' && (
        <PresentationRegistrationFormContent
          inputHandler={inputHandler}
          arrayInputHandler={arrayInputHandler}
          fData={fData}
          file={file}
          clearField={clearField}
          clearFile={() => setFile(null)}
          errorDisplay={formError}
          deletePillHandler={deletePillHandler}
          fileSelectHandler={(file, event) => setFile(file)}
          isUrlValid={isUrlValid}
        />
      )}
      {formStatus === 'sending' && (
        <SendingAnimation size='5em' color='salmon' />
      )}
      {formStatus === 'sent' && (
        <>
          <h2 style={{ margin: 'auto', textAlign: 'center' }}>
            New Presentation Successfully Created.
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

export default PresentationRegistrationForm;
