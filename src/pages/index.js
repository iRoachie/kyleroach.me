import React from 'react';
import styled from 'styled-components';
import { screens } from '../../tailwind';

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
} from '../components';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Page>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Portfolio projects={data.allContentfulProject.edges} />
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

export const pageQuery = graphql`
  query Projects {
    allContentfulProject {
      edges {
        node {
          id
          title
          thumbnail {
            fluid(maxWidth: 300, maxHeight: 300) {
              ...GatsbyContentfulFluid
            }
          }
          tags {
            id
            name
          }
        }
      }
    }
  }
`;

export default IndexPage;
