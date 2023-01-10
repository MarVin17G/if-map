import React from 'react'
import { Link } from 'react-router-dom'
import styles from './footer.module.css'

import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { IoMdMail, IoIosArrowForward } from 'react-icons/io'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'

export default function Footer () {
    return (
        <footer>
            <div class={styles.footerDiv}>
                <div class={styles.linksProject}>
                    <div class={styles.LogoProject}>
                        <Link to='#' class={styles.ifmap}><FaMapMarkerAlt class={styles.map} /> IFMAP</Link>
                        <p class={styles.if_text}>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte</p>
                    </div>
                    <div class={styles.contact}>
                        <div class={styles.ende}>           
                            <h3>Entre em contato</h3>
                            <address>
                                <FaMapMarkerAlt /> Av. Senador Salgado Filho, 1559 - Tirol, Natal - RN CEP: 59015-000 <br /><br />

                                <BsFillTelephoneFill/> - <br /><br />

                                <IoMdMail /> projetoifmap@gmail.com
                            </address>
                       
                            <div class={styles.social_midia}>
                                <Link to='#'><AiOutlineTwitter /></Link>
                                <Link to='#'><FaFacebookF /></Link>
                                <Link to='#'><FaLinkedinIn /></Link>
                                <Link to='#'><AiFillInstagram /></Link>
                            </div>
                        </div>
                        <div class={styles.creators}>
                            <h3>Criadores</h3>
                            <div>
                                <ul>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Giovanna Melo</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Matheus Arthur</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Manrick Lázaro</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Virginia Menezes</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Joana Darc</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Thiago Assunção</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Alice Lima</Link>
                                    </li>
                                    <li>
                                        <Link to='#'><IoIosArrowForward /> Lucas S.</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={styles.cprt}>
                    <p>Copyright <BiCopyright /> <Link to='#'>IFMap.</Link> All Rights Reserved.</p>
            </div>
        </footer>
    )
}

/*
                    <div class="row">
                        <div class="col-md-4 mb-5">
                            <h3 class="text-white mb-4">Entre em contato</h3>
                            <p><i class="fa fa-map-marker-alt mr-2"></i>Av. Senador Salgado Filho, 1559 - Tirol, Natal - RN CEP: 59015-000</p>
                            <p><i class="fa fa-phone-alt mr-2"></i> - </p>
                            <p><i class="fa fa-envelope mr-2"></i>projetoifmap@gmail.com</p>
                            <div class="d-flex justify-content-start mt-4">
                                <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-twitter"></i></a>
                                <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-facebook-f"></i></a>
                                <a class="text-white mr-4" href="#"><i class="fab fa-2x fa-linkedin-in"></i></a>
                                <a class="text-white" href="#"><i class="fab fa-2x fa-instagram"></i></a>
                            </div>
                        </div>
                        <div class="col-md-4 mb-5">
                            <h3 class="text-white mb-4">Criadores</h3>
                            <div class="d-flex flex-column justify-content-start">
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Giovanna Melo</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Matheus Arthur</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Manrick Lázaro</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Virginia Menezes</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Joana Darc</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Thiago Assunção</a>
                                <a class="text-white-50 mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Alice Lima</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-dark text-white-50 border-top py-4" style="border-color: rgba(256, 256, 256, .1) !important;">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 text-center text-md-left mb-3 mb-md-0">
                            <p class="m-0">Copyright &copy; <a class="text-white" href="#">IFMap</a>. All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>


*/ 