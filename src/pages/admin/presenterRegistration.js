import React from 'react';
// import styled from 'styled-components';
import PresenterRegistrationForm from '../../components/Forms/PresenterRegistrationForm/PresenterRegistrationForm';
import { H3, Section, ColInSection } from '../../components/Layout';
import AdminNavItems from '../../components/Navigation/AdminNavItems';
import SubHeader from '../../components/Layout/SubHeader';
import { NavButton } from '../../components/Navigation/AuthBtnItems';
import { IoArrowBack } from 'react-icons/io5';

const PresenterRegistration = () => {
  //Logic

  return (
    <>
      <SubHeader>
        <AdminNavItems />
      </SubHeader>
      <Section>
        <ColInSection col={1} textAlign='center'>
          <H3 textAlign='center' margin='30px auto'>
            Add a New Presenter
          </H3>
        </ColInSection>
        <ColInSection
          col={1}
          textAlign='center'
          display='flex'
          justifyContent='center'
        >
          <PresenterRegistrationForm />
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

export default PresenterRegistration;
