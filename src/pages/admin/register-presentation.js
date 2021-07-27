import React from 'react';
// import styled from 'styled-components';
import PresentationRegistrationForm from '../../components/Forms/PresentationRegistrationForm/PresentationRegistrationForm';
import { H3, Section, ColInSection } from '../../components/Layout';
import AdminNavItems from '../../components/Navigation/AdminNavItems';
import SubHeader from '../../components/Layout/SubHeader';

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
    </Section>
    </>
  );
};

export default RegisterPresentation;
