import React from 'react';
import { Routes, Route } from 'react-router-dom';
// Routes
import { Home } from './routes';
// Layout
import { Navbar } from './layout';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
