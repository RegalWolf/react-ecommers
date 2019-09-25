import React from 'react';

import './MenuItem.scss';

const HomeContentItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div className="menu-item__background"
      style={{ backgroundImage: `url(${imageUrl})` }}></div>
    <div className="menu-item__box">
      <span className="menu-item__title">{title}</span>
      <span className="menu-item__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default HomeContentItem;
