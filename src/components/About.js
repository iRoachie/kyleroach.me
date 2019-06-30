import React from 'react';
import styled from 'styled-components';

import { Container } from './styles';
import portraitPng from '../images/portrait.png';
import portraitWebp from '../images/portrait.webp';

const About = () => (
  <Section>
    <AboutContainer>
      <PortaitContent>
        <Portrait>
          <source srcSet={portraitWebp} type="image/webp" />
          <img src={portraitPng} alt="Kyle Roach" />
        </Portrait>
      </PortaitContent>

      <Content>
        <Title>
          About <span>Kyle</span>
        </Title>

        <p>
          A Web and React Native Developer whose always interested in creating
          new things using the latest technologies on the web.
        </p>

        <p>
          My love for technology and design has led me into crafting user
          interfaces for web and mobile applications. The fields of web and
          mobile development are rapidly changing, and being a fast learner
          enables me to stay ahead of the curb.
        </p>

        <p className="my-8">
          <strong>Design interfaces. Develop experiences</strong>
        </p>
      </Content>
    </AboutContainer>
  </Section>
);

const Section = styled.section.attrs({ className: 'pt-16 pb-4' })``;

const AboutContainer = styled(Container).attrs({
  className: 'md:flex',
})``;

const PortaitContent = styled.div.attrs({
  className: 'flex flex-1 justify-center mb-16',
})``;

const Portrait = styled.picture`
  max-width: 80%;
`;

const Content = styled.div.attrs({ className: 'flex-1' })``;

const Title = styled.h2.attrs({
  className: 'text-2xl mt-12 sm:mt-0 md:mt-12 font-light uppercase',
})`
  &:after {
    content: '';
    display: block;
    margin-top: 16px;
    width: 80px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  span {
    font-weight: 600;
  }
`;

export default About;
