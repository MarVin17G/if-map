import React from 'react';

import Header from '../../components/header';
import DiretoriaCard from '../../components/diretoriaCard';
import Footer from '../../components/footer';
import useGetDiretorias from '../../components/functions/getDiretorias';

export default function Diretorias() {
  const diretorias = useGetDiretorias();

  return (
    <>
      <Header />
      <DiretoriaCard items={diretorias} />
      <Footer />
    </>
  );
}
