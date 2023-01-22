import { useEffect, useState } from 'react';
import Api from '../../sevices/Api'

import Header from '../../components/header/Header';
import DiretoriaCard from '../../components/diretoriaCard/DiretoriaCard';
import Footer from '../../components/footer/Footer';

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