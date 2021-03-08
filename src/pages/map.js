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

const NEXUS_VERSION = '0.7.4';

const MapPage = () => {
  useEffect(() => {
    const [, query] = document.URL.split('/map/?');
    const searchParams = new URLSearchParams(query);
    const id = searchParams.get('id') || 'westgate';
    const lang = searchParams.get('lang') || 'en';

    addExternalCss(
      `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.css`
    );
    addScript(
      `https://static.twinlify.com/apps/nexus-${NEXUS_VERSION}.min.js`,
      () => {
        window.Nexus.create({
          containerId: 'nexus',
          clientId: 'twinlify',
          configId: id,
          lang
        });
      }
    );
  }, []);

  return <NexusWrapper />;
};

export default MapPage;
