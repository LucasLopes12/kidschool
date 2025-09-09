// filepath: c:\Users\lopes\ams\TICEMTRILHAS\kidschool\kidschool\src\pages\NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './css/NotFound.module.css';

const NotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.subtitle}>Oops! Página não encontrada.</p>
                <p className={styles.message}>
                    Parece que a página que você está procurando não existe ou foi movida.
                </p>
                <Link to="/" className={styles.link}>
                    Voltar para a Página Inicial
                </Link>
            </div>
        </div>
    );
};

export default NotFound;