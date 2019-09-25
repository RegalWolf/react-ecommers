import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const Header = () => {
  return (
    <header className="header">
      <Link className='header-box' to="/">
        <Logo className='header-box__logo' />
      </Link>
      <div className="header-menu">
        <Link to='/shop' className='header-menu__item'>
          <span className='header-menu__title'>
            SHOP
          </span>
        </Link>
        <Link to='/shop' className='header-menu__item'>
          <span className='header-menu__title'>
            CONTACT
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
