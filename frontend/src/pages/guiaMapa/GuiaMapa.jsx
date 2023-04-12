import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from '../../services/api';
import './GuiaMapa.css';

import Header from '../../components/header';
import Footer from '../../components/footer';

import mapaDIATINF from '../../assets/imgs/Mapa-DIATINF.png';

export default function GuiaMapa() {
    const [ searchParams ] = useSearchParams();
    const [ ambiente, setAmbiente ] = useState();
    
    const id = searchParams.get('id');

    useEffect(() => {
        Api
            .get(`/ambientes/${id}`)
            .then((res) => setAmbiente(res.data))
            .catch((err) => {
                console.error("Erro inesperado!" + err);
            });
    }, []); 

    return (
        <div className="guia-mapa__container">
            <Header />
                <img src={mapaDIATINF} />
            <Footer />
        </div>
    );
}