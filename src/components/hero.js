import React from 'react';

import style from './hero.module.css';
import Image from './image';

const Hero = ({content}) => {
  const {description} = content;

  return (
    <div className={style.hero}>
      <Image wrapperClassName={style.image} projectId="global" assetId="hero" />
      <div className={style.heroOverlay} />
      <div className={style.content}>
        <img className={style.logo} src="https://static.twinlify.com/logos/logo.svg" alt="Twinlify Logo"/>
        <p className={style.punchLine}>{description}</p>
      </div>
    </div>
  );
};

export default Hero;
