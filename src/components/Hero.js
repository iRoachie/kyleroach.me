import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import BackgroundImage from 'gatsby-background-image';
import { screens } from 'tailwindcss/defaultTheme';

import { Container } from './styles';

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(quality: 100, maxHeight: 420) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Section
      fluid={data.file.childImageSharp.fluid}
      style={{
        backgroundPosition: 'right center',
      }}
      Tag="section"
    >
      <Cover />

      <Content>
        <Pre>Hey There! I'm</Pre>
        <Name>Kyle Roach</Name>
        <Blurb>
          Enthusiastic Developer with a Hint of Design
          <br />
          Creating. Learning. Ready
        </Blurb>

        <Button href="#" to="about" smooth duration={300}>
          learn more
        </Button>
      </Content>
    </Section>
  );
};

const Section = styled(BackgroundImage).attrs({
  className: 'w-full z-0 flex justify-end text-white',
})`
  margin-top: -105px;
  padding: 5rem 0 2.5rem;
  filter: saturate(20%) contrast(180%);

  #stacking-context-reset {
    margin-right: 0;

    @media (min-width: ${screens.md}) {
      margin: 0 auto;
    }
  }

  @media (min-width: 350px) {
    margin-top: -85px;
  }
`;

const Content = styled(Container).attrs({
  className: 'flex flex-col items-end z-20',
})``;

const Cover = styled.div.attrs({
  className: 'absolute w-full h-full top-0 left-0 z-10 xl:opacity-0',
})`
  background-color: rgba(51, 51, 51, 0.2);
  transition: 500ms ease-in-out;
`;

const Pre = styled.h4.attrs({
  className: 'font-heading uppercase font-semibold mt-8',
})`
  letter-spacing: 2px;
`;

const Name = styled.h1.attrs({
  className: 'mb-6 font-heading font-semibold',
})`
  font-size: 3.25rem;
  margin-top: 4px;
`;

const Blurb = styled.p.attrs({
  className: 'text-right mb-12 mt-0',
})`
  line-height: 1.5rem;
`;

const Button = styled(Link).attrs({
  className:
    'uppercase text-white font-heading text-xs font-bold cursor-pointer hover:bg-primary hover:border-primary',
})`
  padding: 10px 20px;
  letter-spacing: 2px;
  border: 2px solid #fff;
  transition: background-color 300ms ease-in-out, border-color 300ms ease-in-out;
`;

export default Hero;
