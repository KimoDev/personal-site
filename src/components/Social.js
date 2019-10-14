import React from 'react';

import ig from '../images/icons/instagram-alt.svg';
import twitter from '../images/icons/twitter.svg';
import github from '../images/icons/github.svg';
import '../styles/social.scss';

const Social = () => {
  return (
    <div className="social-bar">
      <a href="https://www.instagram.com/kimo_dev"><img src={ig} alt="instagram-icon" className="social-icon" /></a>
      <a href="https://www.twitter.com/kimo_dev"><img src={twitter} alt="twitter-icon" className="social-icon" /></a>
      <a href="https://www.github.com/kimodev"><img src={github} alt="github-icon" className="social-icon"/></a>
    </div>
  );
}

export default Social;