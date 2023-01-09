import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.jpg';
import styles from './Header.module.css'

import { FiMenu } from 'react-icons/fi'

export default function Header () {
    return (
        <header>
            <div className={styles.navbar_cont}>
                <nav class={styles.navbar}>
                    <div class={styles.logoDiv}>
                        <Link to='/' class={styles.logo}>
                            <img alt='Logo' src={Logo} />
                        </Link>
                    </div>
                    <button class={styles.menu_button} >
                        <FiMenu />               
                    </button>    
                   
                    <ul class={styles.list}>
                        <li class={styles.item}>
                            <Link to='/'>Home</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to='/diretorias'>Diretoria</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to='/ajuda'>Ajuda</Link>
                        </li>
                        <li class={styles.item}>
                            <Link to='/mapaGeral'>Mapa do IF</Link>
                        </li>
                    </ul>            
                </nav>
            </div>
        </header>
    )
}