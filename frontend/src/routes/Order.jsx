import React, { useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from '../components';
import { getOrderDetails } from '../redux/actions/orderActions';

import './PlaceOrder.scss';
import './Order.scss';

const Order = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const orderId = params.id;
  console.log(orderId);
  
  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log(order);

  if(!loading){
    const formatPrices = (num) => {
        return (Math.round(num * 100) / 100).toFixed(2);
      };
    
      order.itemsPrice = formatPrices(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0));     
  }


useEffect(() => {
    if(!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId));
    }
}, [order, orderId]) 


  return loading ? (
    <Loader /> ) : (
    <div className='app__order container'>
        <h1>Order {order._id}</h1>
        <div className="app__placeorder-shipping">
            <h2>Shipping</h2>
            <p><span className='bold'>Name: </span>{order.user.name} </p> 
            <p><span className='bold'>Email: </span> <a href={`mailto: ${order.user.email}`}>{order.user.email}</a></p>
            <p><span className='bold'>Adress:</span> {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}</p>
        </div>
        <div className="app__placeorder-method">
            <h2>Payment Method</h2>
            <p><span className='bold'>Method:</span> {order.paymentMethod}</p>
        </div>
        <div className="app__placeorder-items">
            <h2>Order Items</h2>
            {order.orderItems.length === 0 ? alert('Order is empty') : (
                <div className="app__placeorder-items-list">
                    {order.orderItems.map((item, index) => (
                        <Link to={`/product/${item.product}`}>
                        <div className="app__placeorder-item" key={index}>
                            <img src={item.image} alt={item.name} />
                            <div className="app__placeorder-item-info">
                                    <p>{item.name}</p>
                                <p>{item.qty} x ${item.price} = ${item.qty * item.price}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
        <div className="app__placeorder-orders">
            <h2>Order Summary</h2>
            <div className="app__placeorder-orders-info">
                <p>Price: ${order.itemsPrice}</p>
                <p>Shipping: ${order.shippingPrice}</p>
                <p>Total: ${order.totalPrice}</p>
            </div>
        </div> 
    </div>
  )
}

export default Order