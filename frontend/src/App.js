import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Routes
import { Home, ProductDetails, Cart, LogIn, Register, Profile, Shipping, Payment, PlaceOrder, Order } from './routes';
// Layout
import { Navbar } from './layout';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products/:id' element={<ProductDetails />} />
        <Route path="/cart">
          <Route path="" element={<Cart />} />
          <Route path=":id" element={<Cart />} />
        </Route>
        <Route path='/signIn' element={<LogIn />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
        <Route path='/order/:id' element={<Order />} />
      </Routes>
    </div>
  );
}

export default App;
