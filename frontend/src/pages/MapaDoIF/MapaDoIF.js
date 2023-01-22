import './MapaDoIF.css'
import React from 'react'
import mapaIMG from '../../assets/imgs/Mapa-ifrn.jpg'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

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