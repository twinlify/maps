import React from 'react';
import {graphql} from 'gatsby';

import Hero from '../components/hero';
import Highlights from '../components/highlights';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = ({data}) => {
  const highlights = data.allHighlightsYaml.edges.map(
    edge => edge.node.highlight
  );

  return (
    <Layout>
      <SEO title="Twinlify" keywords={[`maps`, `3d`, `IoT`]} />
      <Hero />
      <Highlights highlights={highlights} />
    </Layout>
  );
};

export const query = graphql`
  query {
    allHighlightsYaml {
      edges {
        node {
          highlight {
            id
            title
            description
            details
            image
          }
        }
      }
    }
  }
`;

export default IndexPage;
