import React, {useEffect, useState} from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const addExternalCss = src => {
  const l = document.createElement('link');
  l.setAttribute('rel', 'stylesheet');
  l.setAttribute('href', src);
  document.body.appendChild(l);
};

const addScript = (src, next) => {
  const s = document.createElement('script');
  s.setAttribute('src', src);
  s.async = true;

  document.body.appendChild(s);
  s.onload = next;
};

const _NexusWrapper = ({className}) => <div id="nexus" className={className} />;
const NexusWrapper = styled(_NexusWrapper)`
  background-color: #123;
  color: '#eee';
  height: 100vh;
`;

const MapPage = () => {
  useEffect(() => {
    const [, id] = document.URL.split('/map/');

    addExternalCss('https://static.ptgem.com/apps/nexus-0.0.4.css');
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
