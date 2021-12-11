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

import {BiBuildingHouse} from 'react-icons/bi';
import {SiQgis} from 'react-icons/si';
import {TiWeatherStormy, TiWaves } from 'react-icons/ti';
import {GiElephant, GiAfrica, GiBigWave} from 'react-icons/gi';
import React from 'react';

const catNavData = [
  {
    text: 'Climate Crisis',
    id: 'Climate Crisis',
    link: '/',
    show: 'both',
    role: 'Any',
    icon: <TiWeatherStormy />,
  },
  {
    text: 'Aquatic Ecosystems',
    id: 'Aquatic Ecosystems',
    link: '/presenters',
    show: 'both',
    role: 'Any',
    icon: <GiBigWave />,
  },
  {
    text: 'Human-Wildlife Interaction',
    id: 'Human-Wildlife Interaction',
    link: '/video-library',
    show: 'both',
    role: 'Any',
    icon: <GiElephant />,
  },
  {
    text: 'African Savannah Ecosystems',
    id: 'African Savannah Ecosystems',
    link: '/about',
    show: 'both',
    role: 'Any',
    icon: <GiAfrica />,
  },
  {
    text: 'Commercialization',
    id: 'Commercialization',
    link: '/create',
    show: 'both',
    role: 'Editor',
    icon: <BiBuildingHouse />,
  },
  {
    text: 'GIS',
    id: 'GIS',
    show: 'both',
    role: 'Any',
    icon: <SiQgis />,
  },
];

export default catNavData;
