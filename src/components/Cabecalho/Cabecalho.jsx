import styles from './Cabecalho.module.css';
import KidschoolLogo from '../../assets/kidschool_logo.png';

const Cabecalho = () => {
    return (
        <header className={styles.cabecalho}>
            <nav className={styles.nav}>
                    <div className={styles.navLeft}>
                    <img src={KidschoolLogo} alt="Kidschool" className={styles.logo}/>
                    </div>
                    <div className={styles.navRight}>
                    <a href="login">Login</a>
                    <a href="about">Sobre Nós</a>
                    <a href="aprender">Aprender</a>
                    <a href="contato">Contato</a>
                    </div>
                </nav>
        </header>
    )
}

export { Cabecalho };