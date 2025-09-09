import React from 'react';
import styles from './Contato.module.css';
import { Link } from 'react-router-dom';

const Contato = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>Entre em Contato</h1>
                <p className={styles.subtitle}>
                    Adoraríamos ouvir de você! Utilize um dos canais abaixo.
                </p>

                <div className={styles.contactList}>
                    <a
                        href="https://www.instagram.com/kidschool_edu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactItem}
                    >
                        <span className={styles.icon}>📷</span>
                        <div className={styles.contactInfo}>
                            <strong>Instagram</strong>
                            <span>@kidschool_edu</span>
                        </div>
                    </a>

                    <a
                        href="mailto:lucas.lopes294@etec.sp.gov.br"
                        className={styles.contactItem}
                    >
                        <span className={styles.icon}>📧</span>
                        <div className={styles.contactInfo}>
                            <strong>Email</strong>
                            <span>lucas.lopes294@etec.sp.gov.br</span>
                        </div>
                    </a>

                    <a
                        href="https://wa.me/5519984519925"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactItem}
                    >
                        <span className={styles.icon}>📱</span>
                        <div className={styles.contactInfo}>
                            <strong>WhatsApp</strong>
                            <span>+55 (19) 98451-9925</span>
                        </div>
                    </a>
                </div>

                <Link to="/" className={styles.homeLink}>
                    Voltar para a Página Inicial
                </Link>
            </div>
        </div>
    );
};

export default Contato;