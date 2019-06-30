import React from 'react';
import styled from 'styled-components';

import { Container } from '../styles';
import { screens } from 'tailwindcss/defaultTheme';

import Repo from './Repo';

const OSS = ({ repos }) => (
  <Section>
    <Container>
      <Title>
        Open <span>Source</span>
      </Title>

      <Sub>
        Along with giving back to the community, Open Source is great way to
        connect with developers from all over the world.
      </Sub>

      <Sub>
        Here's some of my projects along with some I contribute to. Trust me,
        it's fun.
      </Sub>

      <Grid>
        {repos.map(a => (
          <Repo repo={a} key={a.id} />
        ))}
      </Grid>
    </Container>
  </Section>
);

const Section = styled.section.attrs({
  className: 'pt-8 pb-16 text-center bg-white',
})``;

const Title = styled.h2.attrs({
  className: 'text-2xl my-4 font-light uppercase',
})`
  span {
    font-weight: 600;
  }
`;

const Sub = styled.p.attrs({ className: 'mx-auto lg:w-2/3' })``;

const Grid = styled.div.attrs({
  className: 'mt-16',
})`
  display: grid;
  grid-column-gap: 1.5rem;
  grid-row-gap: 1.5rem;

  @media (min-width: ${screens.sm}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: ${screens.lg}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export default OSS;
