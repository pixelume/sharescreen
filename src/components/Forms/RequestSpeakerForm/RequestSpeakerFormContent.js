import React, { useState, useRef } from 'react';
import { Button } from '../../../styles/Buttons';
import { Formfield, FormFieldFileDrop, Input, clearBtnStyle, CloseBtnRound } from '../FormStyles';
import { MdClear } from 'react-icons/md';
import ArrayElementsBox from './arrayElementsBox';
import countryList from '../../../data/countriesList';
import styled, { useTheme } from 'styled-components';
import { FileDrop } from 'react-file-drop';
import { theme } from '../../../styles/Theme';

const RequestSpeakerFormContent = ({
  inputHandler,
  fData,
  clearField,
}) => {
  const { medium1 } = useTheme(theme);

  return (
    <>
      <Formfield width='50%'>
        <Input
          placeholder='First Name *'
          id='name'
          type='text'
          aria-label='name'
          onChange={inputHandler}
          value={fData.name}
          required
        />
        {fData.name && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('name')} />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Surname *'
          id='surname'
          type='text'
          aria-label='surname'
          onChange={inputHandler}
          value={fData.surname}
          required
        />
        {fData.surname && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('surname')} />
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
        {fData.email && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('email')}
          />
        )}
      </Formfield>
      <Formfield width='50%'>
        <Input
          placeholder='Phone'
          id='phone'
          type='tel'
          aria-label='phone'
          onChange={inputHandler}
          value={fData.phone}
          required
        />
        {fData.phone && (
          <MdClear style={clearBtnStyle} onClick={() => clearField('phone')} />
        )}
      </Formfield>
      <Formfield style={{ padding: '15px 0.5px' }}>
        <Input
          style={{ height: '8em' }}
          as='textarea'
          placeholder='You message'
          id='message'
          // type='text'
          aria-label='message'
          onChange={inputHandler}
          value={fData.message}
        />
        {fData.biography && (
          <MdClear
            style={clearBtnStyle}
            onClick={() => clearField('message')}
          />
        )}
      </Formfield>
      {/* {errorDisplay && <Notification color="red">{errorDisplay}</Notification>} */}
      <Button margin='20px auto' type='submit' color='green'>
        Submit
      </Button>
    </>
  );
};

export default RequestSpeakerFormContent;