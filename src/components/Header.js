import React from 'react';
import CV from './CV';
import me from '../assets/me.jpg';
import HeaderSocials from './HeaderSocials';
import styled from 'styled-components';

function Header() {
  return (
    <Container>
      <HeaderContainer className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Otmane Aatik</h1>
        <h5 classeName="text-light">Fullstack Developer</h5>
        <CV />
        <HeaderSocials />

        <Image className="me">
          <img src={me} alt="me"/>
        </Image>

        <a href="#contact" className="scroll__down">Scroll Down</a>

      </HeaderContainer>
    </Container>
  )
}

const Container = styled.div`
  height: 100%;
  padding-top: 7rem;
  overflow: hidden;
`;
const HeaderContainer = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
  .scroll__down{
    position: absolute;
    right: -2.3rem;
    bottom: 5rem;
    transform: rotate(90deg);
    font-weight: 300;
    font-size: 1rem;
  }
`;
const Image = styled.div`
  background: linear-gradient(var(--color-primary), transparent);
  width: 22rem;
  height: 33rem;
  position: relative;
  left: calc(50% - 11rem);
  margin-top: 4rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  img {
    //background-color: transparent;
  }
`


export default Header;