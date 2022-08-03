import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Routes
import { Home, ProductDetails } from './routes';
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
      </Routes>
    </div>
  );
}

export default App;
