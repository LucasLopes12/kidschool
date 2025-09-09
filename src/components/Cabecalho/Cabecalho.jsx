import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={styles.cabecalho}>
            <div className={styles.logo}>
                <Link to="/">Kidschool</Link>
            </div>
            <nav className={`${styles.nav} ${menuAberto ? styles.navAtiva : ''}`}>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/cadastro">Cadastro</Link>
                <Link to="/contato">Contato</Link>
            </nav>
            <button
                className={styles.menuHamburguer}
                onClick={() => setMenuAberto(!menuAberto)}
            >
                {menuAberto ? '✖' : '☰'}
            </button>
        </header>
    );
};

export { Cabecalho };