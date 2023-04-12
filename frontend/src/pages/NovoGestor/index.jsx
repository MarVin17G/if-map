import { useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import api from '../../services/api';
import './style.css';
import { useNavigate, useParams } from 'react-router-dom';

const NovoGestor = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    let { id } = useParams();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (id) await api.put(`/gestores/${id}`, { nome, email, matricula, senha });
            else await api.post('/gestores', { nome, email, matricula, senha });

            navigate('/gestores');
        } catch (err) {
            alert('Error ao cadastrar gestor.');
        }
    };

    useEffect(() => {
        const getGestor = async () => {
            try {
                let response = await api.get(`/gestores/${id}`);

                setNome(response.data.nome);
                setEmail(response.data.email);
                setMatricula(response.data.matricula);
                setSenha(response.data.senha);
            } catch(err) {
                //
            }
        };

        if (id) getGestor();
    }, [id]);

    return (
        <>
            <Header />
                <div className="novo-gestor-container">
                    <h1>{ id ? 'Editar Gestor' : 'Novo Gestor'}</h1>
                    <form onSubmit={handleSubmit}>
                        <input placeholder='Nome' value={nome} onChange={(e) => setNome(e.target.value)}/>
                        <input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder='Matrícula' value={matricula} onChange={(e) => setMatricula(e.target.value)}/>
                        <input placeholder='Senha' type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        <button className="novo-gestor-button" type='submit'>Salvar</button>
                    </form>
                </div>
            <Footer />
        </>
    );
};

export default NovoGestor;