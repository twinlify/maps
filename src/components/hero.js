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
        <h1 className={style.title}>Twinlify</h1>
        <p className={style.punchLine}>{description}</p>
      </div>
    </div>
  );
};

export default Hero;
