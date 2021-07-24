import React, { useState, useRef, useContext } from 'react';
import { Button } from '../../../styles/Buttons';
import { Formfield, FormFieldFileDrop, Input, clearBtnStyle, CloseBtnRound } from '../FormStyles';
import { MdClear } from 'react-icons/md';
import ArrayElementsBox from '../PresenterRegistrationForm/arrayElementsBox';
import { useTheme } from 'styled-components';
import { FileDrop } from 'react-file-drop';
import { theme } from '../../../styles/Theme';
import { Context } from '../../RootElement';
import { GiConwayLifeGlider } from 'react-icons/gi';

const PresentationRegistrationFormContent = ({
  inputHandler,
  fData,
  file,
  clearField,
  clearFile,
  arrayInputHandler,
  fileSelectHandler,
  deletePillHandler,
  isUrlValid
}) => {
  const [tagArrayEl, setTagArrayEl] = useState('');
  // const [subjMatArrayEl, setSubjMatArrayEl] = useState('');
  // const [indMembArrayEl, setIndMembArrayEl] = useState('');

  const { medium1 } = useTheme(theme);
  const fileInputRef = useRef(null);

  const { presentersArr } = useContext(Context);

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  // const arrayElementHandler = (e) => {
  //   switch (e.target.id) {
  //     case 'qualifications':
  //       setQualifArrayEl(e.target.value);
  //       break;
  //     case 'subjectMatter':
  //       setSubjMatArrayEl(e.target.value);
  //       break;
  //     case 'industryMemberships':
  //       setIndMembArrayEl(e.target.value);
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const commaHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if ([',', ';', 'Enter', 'Tab'].includes(e.key)) {
      if (tagArrayEl.trim()) {
        arrayInputHandler(e.target.id, tagArrayEl);
        setTimeout(() => setTagArrayEl(''), 200);
      }
    }
  };

  return (
    <>
      <Formfield width='60%'>
        <Input
          placeholder='Presentation Name *'
          id='name'
          type='text'
          aria-label='name'
          onChange={inputHandler}
          value={fData.name}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.name && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('name')} />
        )}
      </Formfield>
      <Formfield width='40%'>
        <Input
          placeholder='Duration (minutes)'
          id='duration'
          type='number'
          step='1'
          min='5'
          aria-label='duration'
          onChange={inputHandler}
          value={fData.duration}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.duration && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('duration')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Main Topic *'
          id='topic'
          type='text'
          aria-label='topic'
          onChange={inputHandler}
          value={fData.topic}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.topic && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('topic')} />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Language *'
          id='language'
          type='text'
          aria-label='language'
          onChange={inputHandler}
          value={fData.language}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.language && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('language')}
          />
        )}
      </Formfield>
      <Formfield style={{ padding: '15px 0.5px' }}>
        <Input
          style={{ height: '8em' }}
          as='textarea'
          placeholder='Give a short introductory description of what the presentation is about'
          id='description'
          aria-label='description'
          onChange={inputHandler}
          value={fData.description}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.description && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('description')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          as='select'
          id='presenter'
          form='presentationRegForm'
          style={{ fontSize: '0.73em' }}
          aria-label='presenter'
          placeholder='Select Presenter'
          value={fData.presenter}
          defaultValue=''
          onChange={inputHandler}
          selected=''
          required
        >
          <option value='' disabled hidden>
            Select Presenter * ↓
          </option>
          {presentersArr.map((presenter) => {
            {/* console.log('presenter.id', presenter.id) */}
            return (
            <option
              value={presenter.id.slice(presenter.id.indexOf('_')+1)}
              key={`presenter-${presenter.fullName}`}
            >
              {presenter.fullName}
            </option>
          )
          })}
        </Input>
        {fData.presenter && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('presenter')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Video Link (https:// )'
          id='videoLink'
          type='text'
          aria-label='videoLink'
          onChange={inputHandler}
          value={fData.videoLink}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.videoLink && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('videoLink')}
          />
        )}
        {!isUrlValid && (
          <Formfield
            style={{
              padding: '4px 5.5px 20px',
              fontSize: '0.6em',
              textAlign: 'left',
              color: 'lightcoral',
            }}
          >
            Please enter a valid URL for the video link
          </Formfield>
        )}
      </Formfield>
      {/* Next up is Tags */}
      <Formfield>
        <Input
          placeholder='Tags (Separate with comma)'
          id='tags'
          type='text'
          aria-label='tags'
          onChange={(e) => setTagArrayEl(e.target.value)}
          onKeyDown={commaHandler}
          value={tagArrayEl}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {tagArrayEl && (
          <MdClear style={clearBtnStyle} onClick={() => setTagArrayEl('')} />
        )}
        {fData.tags && (
          <ArrayElementsBox
            elArray={fData.tags}
            deletePillHandler={deletePillHandler}
            field='tags'
          />
        )}
      </Formfield>
      <FormFieldFileDrop
        style={{ padding: '30px 0.5px', color: 'grey', fontSize: '0.9em' }}
      >
        <div style={{ marginBottom: '1em' }}>
          {!file && 'Please upload an image for the presentation'}
          {file && (
            <div>
              <span style={{ fontWeight: 'bold' }}>File:</span>{' '}
              <span style={{ color: medium1 }}>{file.name}</span>
              <CloseBtnRound
                style={{
                  position: 'static',
                  display: 'inline-block',
                  marginLeft: 10,
                }}
              >
                <MdClear
                  style={{ cursor: 'pointer', verticalAlign: 'middle' }}
                  onClick={clearFile}
                />
              </CloseBtnRound>
            </div>
          )}
        </div>
        {!file && (
          <FileDrop
            onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
            onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
            onFrameDrop={(event) => console.log('onFrameDrop', event)}
            onDragOver={(event) => console.log('onDragOver', event)}
            onDragLeave={(event) => console.log('onDragLeave', event)}
            onTargetClick={onTargetClick}
            onDrop={(files, event) => {
              event.preventDefault();
              fileSelectHandler(files[0]);
            }}
          >
            Drag &amp; Drop or click to select photo
          </FileDrop>
        )}
      </FormFieldFileDrop>
      {/* {errorDisplay && <Notification color="red">{errorDisplay}</Notification>} */}
      <Button margin='20px auto' type='submit' color='green'>
        Submit
      </Button>
      <input
        onChange={(e) => fileSelectHandler(e.target.files[0])}
        ref={fileInputRef}
        type='file'
        style={{ display: 'none' }}
      />
    </>
  );
};

export default PresentationRegistrationFormContent;

// {/* <Input
// style={{ display: 'flex', alignItems: 'center' }}
// id='image'
// type='file'
// accept='image/*'
// aria-label='image'
// onChange={fileSelectHandler}
// backgroundColor='transparent'
// />
// {/* {fData.role && (
// <MdClear style={clearBtnStyle} onClick={() => clearField('role')} />
// )} */} */}
