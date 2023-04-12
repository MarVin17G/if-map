import React, { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate  } from "react-router-dom";
import Api from '../../services/api';

import './style.css';

export default function SearchBar ({ diretorias }) {
    const [search, setSearch] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!search && !id) return;

        let { data } = await Api.get('/ambientes');
        let ambientes = data.filter((ambiente) => ambiente.nome.includes(search));
        if (ambientes.length === 1) {
            navigate(`/menuAmbiente?id=${ambientes[0].ambienteId}`);
            return;
        }

        navigate(`/ambientes?search=${search}&id=${id}`);
    };
    
    return (
        <section className="search_bar_container">
            <form onSubmit={handleSubmit} className="search_bar_form">
                <select value={id} onChange={((e) => setId(e.target.value))} className="search_bar_select">
                    <option value="">Selecione...</option>
                    {diretorias?.map((diretoria) => 
                        <option value={diretoria.diretoriaId}>{diretoria.nome}</option>
                    )}
                </select>
                <input 
                    type="text" 
                    placeholder="Buscar..." 
                    onChange={((e) => setSearch(e.target.value))}
                    className="search_bar_input"
                    value={search}    
                />
                <button type="submit" className="search_bar_submit">
                    <BsSearch />
                </button>
            </form>
        
            
        </section>
    );
}