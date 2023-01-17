import React, { useState } from "react"

import Header from '../../layouts/header/Header';
import Footer from '../../layouts/footer/Footer';
import SearchBar from "../../layouts/searchBar/SearchBar";

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