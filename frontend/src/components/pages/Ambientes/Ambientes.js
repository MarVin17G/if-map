import AmbienteCard from "../../layouts/ambientes/AmbienteCard";
import React, { useEffect, useState } from "react";
import Api from '../../../sevices/Api'

export default function Ambientes () {
    const [ambientes, setAmbientes] = useState();
    const test = [
        {
            "id": 1,
            "name": "ambientq 01"
        },
        {
            "id": 2,
            "name": "ambiente 02"
        },
    ]

    useEffect(() => {
        Api
            .get('/ambientes')
            .then((res) => setAmbientes(res.data))
            .catch((err) => {
                console.error("Erro inesperado!" + err);
            });
    }, []);
    
    return (
        <AmbienteCard items={test} />
    )
}