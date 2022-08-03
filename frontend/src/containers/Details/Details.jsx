import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productsData } from '../../data/productsData';

import './Details.scss';

const Details = () => {
  let params = useParams();

  const product = productsData.find((p) => p._id === params.id);

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