import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useGetAmbiente } from '../../components/functions/getAmbiente';

import Header from '../../components/header';
import Footer from '../../components/footer';
import Api from '../../services/api';
import './GuiaMapa.css';

import mapaDIATINF from '../../assets/imgs/Mapa-DIATINF.png';

export default function GuiaMapa() {
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const id = searchParams.get('id');
  const ambiente = useGetAmbiente(id);
  return (
    <div className="guia-mapa__container">
      <Header />
      <img src={mapaDIATINF} alt="Mapa do if" />
      <Footer />
    </div>
  );
}
