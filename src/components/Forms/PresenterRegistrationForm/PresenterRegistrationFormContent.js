import React, { useState, useRef } from 'react';
import { Button } from '../../../styles/Buttons';
import { Formfield, FormFieldFileDrop, Input, clearBtnStyle, CloseBtnRound } from '../FormStyles';
import { MdClear } from 'react-icons/md';
import ArrayElementsBox from './arrayElementsBox';
import countryList from '../../../data/countriesList';
import { useTheme } from 'styled-components';
import { FileDrop } from 'react-file-drop';
import { theme } from '../../../styles/Theme';

const PresenterRegistrationFormContent = ({
  inputHandler,
  fData,
  file,
  clearField,
  clearFile,
  arrayInputHandler,
  fileSelectHandler,
  deletePillHandler,
}) => {
  const [qualifArrayEl, setQualifArrayEl] = useState('');
  const [subjMatArrayEl, setSubjMatArrayEl] = useState('');
  const [indMembArrayEl, setIndMembArrayEl] = useState('');

  const { medium1 } = useTheme(theme);
  const fileInputRef = useRef(null);

  const onTargetClick = () => {
    fileInputRef.current.click();
  };

  const arrayElementHandler = (e) => {
    switch (e.target.id) {
      case 'qualifications':
        setQualifArrayEl(e.target.value);
        break;
      case 'subjectMatter':
        setSubjMatArrayEl(e.target.value);
        break;
      case 'industryMemberships':
        setIndMembArrayEl(e.target.value);
        break;

      default:
        break;
    }
  };

  const commaHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if ([',', ';', 'Enter', 'Tab'].includes(e.key)) {
      switch (e.target.id) {
        case 'qualifications':
          if (qualifArrayEl.trim()) {
            arrayInputHandler(e.target.id, qualifArrayEl);
            setTimeout(() => setQualifArrayEl(''), 200);
          }
          break;
        case 'subjectMatter':
          if (subjMatArrayEl.trim()) {
            arrayInputHandler(e.target.id, subjMatArrayEl);
            setTimeout(() => setSubjMatArrayEl(''), 200);
          }
          break;
        case 'industryMemberships':
          if (indMembArrayEl.trim()) {
            arrayInputHandler(e.target.id, indMembArrayEl);
            setTimeout(() => setIndMembArrayEl(''), 200);
          }
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Formfield width='10%'>
        <Input
          placeholder='Title *'
          id='title'
          type='text'
          aria-label='title'
          onChange={inputHandler}
          value={fData.title}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.title && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('title')} />
        )}
      </Formfield>
      <Formfield width='45%'>
        <Input
          placeholder='Name *'
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
      <Formfield width='45%'>
        <Input
          placeholder='Surname *'
          id='surname'
          type='text'
          aria-label='surname'
          onChange={inputHandler}
          value={fData.surname}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.surname && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('surname')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Email *'
          id='email'
          type='email'
          aria-label='email'
          onChange={inputHandler}
          value={fData.email}
          required
        />
        {/* <HiOutlineMail style={iconStyle} /> */}
        {fData.email && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('email')} />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Phone number *'
          id='phone'
          type='text'
          aria-label='phone'
          onChange={inputHandler}
          value={fData.phone}
          required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.phone && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('phone')} />
        )}
      </Formfield>
      <Formfield
        style={{
          padding: '4px 5.5px 20px',
          fontSize: '0.6em',
          textAlign: 'left',
          color: 'grey',
        }}
      >
        Your phone number and email address are for our administrative records
        only and will not be made public on the platform. Please see our -link-
        Privacy Policy for details on how we handle your personal information.
      </Formfield>
      <Formfield width='50%'>
        <Input
          as='select'
          id='country'
          form='presenterRegForm'
          style={{ fontSize: '0.73em' }}
          aria-label='country'
          placeholder='Country'
          value={fData.country}
          defaultValue=''
          onChange={inputHandler}
          selected={fData.country}
          required
        >
          <option value='' disabled hidden>
            Choose Country * ↓
          </option>
          {countryList.map((country) => (
            <option value={country} key={`country-${country}`}>
              {country}
            </option>
          ))}
        </Input>
        {/* <Input
          placeholder='Country'
          id='country'
          type='text'
          aria-label='country'
          onChange={inputHandler}
          value={fData.country}
        /> */}
        {fData.country && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('country')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='City or Town'
          id='city'
          type='text'
          aria-label='city'
          onChange={inputHandler}
          value={fData.city}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.city && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('city')} />
        )}
      </Formfield>
      <Formfield>
        <Input
          placeholder={`List of Academic Qualifications`}
          id='qualifications'
          type='text'
          aria-label='qualifications'
          onChange={arrayElementHandler}
          onKeyDown={commaHandler}
          value={qualifArrayEl}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {qualifArrayEl && (
          <MdClear style={clearBtnStyle} onClick={() => setQualifArrayEl('')} />
        )}
        {fData.qualifications && (
          <ArrayElementsBox
            elArray={fData.qualifications}
            deletePillHandler={deletePillHandler}
            field='qualifications'
          />
        )}
      </Formfield>

      <Formfield>
        <Input
          placeholder='Institution'
          id='institution'
          type='text'
          aria-label='institution'
          onChange={inputHandler}
          value={fData.institution}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.institution && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('institution')}
          />
        )}
      </Formfield>
      <Formfield>
        <Input
          placeholder='Role at Institution'
          id='role'
          type='text'
          aria-label='role'
          onChange={inputHandler}
          value={fData.role}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.role && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('role')} />
        )}
      </Formfield>
      <Formfield>
        <Input
          placeholder='List of Subject Areas *'
          id='subjectMatter'
          type='text'
          aria-label='subjectMatter'
          onChange={arrayElementHandler}
          onKeyDown={commaHandler}
          value={subjMatArrayEl}
          // required
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {subjMatArrayEl && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => setSubjMatArrayEl('')}
          />
        )}
        <Formfield
          style={{
            padding: '4px 5.5px 20px',
            fontSize: '0.6em',
            textAlign: 'left',
            color: 'grey',
          }}
        >
          What are your particular fields of expertise or subject matter on which you will be presenting. List and separate with a comma.
        </Formfield>
        {fData.subjectMatter && (
          <ArrayElementsBox
            elArray={fData.subjectMatter}
            deletePillHandler={deletePillHandler}
            field='subjectMatter'
          />
        )}
      </Formfield>
      <Formfield>
        <Input
          placeholder='List of Industry Memberships'
          id='industryMemberships'
          type='text'
          aria-label='industryMemberships'
          onChange={arrayElementHandler}
          onKeyDown={commaHandler}
          value={indMembArrayEl}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {indMembArrayEl && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('industryMemberships')}
          />
        )}
        {fData.industryMemberships && (
          <ArrayElementsBox
            elArray={fData.industryMemberships}
            deletePillHandler={deletePillHandler}
            field='industryMemberships'
          />
        )}
      </Formfield>
      <Formfield>
        <Input
          placeholder='Donated Hours'
          id='availableHours'
          type='number'
          step='1'
          min='1'
          aria-label='availableHours'
          onChange={inputHandler}
          value={fData.availableHours}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.availableHours && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('availableHours')}
          />
        )}
      </Formfield>
      <Formfield style={{ padding: '15px 0.5px' }}>
        <Input
          style={{ height: '8em' }}
          as='textarea'
          placeholder='Your biography - Here you can give a short (less than 500 words) summary of who you are and your academic or professional background as it relates to the contributions you will be making. This will be your introduction to your audience on the Sharescreen platform.'
          id='biography'
          // type='text'
          aria-label='biography'
          onChange={inputHandler}
          value={fData.biography}
        />
        {/* <RiKey2Line style={iconStyle} /> */}
        {fData.biography && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('biography')}
          />
        )}
      </Formfield>
      <FormFieldFileDrop
        style={{ padding: '30px 0.5px', color: 'grey', fontSize: '0.9em' }}
      >
        <div style={{ marginBottom: '1em' }}>
          {!file && 'Please upload an image of yourself'}
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
            // onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
            // onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
            // onFrameDrop={(event) => console.log('onFrameDrop', event)}
            // onDragOver={(event) => console.log('onDragOver', event)}
            // onDragLeave={(event) => console.log('onDragLeave', event)}
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

export default PresenterRegistrationFormContent;

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
