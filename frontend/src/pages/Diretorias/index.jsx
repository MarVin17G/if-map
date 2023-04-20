import { useEffect, useState, React } from 'react';
import Api from '../../services/api';

import Header from '../../components/header';
import DiretoriaCard from '../../components/diretoriaCard';
import Footer from '../../components/footer';

export default function Diretorias() {
  const [diretorias, setDiretorias] = useState([]);

  useEffect(() => {
    Api
      .get('/diretorias')
      .then((res) => setDiretorias(res.data));
  }, []);

  return (
    <>
      <Header />
      <DiretoriaCard items={diretorias} />
      <Footer />
    </>
  );
}
