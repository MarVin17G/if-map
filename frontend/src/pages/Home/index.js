import React, { useEffect, useState } from "react";
import Api from "./../../services/api";

import Header from '../../components/header';
import Footer from '../../components/footer';
import SearchBar from "../../components/searchBar";

import './style.css';

export default function Home () {
    const [diretorias, setDiretorias] = useState([]);

    useEffect(() => {
        Api
            .get('/diretorias')
            .then((res) => setDiretorias(res.data))
            .catch((err) => {
                console.error("Error " + err);
            });
    }, []);
    
    return (
        <>
            <Header />
            <div className="SearchDiv">
                <h1>Para onde você quer ir agora?</h1>
                <SearchBar diretorias={diretorias} />
            </div>
            <Footer />
        </>
    );
}