import React, { useState, useEffect } from "react";
import Api from '../../services/api';
import { useSearchParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './MenuAmbiente.css';

import Header from './../../components/header';
import Footer from './../../components/footer';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { AiOutlinePicture } from 'react-icons/ai';
import { MdOutlineOndemandVideo } from 'react-icons/md';

export default function MenuAmbiente () {
    const [ searchParams ] = useSearchParams();
    const [ ambiente, setAmbiente ] = useState([]);
    
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
            <div className="div_menu_ambiente">
                <Link to={`/guiaFoto/${ambiente.ambienteId}`}>
                    <div className="cartao_dir cartao_dir_menu">
                        <h3 className="title title_menu">Guia com foto</h3>
                        <div class="bar bar_menu">
                            <div class="emptybar empty_menu"></div>
                            <div class="filledbar filledbar_menu"></div>
                        </div>
                        <div className="icon_menu">
                            <AiOutlinePicture />
                        </div>
                    </div>
                </Link>
                <Link to={`/guiaVideo`}>
                    <div class="cartao_dir cartao_dir_menu">
                        <h3 className="title title_menu">Guia com Video</h3>
                        <div class="bar bar_menu">
                            <div class="emptybar emptybar_menu"></div>
                            <div class="filledbar filledbar_menu"></div>
                        </div>
                        <div className="icon_menu">
                            <MdOutlineOndemandVideo />
                        </div>
                    </div>
                </Link>
                <Link to={`/guiaMapa/${ambiente.ambienteId}`}>
                    <div className="cartao_dir cartao_dir_menu">
                        <h3 class="title title_menu">Mapa</h3>
                        <div class="bar bar_menu">
                            <div class="emptybar emptybar_menu"></div>
                            <div class="filledbar filledbar_menu"></div>
                        </div>
                        <div className="icon_menu">
                            <FaMapMarkedAlt />
                        </div>
                    </div>
                </Link>
            </div>  
            <Footer />
       </> 
    )
}