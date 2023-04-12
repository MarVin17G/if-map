import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from '../../services/api';
import './GuiaVideo.css';

import Header from './../../components/header';
import Footer from './../../components/footer';

export default function GuiaVideo () {
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
        <div className="guia-video__container">
            <Header />
            <iframe 
                src="https://player.vimeo.com/video/794020989?h=dd81025197&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"
                width="640" 
                height="1170" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <Footer />
        </div>
    );
}