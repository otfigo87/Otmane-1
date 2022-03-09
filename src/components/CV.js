import React from 'react';
//import resume from './assets/resume.pdf';
import styled from 'styled-components';

function CV() {
  return (
    <Cta className='cv'>
        <a href='#' downoald className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </Cta>
  )
}

const Cta = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export default CV;