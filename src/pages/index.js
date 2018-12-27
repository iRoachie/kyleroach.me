import React from 'react';
import styled from 'styled-components';
import { screens } from '../../tailwind';

import '../index.css';
import '../main.css';

import { Hero, Nav, Footer, Layout, SEO, About, Skills } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>
      <Nav />
      <Hero />
      <About />
      <Skills />
    </Page>

    <Footer />
  </Layout>
);

const Page = styled.main.attrs({ className: 'relative bg-white' })`
  margin-bottom: 12rem;

  @media (min-width: ${screens.sm}) {
    margin-bottom: 10rem;
  }
`;

export default IndexPage;
