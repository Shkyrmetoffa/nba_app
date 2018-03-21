import React from 'react';
import { Link } from 'react-router-dom';

import SideNav from './SideNav/sideNav';
import FontAwesome from 'react-fontawesome';
import style from './header.css';

const Header = (props) => {
console.log(props);
    const navBars = () => (
      <div className={style.bars}>
        <FontAwesome 
          name="bars"
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
        <Link to="/" className={style.logo}>
          <img alt="nba_logo" src="./images/nba.png"/>
        </Link>
    );

    return (
      <header className={style.header}>
        <SideNav {...props} />
        <div className={style.headerOpt}>
          {navBars()}
          {logo()}
        </div>
      </header>
    )
};

export default Header;
