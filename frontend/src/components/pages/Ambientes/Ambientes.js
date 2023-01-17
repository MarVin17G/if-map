import AmbienteCard from "../../layouts/ambienteCard/AmbienteCard";
import Header from "../../layouts/header/Header";
import Footer from "../../layouts/footer/Footer";

import React, { useEffect, useState } from "react";
import Api from '../../../sevices/Api'

import { useSearchParams } from "react-router-dom";

export default function Ambientes () {
    const [ambientes, setAmbientes] = useState([]);
    
    const [ searchParams ] = useSearchParams();
    
    const search = searchParams.get("search");
    const id = searchParams.get("id");

    var ambientesFiltrados
    
    if (search || id) {
        if (search && id) {
            const lowerNome = search.toLowerCase()
            
            const ambientesFiltradosNome = ambientes.filter ((ambiente) =>  
                ambiente.nome.toLowerCase().includes(lowerNome),        
            )
    
            ambientesFiltrados = ambientesFiltradosNome.filter ((ambiente) =>
                ambiente.diretoriaFk.toString() === id
            )
        } else if (id) {
            ambientesFiltrados = ambientes.filter ((ambiente) =>
                ambiente.diretoriaFk.toString() === id
            )
        } else if (search) {
            const lowerNome = search.toLowerCase()
    
            ambientesFiltrados = ambientes.filter ((ambiente) =>  
                ambiente.nome.toLowerCase().includes(lowerNome),        
            )
        } else {
            ambientesFiltrados = ambientes
        }    
    } else {
        ambientesFiltrados = ambientes
    }
    
    useEffect(() => {
        Api
            .get('/ambientes')
            .then((res) => setAmbientes(res.data))
            .catch((err) => {
                console.error("Erro inesperado!" + err);
            });
    }, []);

    return ( 
        <>
            <Header />
            <AmbienteCard items={ambientesFiltrados} />
            <Footer />
        </>
    )
}