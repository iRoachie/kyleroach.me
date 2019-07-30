import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import { Container } from './styles';

const About = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "portrait.png" }) {
        childImageSharp {
          fixed(quality: 100, width: 360) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section id="about">
      <AboutContainer>
        <PortraitContent>
          <Portrait alt="Kyle Roach" fixed={data.file.childImageSharp.fixed} />
        </PortraitContent>

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
};

const Section = styled.section.attrs({ className: 'pt-16 pb-4' })``;

const AboutContainer = styled(Container).attrs({
  className: 'md:flex',
})``;

const PortraitContent = styled.div.attrs({
  className: 'flex flex-1 justify-center mb-16',
})``;

const Portrait = styled(Img)`
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
