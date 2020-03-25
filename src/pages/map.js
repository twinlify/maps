import React, {useEffect, useState} from 'react';

const addScript = (src, next) => {
  const s = document.createElement('script');
  s.setAttribute('src', src);
  s.async = true;

  document.body.appendChild(s);
  s.onload = next;
};

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

  return <div id="nexus"></div>;
};

export default MapPage;
