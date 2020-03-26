import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const DemoCard = ({name, config}) => (
  <div>
    <Link to={`/map/?id=${config}`}>{name}</Link>
  </div>
);

DemoCard.propTypes = {
  name: PropTypes.string,
  config: PropTypes.string
};

DemoCard.defaultProps = {
  name: '',
  config: ''
};

export default DemoCard;
