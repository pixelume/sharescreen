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
import {GiElephant, GiAfrica, GiBigWave, GiForest, GiWaterfall} from 'react-icons/gi';
import React from 'react';

// Climate Change
// Freshwater Systems
// Marine Ecosystems
// Savannah 
// Forests
// Human-Wildlife Interaction
// Commercialisation
// GIS

const catNavData = [
  {
    text: 'Climate Change',
    id: 'Climate Change',
    link: '/',
    show: 'both',
    role: 'Any',
    icon: <TiWeatherStormy />,
  },
  {
    text: 'Fresh Water Systems',
    id: 'Fresh Water Systems',
    link: '/presenters',
    show: 'both',
    role: 'Any',
    icon: <GiWaterfall />,
  },
  {
    text: 'Marine Ecosystems',
    id: 'Marine Ecosystems',
    link: '/video-library',
    show: 'both',
    role: 'Any',
    icon: <GiBigWave />,
  },
  {
    text: 'Savannah',
    id: 'Savannah',
    link: '/about',
    show: 'both',
    role: 'Any',
    icon: <GiAfrica />,
  },
  {
    text: 'Forests',
    id: 'Forests',
    link: '/create',
    show: 'both',
    role: 'Any',
    icon: <GiForest />,
  },
  {
    text: 'Human-Wildlife Interaction',
    id: 'Human-Wildlife Interaction',
    show: 'both',
    role: 'Any',
    icon: <GiElephant />,
  },
  {
    text: 'Commercialization',
    id: 'Commercialization',
    show: 'both',
    role: 'Any',
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