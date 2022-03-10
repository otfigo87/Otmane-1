import React from 'react';
import {AiOutlineHome} from 'react-icons/ai';
import {SiAboutdotme} from 'react-icons/si';
import {AiOutlineBook} from 'react-icons/ai';
import {MdOutlineDesignServices} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import styled from 'styled-components';
import {useState} from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <Navigation>
      <a href="#" onClick={() => setActiveNav('#')}
         className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('about')}
         className={activeNav === 'about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('experience')}
         className={activeNav === 'experience' ? 'active' : ''}><MdOutlineDesignServices/></a>
      <a href="#portfolio" onClick={() => setActiveNav('portfolio')}
         className={activeNav === 'portfolio' ? 'active' : ''}><AiOutlineBook/></a>
      <a href="#contact" onClick={() => setActiveNav('contact')}
         className={activeNav === 'contact' ? 'active' : ''}><AiOutlineMessage/></a>
    </Navigation>
  )
}

const Navigation = styled.nav`
  background: rgba(0, 0, 0, 0.3);
  width: max-content;
  padding: 0.6rem 1.5rem;
  border-radius: 3rem;
  display: flex;
  gap: 1rem;
  position: fixed;
  left: 50%;
  bottom: 2rem;
  transform: translateX(-50%);
  backdrop-filter: blur(15px);
  a {
    background: transparent;
    color: var(--color-light);
    padding: 0.9rem;
    font-size: 1.1rem;
    border-radius: 50%;
  }
  a:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  a.active {
    background: var(--color-bg);
    color: var(--color-white);
  }
`

export default Nav