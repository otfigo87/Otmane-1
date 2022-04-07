import React from 'react';
import {BsPatchCheckFill} from 'react-icons/bs';
import styled from 'styled-components';

function Experience() {
  return (
    <section id="experience">
      <h5>Skills</h5>
      <h2>Experience</h2>

      <ExperienceContainer className="container experience__container">
          <div className="experience__frontend">
            <h3>Frontend Developement</h3>
            <ExperienceContent className="experience__content">
              <article className="experience__details">
                <BsPatchCheckFill className="icon"/>
                <div>
                  <h4>HTML</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="icon"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="icon"/>
                <div>
                  <h4>Javascript</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="icon"/>
                <div>
                  <h4>Bootstrap</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
              <article className="experience__details">
                <BsPatchCheckFill className="icon"/>
                <div>
                  <h4>React</h4>
                  <small className="text-light">Experienced</small>
                </div>
              </article>
            </ExperienceContent>
        </div>

         <div className="experience__backend">
           <h3>Backend Developement</h3>
           <ExperienceContent className="experience__content">
             <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>MongoDb</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>Express</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>NoSQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
           </ExperienceContent>
         </div>
      </ExperienceContainer>
    </section>
  )
}

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  > div {
    background: var(--color-bg-variant);
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: var(--transition);
  @media screen and (max-width: 1024px){
    width: 80%;
    padding: 2rem;
    margin: 0 auto;
  };
  @media screen and (max-width: 600px){
    width: 95%;
    padding: 2rem 1rem;
  }
  };
  > div:hover {
    background: transparent;
    border-color: var(--color-primary-variant);
  };
  h3 {
    text-align: center;
    margin-bottom: 2rem;
    color: var(--color-primary-variant);
  };
  h3:hover {
    color: white;
  };
@media screen and (max-width: 1024px){
  grid-template-columns: 1fr;
};
@media screen and (max-width: 600px) {
  gap: 1rem;
}
`;

const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  .experience__details {
    display: flex;
    gap: 1rem;
  }
  .icon {
    margin-top: 6px;
    color: var(--color-primary);
  }
@media screen and (max-width: 1024px){
    padding: 1 rem;
  }
`;

export default Experience