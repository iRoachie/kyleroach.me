import React from 'react';
import { graphql } from 'gatsby';

import '../index.css';
import '../main.css';

import {
  Hero,
  Nav,
  Footer,
  Layout,
  SEO,
  About,
  Skills,
  Portfolio,
  OSS,
  Page,
} from '../components';

const ProjectsPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={['kyle', 'roach', 'barbados', 'developer', 'gatsby', 'react']}
    />

    <Page>
      <Nav mode="light" />

      <Portfolio />
    </Page>

    <Footer />
  </Layout>
);

export default ProjectsPage;
