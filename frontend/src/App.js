import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Routes
import { Home, ProductDetails, Cart, LogIn, Register, Profile, Shipping } from './routes';
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
      </Routes>
    </div>
  );
}

export default App;
