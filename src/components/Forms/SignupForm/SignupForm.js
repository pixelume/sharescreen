import React, { useState, useContext, useEffect } from "react";
// import { Button } from "../styles/Buttons";
import axios from "axios";
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from "../FormStyles";
import SignupFormContent from "./SignupFormContent";
import { Link, navigate } from "gatsby";
import { Context } from "../../../components/RootElement";
import Notification from "../../../styles/Notification";
import LoadAnimation from '../../../styles/LoadAnimation';
import { H3, P } from "../../Layout";

const SignupForm = () => {
  const initialFData = {
    name: "",
    surname: "",
    email: "",
    password: "",
    passwordVer: "",
    passwordVer: "",
    agreeToPolicies: false,
    changeRoleToPresenter: false
  };

  const [fData, setFData] = useState(initialFData);
  const [formStatus, setFormStatus] = useState("unSent");
  const [formError, setFormError] = useState(false);
  const [validated, setValidated] = useState(false)

  const { setUser } = useContext(Context);

  // useEffect(() => {
  //   if (formStatus === 'sent') {
  //     setTimeout(() => navigate('/'), 1000);
  //   }
  // }, [formStatus])

  const {email, password, passwordVer} = fData
  useEffect(() => {
    if ((email !== "") && (password === passwordVer)) {
      if (!validated)
      setValidated(true)
    } else {
      if (validated) {
        setValidated(false)
      }
    }
  }, [email, password, passwordVer, validated])
  
  const inputHandler = (e) => {
    if (formError) {
      setFormError(false);
    }
    const { name, value } = e.target;
    setFData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearField = (field) => {
    setFData((prevData) => ({ ...prevData, [field]: "" }));
    document.getElementById(field).focus();
  };

  const checkBoxHandler = (e) => {
    switch (e.target.id) {
      case 'agreeToPolicies':
        if (e.target.checked) {
          setFData((prevData) => ({...prevData, agreeToPolicies: true}))
        } else { // Checkbox unchecked
          setFData((prevData) => ({...prevData, agreeToPolicies: false}))
        }
        break;
      case 'changeRoleToPresenter':
        if (e.target.checked) {
          setFData((prevData) => ({...prevData, changeRoleToPresenter: true}))
        } else { // Checkbox unchecked
          setFData((prevData) => ({...prevData, changeRoleToPresenter: false}))
        }
        break;
      default:
        break;
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!fData.agreeToPolicies) {
      setFormError('You must agree to our policies before registering.')
    } else {
      if (formError) {
        setFormError(false);
      }
      setFormStatus("sending");
      try {
        const response = await axios.post(`${process.env.GATSBY_STRAPI_URL}/auth/local/register`, {
          name: fData.name,
          surname: fData.surname,
          username: fData.email,
          email: fData.email,
          password: fData.password,
          agreeToPolicies: fData.agreeToPolicies,
          changeRoleToPresenter: fData.changeRoleToPresenter,
          createdOwnPassword: true
        });
        setUser(response.data);
        setFormStatus("sent");
      } catch (error) {
        setFormError(error.response.data.message[0].messages[0].message);
        setFormStatus("unSent");
      }
    }
  };

  return (
    <StForm onSubmit={submitHandler} display='flex'>
      {formStatus === "unSent" && (
        <SignupFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          // errorDisplay={formError}
          validated={validated}
          checkBoxHandler={checkBoxHandler}
        />
      )}
      {formStatus === "sending" && (
        <LoadAnimation />
      )}
      {formStatus === "sent" && (
        <>
          <H3 style={{ margin: "auto", textAlign: "center" }}>
            Please verify you email address:
          </H3>
          <P style={{marginTop: 50, textAlign: 'center'}}>Click on the verification link sent to {fData.email} to verify your email address.</P>
        </>
      )}
      {formError && <Notification animate color="red">{formError}</Notification>}
      {formStatus !== 'sent' && <div style={{width:'100%', textAlign: 'center', color: "darkgrey"}}>Already have an account? <Link style={{textDecoration: 'underline'}} to='/login'>Sign in here</Link></div>}
    </StForm>
  );
};

export default SignupForm;
