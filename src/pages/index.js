import React from 'react';
import styled from 'styled-components';

import '../index.css';
import '../main.css';

import { Hero, Nav, Footer, Layout, SEO, Container } from '../components';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>
      <Nav />
      <Hero />

      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
    </Page>

    <Footer />
  </Layout>
);

const Page = styled.main.attrs({ className: 'relative bg-white' })`
  margin-bottom: 12rem;
`;

export default IndexPage;
