import React from "react";
import styles from "./Gamificacao.module.css";
import livrogame from "../../assets/livro_game.png";

const Gamificacao = () => (
  <div className={styles.fundo}>
    <div className={styles.emojis}>
      <img
        className={styles.emojiTop}
        src={livrogame || ""}
        alt="Livro Game"
        style={{ width: "2.5rem", height: "2.5rem" }}
        onError={(e) => (e.target.style.display = "none")}
      />
      <span className={styles.emojiLeft}>🏆</span>
      <span className={styles.emojiRight}>🧩</span>
    </div>
    <div className={styles.conteudo}>
      <h1>Gamificação</h1>
      <p>Explore e divirta-se enquanto aprende!</p>
    </div>
  </div>
);

export { Gamificacao };