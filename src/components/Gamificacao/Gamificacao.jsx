import React from "react";
import styles from "./Gamificacao.module.css";

const Gamificacao = () => {
  return (
    <div className={styles.fundo}>
      <div className={styles.imagens}>
        {/* Imagens removidas para evitar erro */}
      </div>
      <div className={styles.conteudo}>
        <h1>Gamificação</h1>
        <p>Explore e divirta-se enquanto aprende!</p>
      </div>
    </div>
  );
};

export default Gamificacao;
