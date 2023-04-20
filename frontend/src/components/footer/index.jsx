import { Link } from 'react-router-dom';
import React from 'react';

import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { IoMdMail, IoIosArrowForward } from 'react-icons/io';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiCopyright } from 'react-icons/bi';

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
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Giovanna Melo
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Matheus Arthur
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Manrick Lázaro
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Virginia Menezes
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Joana Darc
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Thiago Assunção
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Alice Lima
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <IoIosArrowForward />
                      {' '}
                      Lucas S.
                    </Link>
                  </li>
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
