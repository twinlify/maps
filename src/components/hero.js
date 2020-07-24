import React from 'react';
import style from './hero.module.css';
import Image from './image';

const Hero = () => (
  <div className={style.hero}>
    <Image wrapperClassName={style.image} projectId="global" assetId="hero" />
    <div className={style.heroOverlay} />
    <div className={style.content}>
      <h1 className={style.title}>Twinlify</h1>
      <p className={style.punchLine}>View things differently.</p>
    </div>
  </div>
);

export default Hero;
