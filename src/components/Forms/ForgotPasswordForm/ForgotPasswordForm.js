import React, { useState, useContext, useEffect } from "react";
// import { Button } from "../styles/Buttons";
import axios from "axios";
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from "../FormStyles";
import ForgotPasswordFormContent from "./ForgotPasswordFormContent";
import { Link, navigate } from "gatsby";
import Notification from "../../../styles/Notification";
import { Context } from '../../RootElement';
import LoadAnimation from '../../../styles/LoadAnimation';
import { H3, P } from "../../Layout";

const ForgotPasswordForm = () => {
  const initialFData = {
    email: "",
    // password: "",
  };

  const [fData, setFData] = useState(initialFData);
  const [formStatus, setFormStatus] = useState("unSent");
  const [formError, setFormError] = useState(false);

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
    setFData((prevData) => ({ ...prevData, [field]: "" }));
    document.getElementById(field).focus();
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    setFormStatus("sending");
    try {
      const response = await axios.post(`${process.env.GATSBY_STRAPI_URL}/auth/forgot-password`, {
        email: fData.email,
        // password: fData.password,
      });
      // setUser(response.data);
      setFormStatus("sent");
    } catch (error) {
      setFormError(error.response.data.message[0].messages[0].message);
      setFormStatus("unSent");
    }
  };

  return (
    <StForm onSubmit={submitHandler}>
      {formStatus === "unSent" && (
        <ForgotPasswordFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          errorDisplay={formError}
        />
      )}
      {formStatus === "sending" && (
        <LoadAnimation />
      )}
      {formStatus === "sent" && (
        <>
          <H3 style={{ margin: "auto", textAlign: "center" }}>
            Please check your email:
          </H3>
          <P style={{marginTop: 50, textAlign: 'center'}}>Click on the password-reset link sent to {fData.email} to reset yout password.</P>
        </>
      )}
      {formError && <Notification animate color="red">{formError}</Notification>}
      {formStatus !== 'sent' && <div style={{textAlign: 'center', color: "darkgrey"}}>Go Back to&nbsp;<Link style={{textDecoration: 'underline'}} to='/login'>Login Page?</Link></div>}
    </StForm>
  );
};

export default ForgotPasswordForm;
