import React from 'react';
import styled from 'styled-components';

import '../index.css';
import '../main.css';

import { Hero, Nav, Footer, Layout, SEO, About } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>
      <Nav />
      <Hero />
      <About />
    </Page>

    <Footer />
  </Layout>
);

const Page = styled.main.attrs({ className: 'relative bg-white' })`
  margin-bottom: 12rem;
`;

export default IndexPage;
