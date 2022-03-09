import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {AiOutlineBook} from 'react-icons/ai';
import {MdOutlineDesignServices} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome/></a>
      <a href="#about"><SiAboutdotme/></a>
      <a href="#experience"><MdOutlineDesignServices/></a>
      <a href="#portfolio"><AiOutlineBook/></a>
      <a href="#contact"><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav