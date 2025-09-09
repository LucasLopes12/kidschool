import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // 1. Importe o useNavigate
import styles from './css/Cadastro.module.css';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [showSenha, setShowSenha] = useState(false);
    const [showConfirmaSenha, setShowConfirmaSenha] = useState(false);
    const navigate = useNavigate(); // 2. Inicialize o hook

    const handleSubmit = (event) => {
        event.preventDefault();
        if (senha !== confirmaSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        // Lógica de cadastro aqui
        console.log({ nome, email, senha });
        alert('Cadastro realizado com sucesso!');
        navigate('/'); // 3. Redirecione para a Home
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h1 className={styles.title}>Crie sua Conta</h1>
                <p className={styles.subtitle}>É rápido e fácil.</p>

                <div className={styles.inputGroup}>
                    <label htmlFor="nome">Nome Completo</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>

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
                            type={showSenha ? 'text' : 'password'}
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowSenha(!showSenha)}
                        >
                            {showSenha ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>

                <div className={styles.inputGroup}>
                    <label htmlFor="confirmaSenha">Confirmar Senha</label>
                    <div className={styles.passwordWrapper}>
                        <input
                            type={showConfirmaSenha ? 'text' : 'password'}
                            id="confirmaSenha"
                            value={confirmaSenha}
                            onChange={(e) => setConfirmaSenha(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            className={styles.togglePassword}
                            onClick={() => setShowConfirmaSenha(!showConfirmaSenha)}
                        >
                            {showConfirmaSenha ? '🙈' : '👁️'}
                        </button>
                    </div>
                </div>

                <button type="submit" className={styles.button}>
                    Cadastrar
                </button>

                <p className={styles.loginLink}>
                    Já tem uma conta? <Link to="/login">Faça login</Link>
                </p>
            </form>
        </div>
    );
};

export default Cadastro;