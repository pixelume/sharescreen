import {
  AiOutlineLogin,
  AiOutlineUserAdd,
} from 'react-icons/ai';
import React from 'react';

const navData = [
  {
    text: 'Sign In',
    id: 'Sign In',
    link: '/login',
    show: 'loggedOut',
    role: 'Any',
    icon: <AiOutlineLogin />,
  },
  // {
  //   text: 'Register',
  //   id: 'Register',
  //   link: '/register',
  //   show: 'loggedOut',
  //   role: 'Any',
  //   icon: <AiOutlineUserAdd />,
  // }
];

export default navData;
