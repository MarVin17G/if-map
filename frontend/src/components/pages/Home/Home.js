import React, { useState } from "react"
import { useNavigate  } from "react-router-dom";

import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';

import { BsSearch } from 'react-icons/bs'

export default function Home () {
    const [search, setSearch] = useState("")
    const [id, setId] = useState()

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search && !id) return

        navigate(`/ambientes?search=${search}&id=${id}`)
    }

    return (
        <>
            <Header />
            <section>
                <form onSubmit={handleSubmit}>
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
            <Footer />
        </>
    )
}