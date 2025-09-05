import React from "react";
import styles from "./Gamificacao.module.css";

const Gamificacao = () => {
  return (
    <div className={styles.fundo}>
      <div className={styles.imagens}>
        <img  alt="Imagem 2" className={styles.topLeft} />
        <img  alt="Imagem 3" className={styles.topRight} />
        <img  alt="Imagem 1" className={styles.bottom} />
      </div>
      <div className={styles.conteudo}>
        <h1>Gamificação</h1>
        <p>Explore e divirta-se enquanto aprende!</p>
      </div>
    </div>
  );
};

export default Gamificacao;
