import {
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLogout,
} from 'react-icons/ai';
import { IoCreateOutline, IoPeopleOutline } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import {FaUserCircle} from 'react-icons/fa';
import React from 'react';

const navData = [
  {
    text: 'Home',
    id: 'Home',
    link: '/',
    show: 'both',
    role: 'Any',
    icon: <RiHomeLine />,
  },
  {
    text: 'Presenters',
    id: 'Presenters',
    link: '/presenters',
    show: 'both',
    role: 'Any',
    icon: <IoPeopleOutline />,
  },
  {
    text: 'Catalogue',
    id: 'Catalogue',
    link: '/catalogue',
    // link: '/catalogue/presentations',
    show: 'both',
    role: 'Any',
    icon: <VscLibrary />,
  },
  // {
  //   text: "Catalogue",
  //   id: "Catalogue",
  //   link: "/catalogue",
  //   show: "both",
  //   role: "Any",
  //   icon: <VscLibrary />
  // },
  {
    text: 'Create',
    id: 'Create',
    link: '/create',
    show: 'loggedIn',
    role: 'Editor',
    icon: <IoCreateOutline />,
  },
  // {
  //   text: 'Sign In',
  //   id: 'Sign In',
  //   link: '/login',
  //   show: 'loggedOut',
  //   role: 'Any',
  //   icon: <AiOutlineLogin />,
  // },
  {
    text: 'Sign Out',
    id: 'Sign Out',
    show: 'loggedIn',
    role: 'Any',
    icon: <AiOutlineLogout />,
  },
  // {
  //   text: 'Register',
  //   id: 'Register',
  //   link: '/register',
  //   show: 'loggedOut',
  //   role: 'Any',
  //   icon: <AiOutlineUserAdd />,
  // },
  // {
  //   text: 'Admin',
  //   id: 'Admin',
  //   link: '/admin/presenterRegistration',
  //   show: 'loggedIn',
  //   role: 'Administrator',
  //   icon: <IoCreateOutline />,
  // },
  {
    text: '',
    id: 'MyProfile',
    link: '/your-profile',
    show: 'loggedIn',
    role: 'Any',
    icon: <FaUserCircle />,
  }
];

export default navData;
