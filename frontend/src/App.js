import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Routes
import { Home, ProductDetails, Cart } from './routes';
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
      </Routes>
    </div>
  );
}

export default App;
