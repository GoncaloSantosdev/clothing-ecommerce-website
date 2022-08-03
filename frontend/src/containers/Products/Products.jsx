import React from 'react';
import { Product } from '../../components';
import { productsData } from '../../data/productsData';

import './Products.scss';

const Products = () => {
  return (
      <div className="app__home-products container">
        {productsData.map((product) => (
          <Product product={product}/>
        ))}
      </div>
  )
}

export default Products