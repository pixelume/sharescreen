import {
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLogout,
} from 'react-icons/ai';
import { IoCreateOutline, IoPeopleOutline } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import React from 'react';

const navData = [
  {
    text: 'Home',
    link: '/',
    show: 'both',
    role: 'Any',
    icon: <RiHomeLine />,
  },
  {
    text: 'Presenters',
    link: '/presenters',
    show: 'both',
    role: 'Any',
    icon: <IoPeopleOutline />,
  },
  {
    text: 'Catalogue',
    link: '/catalogue',
    // link: '/catalogue/presentations',
    show: 'both',
    role: 'Any',
    icon: <VscLibrary />,
  },
  // {
  //   text: "Catalogue",
  //   link: "/catalogue",
  //   show: "both",
  //   role: "Any",
  //   icon: <VscLibrary />
  // },
  {
    text: 'Create',
    link: '/create',
    show: 'loggedIn',
    role: 'Editor',
    icon: <IoCreateOutline />,
  },
  {
    text: 'Sign In',
    link: '/login',
    show: 'loggedOut',
    role: 'Any',
    icon: <AiOutlineLogin />,
  },
  {
    text: 'Sign Out',
    show: 'loggedIn',
    role: 'Any',
    icon: <AiOutlineLogout />,
  },
  {
    text: 'Register',
    link: '/register',
    show: 'loggedOut',
    role: 'Any',
    icon: <AiOutlineUserAdd />,
  },
  {
    text: 'Admin',
    link: '/admin/presenterRegistration',
    show: 'loggedIn',
    role: 'SSA-Admin',
    icon: <IoCreateOutline />,
  },
];

export default navData;
