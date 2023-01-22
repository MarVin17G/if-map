import styles from './footer.module.css'
import { Link } from 'react-router-dom'
import React from 'react'

import { FaMapMarkerAlt, FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { IoMdMail, IoIosArrowForward } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'

export default function Footer () {
    return (
        <footer>
            <div className={styles.footerDiv}>
                <div className={styles.linksProject}>
                    <div className={styles.LogoProject}>
                        <Link to='#' class={styles.ifmap}><FaMapMarkerAlt className={styles.map} />IFMAP</Link>
                        <p class={styles.if_text}>Instituto Federal de Educação, Ciência e Tecnologia do Rio Grande do Norte</p>
                    </div>
                    <div className={styles.contact}>
                        <div className={styles.ende}>           
                            <h3>Entre em contato</h3>
                            <address>
                                <FaMapMarkerAlt /> Av. Senador Salgado Filho, 1559 - Tirol, Natal - RN CEP: 59015-000 <br /><br />

                                <BsFillTelephoneFill/> - <br /><br />

                                <IoMdMail /> projetoifmap@gmail.com
                            </address>
                       
                            <div className={styles.social_midia}>
                                <Link to='#'><AiOutlineTwitter /></Link>
                                <Link to='#'><FaFacebookF /></Link>
                                <Link to='#'><FaLinkedinIn /></Link>
                                <Link to='#'><AiFillInstagram /></Link>
                            </div>
                        </div>
                        <div className={styles.creators}>
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
            <div className={styles.cprt}>
                    <p>Copyright <BiCopyright /> <Link to='#'>IFMap.</Link> All Rights Reserved.</p>
            </div>
        </footer>
    )
}