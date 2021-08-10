import React from 'react';
import { Button } from '../../../styles/Buttons';
import { Formfield, Input, clearBtnStyle } from '../FormStyles';
import { MdClear } from 'react-icons/md';
// import { useTheme } from 'styled-components';
// import { theme } from '../../../styles/Theme';

const ContactUsFormContent = ({
  inputHandler,
  fData,
  clearField,
}) => {
  // const { medium1 } = useTheme(theme);

  return (
    <>
      <Formfield width='100%'>
        <Input
          placeholder='Your Name *'
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
          placeholder='Your message'
          id='message'
          // type='text'
          aria-label='message'
          onChange={inputHandler}
          value={fData.message}
        />
        {fData.message && (
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

export default ContactUsFormContent;