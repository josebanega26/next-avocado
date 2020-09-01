import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const router = useRouter();
  return (
    <div>
      <p> Product Page {router.query.id}</p>
    </div>
  );
};

export default ProductItem;
