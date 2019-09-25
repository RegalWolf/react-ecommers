import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => (
  <Link exact to={linkUrl} className={`${size} menu-item`}>
    <div className="menu-item__background"
      style={{ backgroundImage: `url(${imageUrl})` }} 
    />
    <div className="menu-item__box">
      <span className="menu-item__title">{title}</span>
      <span className="menu-item__subtitle">SHOP NOW</span>
    </div>
  </Link>
);

export default withRouter(MenuItem);
