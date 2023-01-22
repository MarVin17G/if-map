import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/imgs/logo.jpg';
import styles from './Header.module.css'


export default function Header () {
    return (
        <header>
            <div className={styles.navbar_container}>
                <nav className={styles.navbar}>
                    <div className={styles.logoDiv}>
                        <Link to='/'>
                            <img className={styles.logo} alt='Logo' src={Logo} />
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