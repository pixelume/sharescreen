import React from 'react';
// import styled from 'styled-components';
import PresentationRegistrationForm from '../../components/Forms/PresentationRegistrationForm/PresentationRegistrationForm';
import { H3, Section, ColInSection } from '../../components/Layout';
import AdminNavItems from '../../components/Navigation/AdminNavItems';
import SubHeader from '../../components/Layout/SubHeader';
import { NavButton } from '../../components/Navigation/AuthBtnItems';
import { IoArrowBack } from 'react-icons/io5';

const RegisterPresentation = () => {
  //Logic

  return (
    <>
    <SubHeader>
      <AdminNavItems />
    </SubHeader>
    <Section>
      <ColInSection col={1} textAlign='center'>
        <H3 textAlign='center' margin='30px auto'>
          Add a New Presentation
        </H3>
      </ColInSection>
      <ColInSection col={1} textAlign='center' display='flex' justifyContent='center'>
        <PresentationRegistrationForm />
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
    </>
  );
};

export default RegisterPresentation;
