import React, { useState, useEffect } from 'react';
import { P, H3, Section, ColInSection } from '../components/Layout';
import { navigate } from 'gatsby';

const EmailConfirmed = () => {
  const [count, setCount] = useState(5);

  useEffect(() => {
    if (count > 0) {
      setTimeout(() => setCount((c) => c - 1), 1000);
    } else {
      navigate('/login')
    }
  }, [count]);

  return (
    <Section justifyContent='center'>
      <ColInSection col={1.3}>
        <H3 textAlign='center'>Thank You</H3>
        <P textAlign='center'>
          Your email is confirmed. You will automatically be re-directed to the login page in...
        </P>
        <P textAlign='center' style={{fontWeight: 'bold', marginTop: 20}}>
        {count} seconds
        </P>
      </ColInSection>
    </Section>
  );
};

export default EmailConfirmed;
