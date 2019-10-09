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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={['kyle', 'roach', 'barbados', 'developer', 'gatsby', 'react']}
    />

    <Page>
      <Nav />
      <Hero />

      <About />

      <Skills />

      <Portfolio />

      <OSS repos={Object.values(data.github)} />
    </Page>

    <Footer />
  </Layout>
);

export const pageQuery = graphql`
  {
    github {
      a: repository(
        owner: "react-native-elements"
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
