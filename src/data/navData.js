import {
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineLogout,
} from 'react-icons/ai';
import { IoCreateOutline, IoPeopleOutline } from 'react-icons/io5';
import { RiHomeLine } from 'react-icons/ri';
import { VscLibrary } from 'react-icons/vsc';
import {FaUserCircle} from 'react-icons/fa';
import {AiOutlineInfoCircle} from 'react-icons/ai';
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
    text: 'Video Library',
    id: 'Video Library',
    link: '/video-library',
    show: 'both',
    role: 'Any',
    icon: <VscLibrary />,
  },
  {
    text: 'About',
    id: 'About',
    link: '/about',
    show: 'both',
    role: 'Any',
    icon: <AiOutlineInfoCircle />,
  },
  {
    text: 'Create',
    id: 'Create',
    link: '/create',
    show: 'loggedIn',
    role: 'Editor',
    icon: <IoCreateOutline />,
  },
  {
    text: 'Sign Out',
    id: 'Sign Out',
    show: 'loggedIn',
    role: 'Any',
    icon: <AiOutlineLogout />,
  },
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
