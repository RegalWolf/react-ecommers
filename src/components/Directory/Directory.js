import React, { useState } from 'react';

import './Directory.scss';
import MenuItem from '../MenuItem/MenuItem';

const Directory = () => {

  const [sections] = useState([
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      linkUrl: 'hats'
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      linkUrl: 'jackets'
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      linkUrl: 'sneakers'
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      size: 'large',
      linkUrl: 'womens'
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      size: 'large',
      linkUrl: 'mens'
    }
  ]);

  const sectionsHandle = () => (
    sections.map(({ id, ...section }) => (
      <MenuItem key={id} { ...section } />
    ))
  );

  return (
    <div className="directory">
      <div className="directory__list">
        {sectionsHandle()}
      </div>
    </div>
  );
};

export default Directory;
