import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ items, title }) => {
  const itemsHandle = () => (
    items
      .filter((item, index) => index < 4)
      .map(item => (
        <CollectionItem
          key={item.id}
          {...item} />
      )    
    )
  );

  return (
    <div className="preview-collection">
      <h1 className="preview-collection__title">
        {title}
      </h1>
      <div className="preview-collection__content">
        {itemsHandle()}
      </div>
    </div>
  );
};

export default PreviewCollection;
