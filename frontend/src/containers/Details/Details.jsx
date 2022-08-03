import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

import './Details.scss';

const Details = () => {
  let params = useParams();

  const [product, setProduct] = useState({});

  const fetchProduct = async () => {
    const { data } = await axios.get(`/api/products/${params.id}`);

    setProduct(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className='app__productDetails-container'>
        <img src={product.image} alt={product.name} />

        <div className="app__productDetails-container-content">
          <h2>{product.name}</h2>
          <p>Price: <span className='bold'>${product.price}</span></p>
          <p>Reviews: 4 x</p>
          <p>{product.description}</p>
          <p>Status: {product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</p>
          <button className='btn-primary'>Add to cart</button>
        </div>
    </div>
  )
}

export default Details