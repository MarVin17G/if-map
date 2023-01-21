import './MapaDoIF.css'
import React from 'react'
import mapaIMG from './../../img/Mapa-ifrn.jpg'

import Header from '../../layouts/header/Header'
import Footer from '../../layouts/footer/Footer'

export default function MapaDoIF () {
    return (
        <>
            <Header />
            <section className='div_section_map_if'>
                <img src={mapaIMG} alt='imagem geral do ifrn'/>
            </section>
            <Footer />
        </>
    )
}