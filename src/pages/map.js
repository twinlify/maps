import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const addScript = (src, next) => {
  const s = document.createElement('script');
  s.setAttribute('src', src);
  s.async = true;

  document.body.appendChild(s);
  s.onload = next;
};

const _NexusWrapper = ({className}) => <div id="nexus" className={className} />;
const NexusWrapper = styled(_NexusWrapper)`
  background-color: #789;
  height: 100vh;
`;

const MapPage = () => {
  useEffect(() => {
    const [, id] = document.URL.split('/map/');

    addScript('https://static.ptgem.com/apps/nexus-0.0.4.min.js', () => {
      window.Nexus.create({
        container: 'nexus',
        config: `https://connections.ptgem.com/nimbus/${id}`
      });
    });
  }, []);

  return <NexusWrapper />;
};

export default MapPage;
