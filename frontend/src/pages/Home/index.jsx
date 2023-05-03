import React from 'react';

import Header from '../../components/header';
import Footer from '../../components/footer';
import SearchBar from '../../components/searchBar';
import useGetDiretoria from '../../components/functions/getDiretorias';

import './style.css';

export default function Home() {
  const diretorias = useGetDiretoria();

  return (
    <>
      <Header />
      <div className="SearchDiv">
        <h1>Para onde você quer ir agora?</h1>
        <SearchBar diretorias={diretorias} />
      </div>
      <Footer />
    </>
  );
}
