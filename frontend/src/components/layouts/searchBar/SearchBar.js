import React, { useState } from 'react'
import './SearchBar.css'
import { BsSearch } from 'react-icons/bs'
import { useNavigate  } from "react-router-dom";

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
        <section>
            <form onSubmit={handleSubmit}>
                <select value={id} onChange={((e) => setId(e.target.value))}>
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
                    value={search}    
                />
                <button type="submit">
                    <BsSearch />
                </button>
            </form>
        </section>
    )
}