import './style.css'
import React from 'react'
import mapaIMG from '../../assets/imgs/Mapa-ifrn.jpg'

import Header from '../../components/header'
import Footer from '../../components/footer'

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