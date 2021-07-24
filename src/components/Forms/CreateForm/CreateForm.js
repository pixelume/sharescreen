import React, { useState, useContext, useEffect } from "react";
// import styled, { keyframes } from "styled-components";
// import { MdMailOutline, MdClear } from "react-icons/md";
// import { BsPen } from "react-icons/bs";
// import { GrLike } from "react-icons/gr";
// import { FiUser } from "react-icons/fi"
// import { GiPhone, GiFountainPen } from "react-icons/gi"
// import bounceOutRight from "../animations/bounceOutRight";
import {Button} from "../../../styles/Buttons";
import axios from "axios";
// import Notification from '../styles/Notification';
import {StForm, SendingAnimation} from '../FormStyles'
import CreateFormContent from "./CreateFormContent";
import { Link } from 'gatsby';
import { Context } from '../../../App';

const CreateForm = () => {
  const initialFData = {
    description: "",
    likes: "",
  };

  const [fData, setFData] = useState(initialFData);
  const [file, setFile] = useState(null);
  const [formStatus, setFormStatus] = useState("unSent");
  const [postErr, setPostError] = useState(false);

  const {doReFetchData, user} = useContext(Context);

  const inputHandler = (e) => {
    if (postErr) {
      setPostError(false);
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
    if (postErr) {
      setPostError(false);
    }
    setFormStatus("sending");
    const formData = new FormData();
    formData.append("data", JSON.stringify(fData));
    formData.append("files.image", file);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }

    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:1337/posts",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': `Bearer ${user.jwt}`
        },
      });
      setFormStatus("sent");
      doReFetchData();
      // console.log("response", response);
    } catch (error) {
      // console.log(error.response.data);
      setPostError(error.response.data.message);
      setFormStatus("unSent");
    }
  };

  useEffect(() => {
    console.log('file', file)
    console.log('fData', fData)
  }, [file])

  return (
    <StForm onSubmit={submitHandler}>
      {formStatus === "unSent" && (
        <CreateFormContent
          inputHandler={inputHandler}
          fData={fData}
          clearField={clearField}
          fileSelectHandler={(e) => setFile(e.target.files[0])}
          errorDisplay={postErr}
        />
      )}
      {formStatus === "sending" && (
        <SendingAnimation size="5em" color="salmon" />
      )}
      {formStatus === "sent" && (
        <>
          <h2 style={{ margin: "auto", textAlign: "center" }}>
            New Post successfully created
          </h2>
          <Button as={Link} to="/"
            style={{ margin: "30px auto 0px" }}
            // onClick={() => setFormStatus("unSent")}
          >
            Done
          </Button>
        </>
      )}
    </StForm>
  );
};

export default CreateForm;
