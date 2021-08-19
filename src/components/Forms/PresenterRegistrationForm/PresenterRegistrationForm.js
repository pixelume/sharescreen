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
import LoadAnimation from '../../../styles/LoadAnimation';
import { Button } from '../../../styles/Buttons';
import Modal from '../../Modal';
import { H3, P } from '../../Layout';
import {BiArrowBack} from 'react-icons/bi';
import { LayoutContext } from '../../Layout/Layout';

const PresenterRegistrationForm = ({
  editData, // user edit profile view
  presenterId, // user edit profile view
  setEditProfile, // user edit profile view
  email, // user create profile view
  id, // user create profile view
  name, // user create profile view
  surname, // user create profile view
  setIsDoneCreating // user create profile view
}) => {
  const initialFData = editData
    ? { ...editData }
    : {
        name: name? name: '',
        surname: surname? surname: '',
        title: '',
        email: email? email: '',
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
        User: id? id: null
      };

  const [fData, setFData] = useState(initialFData);
  const [file, setFile] = useState(null);
  const [formStatus, setFormStatus] = useState('unSent');
  const [formError, setFormError] = useState(false);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const { user, setUser } = useContext(Context);
  const { refetchPresenterProfile, setRefetchPresenterProfile } = useContext(LayoutContext);

  useEffect(() => {
    if (formStatus === 'sent') {
      setTimeout(() => setFormStatus('unSent'), 1000);
    } else if (formStatus === 'sending') {
      const slug = slugify(`${fData.name} ${fData.surname}`, {
        lower: true,
        remove: /[*+~.()'"!:@]/g,
      });
      const formData = new FormData();
      let json = JSON.stringify({ ...fData, slug: slug });
      if (id) {
        json = JSON.stringify({ ...fData, slug: slug })
      }
      formData.append('data', json);
      if (file) {
        formData.append('files.profilePicture', file);
      }

      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      const submitForm = async () => {
        const postReqOptions = {
          method: 'post',
          url: `${process.env.GATSBY_STRAPI_URL}/presenters`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.jwt}`,
          }
        };
        const putReqOptions = {
          method: 'put',
          url: `${process.env.GATSBY_STRAPI_URL}/presenters/${presenterId}`,
          data: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${user.jwt}`,
          }
        }
        try {
          const response = await axios(presenterId? putReqOptions: postReqOptions);
          setFormStatus('sent');
          if (presenterId) {
            setEditProfile('done');
          }
          if (id) { // Profile is being created or updated by a registered user
            try {
              const res2 = await axios({
                method: 'put',
                url: `${process.env.GATSBY_STRAPI_URL}/users/${id}`,
                data: {changeRoleToPresenter: false, role: 5},
                headers: {
                  Authorization: `Bearer ${user.jwt}`
                }
              })
              console.log('res2', res2)
              setUser(user => ({...user, user: {...res2.data}}))
              setIsDoneCreating(true)
            } catch (error) {
              setFormError(error.response.data.message[0].messages[0].message);
            }
          }
          setFData(initialFData);
          setFile(null);
          setRefetchPresenterProfile(true)
        } catch (error) {
          console.log(error.response.data);
          setFormError(error.response.data.message);
          setFormStatus('unSent');
        }
      };
      submitForm();
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

  const submitHandler = (e) => {
    // return null; // remove when done testing
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    setConfirmSubmit(true);
  };

  return (
    <>
      <StForm onSubmit={submitHandler} display='flex' id='presentationRegForm'>
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
        {formStatus === 'sending' && <LoadAnimation />}
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
      {confirmSubmit && (
        <Modal
          margin='20px 0px 0px'
          closeHandler={() => setConfirmSubmit(false)}
          alignBody='center'
        >
          <H3
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >
            Confirm and Submit ?
          </H3>
          <P
            style={{ padding: '0px 20px' }}
            textAlign='center'
            margin='auto auto 20px'
          >
            Your presenter profile will be marked for pusbilshing and will be made public within 24 hours pending review.
          </P>
          {/* <P style={{padding: '15px 20px'}}>We are constantly working on the platform and you will soon be able to edit your profile here. For the time being please contact us if you would like to make any edits.</P> */}
          <Button
            style={{fontWeight: 'bold'}}
            type='button'
            color='red'
            margin='auto 10px'
            display='inline-block'
            onClick={() => setConfirmSubmit(false)}
          >
            <BiArrowBack/>{' '}Oops... Continue Editing
          </Button>
          <Button
            style={{fontWeight: 'bold'}}
            type='button'
            color='green'
            autofocus
            margin='auto 10px'
            display='inline-block'
            onClick={() => {
              setFormStatus('sending');
              setConfirmSubmit(false);
            }}
          >
            Yes Confirm
          </Button>
        </Modal>
      )}
    </>
  );
};

export default PresenterRegistrationForm;
