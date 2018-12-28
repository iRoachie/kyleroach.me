import React from 'react';
import styled from 'styled-components';
import { screens } from '../../tailwind';

import Container from './Container';
import image_jpg from '../images/hero.jpg';
import image_webp from '../images/hero.webp';

export default () => (
  <Hero>
    <Cover />

    <Content>
      <Pre>Hey There! I'm</Pre>
      <Name>Kyle Roach</Name>
      <Blurb>
        Enthusiastic Developer with a Hint of Design
        <br />
        Creating. Learning. Ready
      </Blurb>

      <Button>learn more</Button>
    </Content>
  </Hero>
);

const Hero = styled.section.attrs({
  className: 'w-full z-0 relative flex justify-end text-white',
})`
  background-size: cover;
  margin-top: -105px;
  padding: 5rem 0 2.5rem;
  background-position: right center;
  filter: saturate(20%) contrast(180%);

  @media (min-width: 350px) {
    margin-top: -85px;
  }

  .webp & {
    background-image: url(${image_webp});
  }

  .no-webp & {
    background-image: url(${image_jpg});
  }
`;

const Content = styled(Container).attrs({
  className: 'flex flex-col items-end z-20',
})`
  margin-right: 0;

  @media (min-width: ${screens.md}) {
    margin-right: auto;
  }
`;

const Cover = styled.div.attrs({
  className: 'absolute w-full h-full pin-t pin-l z-10',
})`
  background-color: rgba(51, 51, 51, 0.2);
  transition: 500ms ease-in-out;

  @media (min-width: ${screens.xl}) {
    opacity: 0;
  }
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

const Button = styled.button.attrs({
  className:
    'uppercase text-white font-heading text-xs font-bold cursor-pointer',
})`
  padding: 10px 20px;
  letter-spacing: 2px;
  border: 2px solid #fff;
  transition: 300ms ease-in-out;

  &:hover {
    background: #000;
    background-color: var(--primary);
    border-color: var(--primary);
  }
`;
