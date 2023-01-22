import React from "react"

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import SearchBar from "../../components/searchBar/SearchBar";

import './Home.css'

export default function Home () {
    return (
        <>
            <Header />
            <div className="SearchDiv">
                <h1>Procure pelo seu ambiente</h1>
                <SearchBar className="search" />
            </div>
            <Footer />
        </>
    )
}