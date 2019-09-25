import React, { useState } from 'react';

import ShopData from './ShopData';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

const ShopPage = () => {
  const [collections] = useState(ShopData);

  const collectionHandle = () => (
    collections.map(collection => (
      <PreviewCollection
        key={collection.id}
        items={collection.items}
        title={collection.title} />
    ))
  );

  return (
    <>
      {collectionHandle()}
    </>
  );
};

export default ShopPage;
