import React from 'react';
import { Link } from 'react-router-dom';

import style from './footer.css';
import { CURRENT_YEAR } from '../../config';

const Footer = () => (
  <div className={style.footer}>
    <Link to="/" className={style.logo_footer}>
      <img alt="nba_logo" src="./images/nba.png" style={{ height: '30px', width: '30px' }}/>
    </Link>
    <div className={style.right}>
      @NBA {CURRENT_YEAR} All rights reserved.
    </div>
  </div>
);

export default Footer;
