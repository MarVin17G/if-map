import { useState, useEffect, React } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import { FaMapMarkedAlt } from 'react-icons/fa';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Api from '../../services/api';
import './MenuAmbiente.css';

export default function MenuAmbiente() {
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line no-unused-vars
  const [ambiente, setAmbiente] = useState([]);

  const id = searchParams.get('id');

  useEffect(() => {
    Api
      .get(`/ambientes/${id}`)
      .then((res) => setAmbiente(res.data));
  }, []);

  return (
    <>
      <Header />
      <div className="div_menu_ambiente">
        <Link to="/guiaVideo">
          <div className="cartao_dir cartao_dir_menu">
            <h3 className="title title_menu">Guia com Video</h3>
            <div className="bar bar_menu">
              <div className="emptybar emptybar_menu" />
              <div className="filledbar filledbar_menu" />
            </div>
            <div className="icon_menu">
              <MdOutlineOndemandVideo />
            </div>
          </div>
        </Link>
        <Link to="/guiaMapa">
          <div className="cartao_dir cartao_dir_menu">
            <h3 className="title title_menu">Mapa</h3>
            <div className="bar bar_menu">
              <div className="emptybar emptybar_menu" />
              <div className="filledbar filledbar_menu" />
            </div>
            <div className="icon_menu">
              <FaMapMarkedAlt />
            </div>
          </div>
        </Link>
      </div>
      <Footer />
    </>
  );
}
