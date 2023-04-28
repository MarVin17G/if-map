import { Link } from 'react-router-dom';
import React from 'react';

import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';
import ListMember from '../ListMember';

import './style.css';

export default function Footer() {
  return (
    <footer>
      <div className="footerDiv">
        <div className="linksProject">
          <div className="LogoProject">
            <Link to="/" className="ifmap">
              <FaMapMarkerAlt className="map" />
              IFMAP
            </Link>
            <p className="if_text">Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte</p>
          </div>
          <div className="contact">
            <div className="ende">
              <h3>Entre em contato</h3>
              <address>
                <FaMapMarkerAlt />
                {' '}
                Av. Senador Salgado Filho, 1559 - Tirol, Natal - RN CEP: 59015-000
                {' '}
                <br />
                <br />
                <BsFillTelephoneFill />
                {' '}
                -
                {' '}
                <br />
                <br />
                <IoMdMail />
                {' '}
                projetoifmap@gmail.com
              </address>

              <div className="social_midia">
                <Link to="/"><AiOutlineTwitter /></Link>
                <Link to="/"><FaFacebookF /></Link>
                <Link to="/"><FaLinkedinIn /></Link>
                <Link to="/"><AiFillInstagram /></Link>
              </div>
            </div>
            <div className="creators">
              <h3>Criadores</h3>
              <div>
                <ul>
                  <ListMember name="Giovanna melo" />
                  <ListMember name="Matheus Arthur" />
                  <ListMember name="Manrick Lázaro" />
                  <ListMember name="Virginia Menezes" />
                  <ListMember name="Joana Darc" />
                  <ListMember name="Thiago Assunção" />
                  <ListMember name="Alice Lima" />
                  <ListMember name="Lucas S." />
                  <ListMember name="Marcos Vinicius" />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cprt">
        <p>
          Copyright
          {' '}
          <BiCopyright />
          {' '}
          <Link to="/">IFMap.</Link>
          {' '}
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
