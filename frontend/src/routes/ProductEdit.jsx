import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../redux/actions/productActions';

const ProductEdit = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const productId = params.id;

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [stock, setStock] = useState(0);
  const [description, setDescription] = useState('');

  const productDetails = useSelector((state) = state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if(!product.name || product._id !== productId){
        dispatch(getUserDetails(userId))
    }
  })

  return (
    <div className='app__product-edit'>

    </div>
  )
}

export default ProductEdit