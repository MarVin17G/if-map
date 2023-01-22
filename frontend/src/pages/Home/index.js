import React from "react"

import Header from '../../components/header';
import Footer from '../../components/footer';
import SearchBar from "../../components/searchBar";

import './style.css'

export default function Home () {
    return (
        <>
            <Header />
            <div className="SearchDiv">
                <h1>Para onde você quer ir agora?</h1>
                <SearchBar />
            </div>
            <Footer />
        </>
    )
}