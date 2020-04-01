import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';

import DemoCard from '../components/demo-card';
import Layout from '../components/layout';
import Header from '../components/header';

const demos = [];

const Demos = () => (
  <div>
    {demos.map(demo => (
      <DemoCard {...demo} />
    ))}
  </div>
);

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Demos />
    </Layout>
  );
};

export default IndexPage;
