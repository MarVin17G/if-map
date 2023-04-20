import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

import GuiaVideo from './pages/guiaVideo/GuiaVideo';
import GuiaMapa from './pages/guiaMapa/GuiaMapa';
import MenuAmbiente from './pages/MenuAmbiente';
import NovoGestor from './pages/NovoGestor';
import Diretorias from './pages/Diretorias';
import Ambientes from './pages/Ambientes';
import Gestores from './pages/Gestores';
import MapaDoIF from './pages/MapaDoIF';
import Home from './pages/Home';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/ambientes" element={<Ambientes />} />
          <Route path="/diretorias" element={<Diretorias />} />
          <Route path="/gestores" element={<Gestores />} />
          <Route path="/gestor/novo" element={<NovoGestor />} />
          <Route path="/gestor/:id" element={<NovoGestor />} />
          <Route path="/mapaGeral" element={<MapaDoIF />} />
          <Route path="/menuAmbiente" element={<MenuAmbiente />} />
          <Route path="/guiaVideo" element={<GuiaVideo />} />
          <Route path="/guiaMapa" element={<GuiaMapa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
