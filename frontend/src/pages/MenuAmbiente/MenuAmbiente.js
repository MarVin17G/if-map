import React, { useState, useEffect } from "react";
import Api from '../../sevices/Api';
import { useSearchParams } from "react-router-dom";

export default function MenuAmbiente () {
    const [ searchParams ] = useSearchParams();
    const [ ambiente, setAmbiente ] = useState();
    
    const id = searchParams.get('id')

    useEffect(() => {
        Api
            .get(`/ambientes/${id}`)
            .then((res) => setAmbiente(res.data))
            .catch((err) => {
                console.error("Erro inesperado!" + err);
            });
    }, []);

    return (
       <>
            
       </> 
    )
}