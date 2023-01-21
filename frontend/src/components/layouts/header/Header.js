import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.jpg';
import styles from './Header.module.css'

import { FiMenu } from 'react-icons/fi'

export default function Header () {
    return (
        <header>
            <div className={styles.navbar_cont}>
                <nav className={styles.navbar}>
                    <div className={styles.logoDiv}>
                        <Link to='/' className={styles.logo}>
                            <img alt='Logo' src={Logo} />
                        </Link>
                    </div>  
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/diretorias'>Diretorias</Link>
                        </li>
                        <li className={styles.item}>
                            <Link to='/mapaGeral'>Mapa do IF</Link>
                        </li>
                    </ul>            
                </nav>
            </div>
        </header>
    )
}