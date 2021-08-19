import React, { useContext, useState } from 'react';
// import styled from 'styled-components';
import PresenterRegistrationForm from '../components/Forms/PresenterRegistrationForm/PresenterRegistrationForm';
import { H3, P, Section, ColInSection } from '../components/Layout';
import { NavButton } from '../components/Navigation/AuthBtnItems';
import { IoArrowBack } from 'react-icons/io5';
import { Context } from '../components/RootElement';

const CompletePresenterReg = () => {
  const [isDoneCreating, setIsDoneCreating] = useState(false);
  const { user } = useContext(Context);
  let email = null;
  let id = null;
  let name = null;
  let surname = null;
  if (user && user.user) {
    email = user.user.email;
    id = user.user.id
    name = user.user.name || ''
    surname = user.user.surname || ''
  }
  // const { email, id } = user.user;

  return (
    <Section justifyContent='center'>
      {!isDoneCreating && <ColInSection col={1} textAlign='center'>
        <H3 textAlign='center' margin='30px auto'>
          Complete your Presenter Profile
        </H3>
        <ColInSection col={3 / 2}>
          <P textAlign='center'>
            Thank you for your interest in contributing to ShareScreen Africa as
            a presenter. Please download our{' '}
            <span style={{ fontStyle: 'italic', textDecoration: 'underline' }}>
              <a href='https://drive.google.com/file/d/1c-zItX5MSnNcWpRBkgklGIOM6u5rupfN/view?usp=sharing'>
                rules of engagement for presenters
              </a>
            </span>{' '}
            document for helpful guidelines of how the process works.
          </P>
          <P textAlign='center' style={{ marginTop: 50, fontWeight: 'bold' }}>
            Lets get started by completing your Presenter Profile:
          </P>
        </ColInSection>
      </ColInSection>}
      <ColInSection
        col={3/2}
        textAlign='center'
        // display='flex'
        // justifyContent='center'
      >
        {!isDoneCreating && <PresenterRegistrationForm {...{ name, surname, email, id, setIsDoneCreating }} />}
        {isDoneCreating && (
          <>
            <H3 style={{width: '100%', textAlign: 'center'}}>Presenter Profile Successfully Created</H3>
            <P style={{width: '100%', textAlign: 'center', marginTop: 50}}>Please allow up to 24 hours for changes to reflect</P>
          </>
        )}
      </ColInSection>
      <ColInSection
        col={1}
        fontSize='1em'
        color='white'
        display='flex'
        justifyContent='center'
      >
        <NavButton
          style={{ marginRight: 'auto', marginLeft: 'auto', width: 'auto' }}
          to='/your-profile'
          solid
        >
          <IoArrowBack /> Back to Your Account
        </NavButton>
      </ColInSection>
    </Section>
  );
};

export default CompletePresenterReg;
