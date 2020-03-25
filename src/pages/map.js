import React, {useEffect, useState} from 'react';

const fetchConfig = async id => {
  const url = `https://connections.ptgem.com/nimbus/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const MapPage = () => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const [, id] = document.URL.split('/map/');

    fetchConfig(id).then(config => {
      setConfig(config);
    });
  }, []);

  return config ? (
    <p>map for {JSON.stringify(config, null, 2)}</p>
  ) : (
    <p>loading config...</p>
  );
};

export default MapPage;
