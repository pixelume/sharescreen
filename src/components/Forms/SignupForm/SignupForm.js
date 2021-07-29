import React, { useState, useContext, useEffect } from "react";
// import { Button } from "../styles/Buttons";
import axios from "axios";
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from "../FormStyles";
import SignupFormContent from "./SignupFormContent";
import { Link, navigate } from "gatsby";
import { Context } from "../../../components/RootElement";
import Notification from "../../../styles/Notification";

const SignupForm = () => {
  const initialFData = {
    email: "",
    password: "",
    passwordVer: "",
    // role: "Editor"
  };

  const [fData, setFData] = useState(initialFData);
  const [formStatus, setFormStatus] = useState("unSent");
  const [formError, setFormError] = useState(false);
  const [validated, setValidated] = useState(false)

  const { setUser } = useContext(Context);

  useEffect(() => {
    if (formStatus === 'sent') {
      setTimeout(() => navigate('/'), 1000);
    }
  }, [formStatus])

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

  const submitHandler = async (e) => {
    e.preventDefault();
    if (formError) {
      setFormError(false);
    }
    setFormStatus("sending");
    try {
      const response = await axios.post(`${process.env.GATSBY_STRAPI_URL}/auth/local/register`, {
        username: fData.email,
        email: fData.email,
        password: fData.password,
        role: fData.role
      });
      setUser(response.data);
      setFormStatus("sent");
    } catch (error) {
      setFormError(error.response.data.message[0].messages[0].message);
      setFormStatus("unSent");
    }
  };

  return (
    <StForm onSubmit={submitHandler}>
      {formStatus === "unSent" && (
        <SignupFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          // errorDisplay={formError}
          validated={validated}
        />
      )}
      {formStatus === "sending" && (
        <SendingAnimation size="5em" color="salmon" />
      )}
      {formStatus === "sent" && (
        <>
          <h2 style={{ margin: "auto", textAlign: "center" }}>
            Signup Successful.
          </h2>
        </>
      )}
      {formError && <Notification animate color="red">{formError}</Notification>}
      <div style={{textAlign: 'center', color: "darkgrey"}}>Already have an account? <Link style={{textDecoration: 'underline'}} to='/login'>Sign in here</Link></div>
    </StForm>
  );
};

export default SignupForm;
