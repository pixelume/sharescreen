import React, { useState, useContext } from "react";
import { Button } from "../../../styles/Buttons";
import axios from "axios";
import { StForm, SendingAnimation } from "../FormStyles";
import UpdateFormContent from "./UpdateFormContent";
import { Context } from "../../../App";
import Notification from "../../../styles/Notification";

const UpdateForm = ({ id, dismissDialog, reFetchPosts }) => {
  const initialFData = {
    description: "",
    likes: 0,
  };

  const [fData, setFData] = useState(initialFData);
  const [file, setFile] = useState(null);
  const [formStatus, setFormStatus] = useState("unSent");
  const [postErr, setPostError] = useState(false);

  const { doReFetchData, user } = useContext(Context);

  const updatedOkBtnHandler = () => {
    // setFormStatus('unSent');
    dismissDialog();
    doReFetchData();
  };

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

    if (file) { // multipart
      const formData = new FormData();
      if (fData.description) {
        formData.append("data", JSON.stringify(fData));
      }
      formData.append("files.image", file);
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }

      try {
        const response = await axios({
          method: "put",
          url: `${process.env.GATSBY_STRAPI_URL}/posts/${id}`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            'Authorization': `Bearer ${user.jwt}`
          },
        });
        setFormStatus("sent");
        reFetchPosts();
      } catch (error) {
        setPostError(error.response.data.message);
      } finally {
        setFormStatus('unSent')
      }
    } else {
      // not multipart
      try {
        const response = await axios({
          method: "put",
          url: `${process.env.GATSBY_STRAPI_URL}/posts/${id}`,
          data: { description: fData.description },
          headers: {
            'Authorization': `Bearer ${user.jwt}`
          }
        });
        setFormStatus("sent");
        reFetchPosts();
      } catch (error) {
        setPostError(error.response.data.message);
      } finally {
        setFormStatus('unSent')
      }
    }
  };

  return (
    <StForm onSubmit={submitHandler}>
      {formStatus === "unSent" && (
        <UpdateFormContent
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
            Post Has Been Updated
          </h2>
          <Button
            style={{ margin: "30px auto 0px" }}
            onClick={updatedOkBtnHandler}
          >
            Done
          </Button>
          {postErr && <Notification animate color="red">{postErr}</Notification>}
        </>
      )}
    </StForm>
  );
};

export default UpdateForm;
