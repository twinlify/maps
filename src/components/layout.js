import React from 'react';
import PropTypes from 'prop-types';
import {useStaticQuery, graphql} from 'gatsby';

import SEO from './seo';
import './layout.css';

const Layout = ({children}) => (
  <>
    <SEO title="Maps" keywords={[`gatsby`, `maps`, `ptgem`]} />
    {children}
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
