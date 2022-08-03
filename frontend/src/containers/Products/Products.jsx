import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../../components';

import './Products.scss';

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products');

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
      <div className="app__home-products container">
        {products.map((product) => (
          <Product product={product}/>
        ))}
      </div>
  )
}

export default Products