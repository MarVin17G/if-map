import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate  } from "react-router-dom";

import './style.css'

export default function SearchBar () {
    const [search, setSearch] = useState("")
    const [id, setId] = useState("")

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search && !id) return

        navigate(`/ambientes?search=${search}&id=${id}`)
    }
    
    return (
        <section className="search_bar_container">
            <form onSubmit={handleSubmit} className="search_bar_form">
                <select value={id} onChange={((e) => setId(e.target.value))} className="search_bar_select">
                    <option value="">Selecione...</option>
                    <option value="1">Diatinf</option>
                    <option value="2">Diaren</option>
                    <option value="3">Diac</option>
                    <option value="4">Diacin</option>
                    <option value="5">Diacon</option>
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
    )
}