import PropTypes from 'prop-types';
import React from 'react';
import style from './demos.module.css';
import Image from './image';
import {ReactComponent as PlayIcon} from '../icons/play.svg';

const propTypes = {
  content: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
  })
};

const handleClick = url => () => window.open(url, '_blank');

const Demo = ({content}) => (
  <div className={style.demo} onClick={handleClick(content.url)}>
    {content.image && (
      <Image
        wrapperClassName={style.image}
        projectId="demos"
        assetId={content.image}
      />
    )}

    <PlayIcon className={style.playIcon} />
  </div>
);

Demo.propTypes = propTypes;

const Demos = ({demos}) => (
  <section className={style.wrapper}>
    <h2 className={style.title}>Demos</h2>
    <div className={style.demos}>
      {demos.map(demo => (
        <Demo key={demo.id} content={demo} />
      ))}
    </div>
  </section>
);

export default Demos;
