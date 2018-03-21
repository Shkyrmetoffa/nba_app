import React from 'react';
import { Link } from 'react-router-dom';

import SideNav from './SideNav/sideNav';
import FontAwesome from 'react-fontawesome';
import './header.css';

const Header = (props) => {
    const navBars = () => (
      <div className='bars'>
        <FontAwesome 
          name='bars'
          onClick={props.onOpenNav}
          style={{
            color: '#dfdfdf',
            padding: '10px',
            cursor: 'pointer'
          }}
        />
      </div>
    );

    const logo = () => (
        <Link to="/" className='logo'>
          <img alt="nba_logo" src="./images/nba.png" style={{ height: '50px', width: '50px' }}/>
        </Link>
    );

    return (
      <header className='header'>
        <SideNav {...props} />
        <div className='headerOpt'>
          {navBars()}
          {logo()}
        </div>
      </header>
    )
};

export default Header;
