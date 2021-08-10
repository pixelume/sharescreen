import React, { useState } from 'react';
import ForgotPasswordForm from '../components/Forms/ForgotPasswordForm/ForgotPasswordForm';
import { P, H3 } from '../components/Layout';
// import { navigate } from 'gatsby';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState(5);

  // useEffect(() => {
  //   if (count > 0) {
  //     setTimeout(() => setCount((c) => c - 1), 1000);
  //   } else {
  //     navigate('/login')
  //   }
  // }, [count]);

  return (
    <div>
        <H3 textAlign='center' margin='30px auto'>Reset password</H3>
        <P textAlign='center' margin='0px auto 50px'>
          Enter your email address below to reset your password.
        </P>
        <ForgotPasswordForm />
    </div>
      
  );
};

export default ForgotPasswordPage;
