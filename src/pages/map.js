import React, {useEffect} from 'react';
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
  color: #eee;
  height: 100vh;
`;

const NEXUS_VERSION = '0.0.29';

const MapPage = () => {
  useEffect(() => {
    const [, id] = document.URL.split('/map/?id=');

    addExternalCss(`https://static.ptgem.com/apps/nexus-${NEXUS_VERSION}.css`);
    addScript(
      `https://static.ptgem.com/apps/nexus-${NEXUS_VERSION}.min.js`,
      () => {
        window.Nexus.create({
          container: 'nexus',
          config: `https://connections.ptgem.com/nimbus/${id}?t=${new Date().getTime()}`
        });
      }
    );
  }, []);

  return <NexusWrapper />;
};

export default MapPage;
