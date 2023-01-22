import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Home from './pages/Home/Home.js';
import Ambientes from './pages/Ambientes/Ambientes.js';
import Diretorias  from './pages/Diretorias/Diretorias.js'
import MapaDoIF from './pages/MapaDoIF/MapaDoIF';
import MenuAmbiente from './pages/MenuAmbiente/MenuAmbiente';
import GuiaFoto from './pages/guiaFoto/GuiaFoto';
import GuiaMapa from './pages/guiaMapa/GuiaMapa';
import GuiaVideo from './pages/guiaVideo/GuiaVideo'

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
          <Route path='/diretorias' element={<Diretorias />} />
          <Route path='/mapaGeral' element={<MapaDoIF />} />
          <Route path='/menuAmbiente' element={<MenuAmbiente/>} />
          <Route path='/guiaVideo' element={<GuiaVideo />} />
          <Route path='/guiaFoto' element={<GuiaFoto />} />
          <Route path='/guiaMapa' element={<GuiaMapa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);