import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FaDribbble} from 'react-icons/fa';
import styled from 'styled-components';

const HeaderSocials = () => {
  return (
    <Header__Socials className="header__socials">
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"><FaDribbble/></a>
    </Header__Socials>
  )
}

const Header__Socials = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: absolute;
  left: 0;
  bottom: 3rem;
`
export default HeaderSocials