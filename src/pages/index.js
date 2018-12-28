import React from 'react';
import styled from 'styled-components';
import { screens } from '../../tailwind';
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
      <OSS repos={Object.values(data.github)} />
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
  {
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
    github {
      a: repository(
        owner: "react-native-training"
        name: "react-native-elements"
      ) {
        ...Info
      }
      b: repository(owner: "DefinitelyTyped", name: "DefinitelyTyped") {
        ...Info
      }
      c: repository(owner: "iRoachie", name: "react-native-material-tabs") {
        ...Info
      }
      d: repository(owner: "oblador", name: "react-native-collapsible") {
        ...Info
      }
      e: repository(owner: "aksonov", name: "react-native-tableview") {
        ...Info
      }
      f: repository(owner: "umhan35", name: "react-native-search-bar") {
        ...Info
      }
    }
  }

  fragment Info on GitHub_Repository {
    id
    name
    description
    stargazers {
      totalCount
    }
    url
    primaryLanguage {
      name
      color
    }
  }
`;

export default IndexPage;
