import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './components/pages/Home/Home.js';
import Ambientes from './components/pages/Ambientes/Ambientes.js';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/ambientes' element={<Ambientes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);