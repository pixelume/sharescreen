import React, { useState, useContext, useEffect } from "react";
// import { Button } from "../styles/Buttons";
import axios from "axios";
// import Notification from '../styles/Notification';
import { StForm, SendingAnimation } from "../FormStyles";
import LoginFormContent from "./LoginFormContent";
import { Link, navigate } from "gatsby";
import Notification from "../../../styles/Notification";
import { Context } from '../../RootElement';

const LoginForm = () => {
  const initialFData = {
    email: "",
    password: "",
  };

  const [fData, setFData] = useState(initialFData);
  const [formStatus, setFormStatus] = useState("unSent");
  const [formError, setFormError] = useState(false);

  const { setUser } = useContext(Context);

  useEffect(() => {
    if (formStatus === 'sent') {
      setTimeout(() => navigate('/'), 1000);
    }
  }, [formStatus])
  
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
      const response = await axios.post("http://localhost:1337/auth/local", {
        identifier: fData.email,
        password: fData.password,
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
        <LoginFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          errorDisplay={formError}
        />
      )}
      {formStatus === "sending" && (
        <SendingAnimation size="5em" color="salmon" />
      )}
      {formStatus === "sent" && (
        <>
          <h2 style={{ margin: "auto", textAlign: "center" }}>
            Login Successful.
          </h2>
        </>
      )}
      {formError && <Notification animate color="red">{formError}</Notification>}
      <div style={{textAlign: 'center', color: "darkgrey"}}>Don't have an account? <Link style={{textDecoration: 'underline'}} to='/signup'>Sign up here</Link></div>
    </StForm>
  );
};

export default LoginForm;
