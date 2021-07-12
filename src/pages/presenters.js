import React from 'react';
import { Section, ColInSection } from '../components/Layout';
import PresentersTable from '../components/presentersTable';

const PresentersPage = () => {
  
  return (
    <Section>
      <ColInSection col={1} textAlign='center'>
        <PresentersTable />
      </ColInSection>
    </Section>
  );
};

export default PresentersPage;