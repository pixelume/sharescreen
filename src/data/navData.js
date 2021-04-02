import {AiOutlineLogin, AiOutlineUserAdd, AiOutlineLogout} from 'react-icons/ai';
import {IoCreateOutline} from 'react-icons/io5';
import {RiHomeLine} from 'react-icons/ri';
import {VscLibrary} from 'react-icons/vsc';
import React from 'react';

const navData = [
  {
    text: "Home",
    link: "/",
    show: "both",
    role: "Any",
    icon: <RiHomeLine />
  },
  {
    text: "Catalogue",
    link: "/catalogue/presentations",
    show: "both",
    role: "Any",
    icon: <VscLibrary />
  },
  // {
  //   text: "Catalogue",
  //   link: "/catalogue",
  //   show: "both",
  //   role: "Any",
  //   icon: <VscLibrary />
  // },
  {
    text: "Create",
    link: "/create",
    show: "loggedIn",
    role: "Editor",
    icon: <IoCreateOutline />
  },
  {
    text: "Sign In",
    link: "/login",
    show: "loggedOut",
    role: "Any",
    icon: <AiOutlineLogin />
  },
  {
    text: "Sign Out",
    show: "loggedIn",
    role: "Any",
    icon: <AiOutlineLogout />
  },
  {
    text: "Register",
    link: "/register",
    show: "loggedOut",
    role: "Any",
    icon: <AiOutlineUserAdd />
  },
]

export default navData;