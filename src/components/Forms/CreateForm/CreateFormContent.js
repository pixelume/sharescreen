import { React } from "react";
import { Button } from '../../../styles/Buttons';
import {
  Formfield,
  Input,
  iconStyle,
  clearBtnStyle,
} from "../FormStyles";
import { BsPen } from "react-icons/bs";
import { GrLike } from "react-icons/gr";
import { MdClear } from "react-icons/md";
import Notification from '../../../styles/Notification';


const CreateFormContent = ({
  inputHandler,
  fData,
  clearField,
  fileSelectHandler,
  errorDisplay,
}) => (
  <>
    {/* <h2 style={{textAlign: "center", color: "salmon"}}>Contact Form</h2> */}
    <Formfield>
      <Button
        as="input"
        // placeholder="Image"
        id="image"
        type="file"
        accept="image/*"
        aria-label="image"
        onChange={fileSelectHandler}
        backgroundColor="transparent"
        // value={fData.likes}
      />
      {/* {fData.name && <MdClear style={clearBtnStyle} onClick={() => clearField("name")}/>} */}
    </Formfield>
    <Formfield>
      <Input
        placeholder="Description"
        id="description"
        type="text"
        aria-label="Description"
        onChange={inputHandler}
        value={fData.description}
      />
      <BsPen style={iconStyle} />
      {fData.name && (
        <MdClear
          style={clearBtnStyle}
          onClick={() => clearField("description")}
        />
      )}
    </Formfield>
    {/* <Formfield>
      <Input
        placeholder="Likes"
        id="likes"
        type="number"
        aria-label="likes"
        onChange={inputHandler}
        value={fData.likes}
      />
      <GrLike style={iconStyle} />
      {fData.name && (
        <MdClear style={clearBtnStyle} onClick={() => clearField("likes")} />
      )}
    </Formfield> */}
    {/* <Formfield>
      <Input
        placeholder="experiment"
        id="experiment"
        type="text"
        aria-label="experiment"
        // onChange={inputHandler}
        value={fData.description}
      />
      <BsPen style={iconStyle} />
      {fData.name && (
        <MdClear
          style={clearBtnStyle}
          onClick={() => clearField("description")}
        />
      )}
    </Formfield> */}
    {errorDisplay && <Notification color="red">{errorDisplay}</Notification>}
    <Button style={{ margin: "auto" }} type="submit" color="green">
      Submit
    </Button>
    {/* <button type="button" onClick={() => console.log(fData)}>log</button> */}
  </>
);

export default CreateFormContent