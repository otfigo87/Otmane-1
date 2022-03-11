import React from 'react';
import me from '../assets/about-me.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {RiFoldersLine} from 'react-icons/ri';
import styled from 'styled-components';

function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container about__container">

        <AboutMe className="about__me">
          <AboutMeImage className="about__me-image">
            <Image src={me} alt="me" />
          </AboutMeImage>
        </AboutMe>

        <div className="about__content">
          <AboutCards className="about__cards">
            <AboutCard className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Freelance</small>
            </AboutCard>
            <AboutCard className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>15+ Worldwide</small>
            </AboutCard>
            <AboutCard className="about__card">
              <RiFoldersLine className="about__icon" />
              <h5>Projects</h5>
              <small>25+ Completed</small>
            </AboutCard>
          </AboutCards>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam tempore molestias iste at deserunt. Quasi totam, odio optio perferendis ducimus quas sapiente blanditiis harum quis obcaecati praesentium quia aperiam eligendi.</p>
          
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </AboutContainer>

    </section>
  )
}

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;
  p {
    margin: 2.5rem 0 2.5rem;
    color: var(--color-light);
    @media screen and (max-width: 1024px) {
      margin: 2rem 0 1.5rem;
    }  
    };
  };
  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  };
  .about__content {
    @media screen and (max-width: 600px) {
      text-align: center;
      margin: 1.5rem 0;
    }
  }
`;

const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg, transparent, var(--color-primary), transparent);
  display: grid;
  place-items: center;
  @media screen and (max-width: 600px) {
    width: 65%;
    margin: 0 auto 3rem;
  };
  @media screen and (max-width: 1024px) {
    width: 50%;
    margin: 2rem auto 4rem;
  }
`;

const AboutMeImage = styled.div`
  border-radius: 2rem;
  transform: rotate(10deg);
  transition: var(--transition);
  :hover {
    transform: rotate(0);
  };
`;
const Image = styled.img`
border-radius: 2rem;
`;

const AboutCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`;
const AboutCard = styled.div`
  background: var(--color-bg-variant);
  border: 1px solid transparent;
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: var(--transition);
  .about__icon {
    color: var(--color-primary);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  };
  :hover {
    background: transparent;
    border-color: var(--color-primary-variant);
    cursor: pointer;
  };
  small {
    color: var(--color-light);
    font-size: 0.8rem;
  };
  h5 {
    font-size: 0.94rem;

  }
`;

export default About