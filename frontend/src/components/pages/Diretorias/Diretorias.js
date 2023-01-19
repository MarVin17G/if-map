import react, { useEffect, useState } from 'react';
import Api from '../../../sevices/Api'

import Header from '../../layouts/header/Header';
import DiretoriaCard from '../../layouts/diretoriaCard/DiretoriaCard';
import Footer from '../../layouts/footer/Footer';

export default function Diretorias () {
    const [diretorias, setDiretorias] = useState([]);

    useEffect(() => {
        Api 
            .get('/diretorias')
            .then((res) => setDiretorias(res.data))
            .catch((error) => {
                console.log("erro" + error)
            })
    },  []);
    
    return (
        <>
            <Header />
            <DiretoriaCard items={diretorias} />
            <Footer />
        </>
    )
}