import React from 'react';
import style from './footer.module.css';
// import SocialLinks from './social-links';

const Footer = ({siteTitle}) => (
  <footer className={style.footer}>
    <p className={style.texts}>
      <span
        className={style.contact}
        onClick={() => window.open('mailto:contact@twinlify.com', '_self')}
      >
        contact us
      </span>
      <h5>Twinlify © {new Date().getFullYear()}</h5>
    </p>
    {/* <SocialLinks className={style.links} /> */}
  </footer>
);

export default Footer;
