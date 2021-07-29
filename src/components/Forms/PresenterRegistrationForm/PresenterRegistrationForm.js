import React, { useState, useContext, useEffect } from 'react';
// import { Button } from "../styles/Buttons";
import axios from 'axios';
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from '../FormStyles';
import PresenterRegistrationFormContent from './PresenterRegistrationFormContent';
// import { Link, navigate } from 'gatsby';
import Notification from '../../../styles/Notification';
import { Context } from '../../RootElement';
// import { IoNuclearOutline } from 'react-icons/io5';
import slugify from 'slugify';

const PresenterRegistrationForm = () => {
  const initialFData = {
    name: '',
    surname: '',
    title: '',
    email: '',
    phone: '',
    country: '',
    city: '',
    qualifications: null,
    institution: '',
    role: '',
    biography: '',
    subjectMatter: null,
    industryMemberships: null,
    availableHours: null,
  };

  const [fData, setFData] = useState(initialFData);
  const [file, setFile] = useState(null)
  const [formStatus, setFormStatus] = useState('unSent');
  const [formError, setFormError] = useState(false);

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
      console.log(`setFData(prevData => ({...prevData, ${[el]}: ${[val]}}))`);
    }
  };

  const clearField = (field) => {
    setFData((prevData) => ({ ...prevData, [field]: '' }));
    document.getElementById(field).focus();
  };

  const deletePillHandler = (idx, field) => {
    console.log(`inside deletePillHandler. fData[field] = ${fData[field]}`);
    console.log(`idx = ${idx}`);
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
    // return null; // remove when done testing
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    const slug = slugify(`${fData.name} ${fData.surname}`, {lower: true, remove: /[*+~.()'"!:@]/g})
    setFormStatus('sending');
    const formData = new FormData();
    formData.append('data', JSON.stringify({...fData, slug: slug}));
    formData.append("files.profilePicture", file);

    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    try {
      const response = await axios({
        method: 'post',
        url: `${process.env.GATSBY_STRAPI_URL}/presenters`,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${user.jwt}`
        },
      });
      setFormStatus('sent');
      setFData(initialFData);
      setFile(null);
      // doReFetchData();
      // console.log("response", response);
    } catch (error) {
      console.log(error.response.data);
      setFormError(error.response.data.message);
      setFormStatus('unSent');
    }
  };

  return (
    <StForm onSubmit={submitHandler} display='flex' id="presentationRegForm">
      {formStatus === 'unSent' && (
        <PresenterRegistrationFormContent
          inputHandler={inputHandler}
          arrayInputHandler={arrayInputHandler}
          fData={fData}
          file={file}
          clearField={clearField}
          clearFile={() => setFile(null)}
          errorDisplay={formError}
          deletePillHandler={deletePillHandler}
          // fileSelectHandler={(e) => setFile(e.target.files[0])}
          fileSelectHandler={(file, event) => setFile(file)}
        />
      )}
      {formStatus === 'sending' && (
        <SendingAnimation size='5em' color='salmon' />
      )}
      {formStatus === 'sent' && (
        <>
          <h2 style={{ margin: 'auto', textAlign: 'center' }}>
            Presenter Successfully Created.
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

export default PresenterRegistrationForm;
