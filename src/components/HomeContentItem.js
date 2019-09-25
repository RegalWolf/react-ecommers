import React from 'react';

import '../styles/HomeContentItemStyled.scss';

const HomeContentItem = ({ item }) => (
  <div className="home-content-item">
    <div className="home-content-item__box">
      <h1 className="home-content-item__title">{item}</h1>
      <span className="home-content-item__subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default HomeContentItem;
