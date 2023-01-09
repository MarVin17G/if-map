import AmbienteCard from "../layouts/ambientes/AmbienteCard";
import React, { Component } from "react";
import axios from 'axios';

export default class Ambientes extends React.Component {
    state={
        ambientes:[]
    }

    componentDidMount() {
        axios.get('/ambientes').then(res => {
            const dados = res.data
            this.setState({ambientes:dados})
        })
    }

    render () {
        return (
            <AmbienteCard items={ambientes}/>
        )
    }
}