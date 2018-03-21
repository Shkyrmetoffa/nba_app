import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

const Footer = () => (
  <div className='footer'>
    <Link to="/" className='logo_footer'>
      <img alt="nba_logo" src="./images/nba.png" style={{ height: '30px', width: '30px' }}/>
    </Link>
    <div className='right'>
      @NBA 2018 All rights reserved.
    </div>
  </div>
);

export default Footer;