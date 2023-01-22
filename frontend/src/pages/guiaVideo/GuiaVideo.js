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
                width="800" 
                height="500" 
                src="https://www.youtube.com/embed/d_qGO4GrbQM" 
                title="" 
                frameborder="0" 
                allow="accelerometer; 
                       autoplay; 
                       clipboard-write; 
                       encrypted-media; 
                       gyroscope; 
                       picture-in-picture; 
                       web-share" 
                       allowfullscreen
                ></iframe>
            <Footer />
        </>
    )
}