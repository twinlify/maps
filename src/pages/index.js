import React from 'react';

import DemoCard from '../components/demo-card';
import Layout from '../components/layout';
import SEO from '../components/seo';

const demos = [
  {
    name: 'Nice Tramway',
    config: 'nice.stations'
  },
  {
    name: 'Vitry pipes',
    config: 'vitry.config'
  }
];

const Demos = () => (
  <div>
    {demos.map(demo => (
      <DemoCard {...demo} />
    ))}
  </div>
);

const IndexPage = () => (
  <Layout>
    <SEO title="Maps" keywords={[`gatsby`, `maps`, `ptgem`]} />

    <Demos />
  </Layout>
);

export default IndexPage;
