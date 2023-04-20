import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import AmbienteCard from '../../components/ambienteCard';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Api from '../../services/api';

export default function Ambientes() {
  const [ambientes, setAmbientes] = useState([]);
  const [searchParams] = useSearchParams();

  const search = searchParams.get('search');
  const id = searchParams.get('id');

  let ambientesFiltrados;

  if (search || id) {
    if (search && id) {
      const lowerNome = search.toLowerCase();

      const ambientesFiltradosNome = ambientes.filter((ambiente) => ambiente.nome
        .toLowerCase()
        .includes(lowerNome));

      ambientesFiltrados = ambientesFiltradosNome.filter((ambiente) => ambiente.diretoriaFk
        .toString() === id);
    } else if (id) {
      ambientesFiltrados = ambientes.filter((ambiente) => ambiente.diretoriaFk
        .toString() === id);
    } else if (search) {
      const lowerNome = search.toLowerCase();

      ambientesFiltrados = ambientes.filter((ambiente) => ambiente.nome
        .toLowerCase()
        .includes(lowerNome));
    } else {
      ambientesFiltrados = ambientes;
    }
  } else {
    ambientesFiltrados = ambientes;
  }

  useEffect(() => {
    Api
      .get('/ambientes')
      .then((res) => setAmbientes(res.data));
  }, []);

  return (
    <>
      <Header />
      <AmbienteCard items={ambientesFiltrados} />
      <Footer />
    </>
  );
}
