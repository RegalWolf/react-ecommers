import React, { useState } from 'react';

import '../styles/HomeContentStyled.scss';
import HomeContentItem from './HomeContentItem';

const HomeContent = () => {

  const [homeContentItems] = useState([
    'hats', 'jackets', 'sneakers', 'womens', 'mens'
  ]);

  const contentListHandle = () => (
    homeContentItems.map((item, key) => (
      <HomeContentItem key={key} item={item} />
    ))
  );

  return (
    <div className="home-content">
      <div className="home-content__list">
        {contentListHandle()}
      </div>
    </div>
  );
};

export default HomeContent;
