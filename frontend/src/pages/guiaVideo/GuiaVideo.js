import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Api from '../../services/api';
import './GuiaVideo.css';

import Header from './../../components/header';
import Footer from './../../components/footer';

export default function MenuAmbiente () {
    const [ searchParams ] = useSearchParams();
    const [ ambiente, setAmbiente ] = useState();
    
    const id = searchParams.get('id')

    useEffect(() => {
        Api
            .get(`/ambientes/${id}`)
            .then((res) => setAmbiente(res.data))
            .catch((err) => {
                console.error("Erro inesperado!" + err);
            });
    }, []); 

    return (
        <>
            <Header />
            <iframe 
                src="https://player.vimeo.com/video/791712669?h=3bab67beaf" 
                width="640" 
                height="1170" 
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
            </iframe>
            <Footer />
        </>
    )
}