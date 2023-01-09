import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './components/pages/Home';
import Ambientes from './components/pages/Ambientes';

import './index.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path='/' element={<Home />} />
          <Route path='/diretorias' element={<Ambientes />} />
          {/* Adicionar as outras rotas */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);