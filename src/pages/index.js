import React from 'react';
import {graphql} from 'gatsby';

import Demos from '../components/demos';
import Hero from '../components/hero';
import Highlights from '../components/highlights';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({data}) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );

  const demos = data.allDemosYaml.edges.map(edge => edge.node.demo);

  const heroContent = data.heroYaml;

  return (
    <Layout>
      <SEO title="Twinlify" />
      <Hero content={heroContent} />
      <Highlights highlights={highlights} />
      <Demos demos={demos} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allDemosYaml {
      edges {
        node {
          demo {
            id
            title
            description
            image
            url
          }
        }
      }
    }
    allHighlightsYaml {
      edges {
        node {
          highlight {
            id
            title
            description
            image
          }
        }
      }
    }
    heroYaml {
      description
    }
  }
`;

export default IndexPage;
