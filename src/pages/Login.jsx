import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import styles from './css/Login.module.css';

const Login = () => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade
    const navigate = useNavigate(); // 2. Inicialize o hook

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica de login aqui
        console.log({ email, senha });
        alert('Login realizado com sucesso!');
        navigate('/'); // 3. Redirecione para a Home
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Bem-vindo de Volta!</h1>
                <p className={styles.subtitle}>Faça login para continuar.</p>

                <div className={styles.inputGroup}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="senha">Senha</label>
                    <div className={styles.passwordWrapper}>
                        <input
                            type={showPassword ? 'text' : 'password'} // Altera o tipo do input
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>

                <button type="submit" className={styles.button}>
                    Entrar
                </button>

                <p className={styles.registerLink}>
                    Não tem uma conta? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;