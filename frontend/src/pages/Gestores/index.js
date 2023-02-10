import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import GestorCard from '../../components/gestorCard';
import api from '../../services/api';
import './style.css';
import { useNavigate } from 'react-router-dom';

const Gestores = () => {
    const navigate = useNavigate();
    const [gestores, setGestores] = useState([]);

    const getGestores = async() => {
        try {
            let response = await api.get('/gestores');
            setGestores(response.data);
        } catch(err) {
            //
        }
    }

    const handleEdit = (id) => {
        navigate(`/gestor/${id}`);
    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/gestores/${id}`);
            getGestores();
        } catch(err) {
            //
        }
    }

    useEffect(() => {
        getGestores();
    },  []);
    
    return (
        <>
            <Header />
                <div className="gestores-container">
                    <h1>Gestores</h1>
                    <div className="gestores-list">
                        { gestores.map((gestor) => <GestorCard id={gestor.gestorId} nome={gestor.nome} email={gestor.email} matricula={gestor.matricula} onEdit={handleEdit} onDelete={handleDelete} />)  }
                    </div>
                    <button className="gestor-button" onClick={() => navigate('/gestor/novo')}>Cadastrar Novo</button>
                </div>
            <Footer />
        </>
    );
}

export default Gestores;