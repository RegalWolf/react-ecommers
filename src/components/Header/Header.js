import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../utils/Firebase/Firebase';

import './Header.scss';
import { ReactComponent as Logo } from '../../assets/images/Logo.svg';

const Header = ({ currentUser }) => {
  const menuHandle = () => {
    return currentUser ? (
      <div onClick={() => auth.signOut()} className='header-menu__item'>
        <span className="header-menu__title">
          SIGN OUT
        </span>
      </div>
    ) : (
      <Link to='/signin' className='header-menu__item'>
        <span className='header-menu__title'>
          SIGN IN
        </span>
      </Link>
    );
  }

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
        {menuHandle()}
      </div>
    </header>
  );
};

export default Header;
