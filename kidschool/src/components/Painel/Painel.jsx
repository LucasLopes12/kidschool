import React, { useRef } from 'react';
import styles from './Painel.module.css';

const materias = [
  "Matemática", "Português", "História", "Geografia", "Ciências",
  "Física", "Química", "Biologia", "Inglês", "Educação Física",
  "Artes", "Filosofia", "Sociologia"
];

const coresPorMateria = {
  "Matemática": "#f28b82",
  "Português": "#aecbfa",
  "História": "#fff475",
  "Geografia": "#d7aefb",
  "Ciências": "#a7ffeb",
  "Física": "#fdcfe8",
  "Química": "#cbf0f8",
  "Biologia": "#ccff90",
  "Inglês": "#fbbc04",
  "Educação Física": "#ffab91",
  "Artes": "#d7aefb",
  "Filosofia": "#fef08a",
  "Sociologia": "#c8e6c9",
};

const Painel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.faixaRoxa}>
      <h1 className={styles.texto}>Aprenda enquanto evolui seu personagem!</h1>

      {/* Botão Cadastrar */}
      <button className={styles.botaoCadastrar}>Cadastrar</button>

      <div className={styles.carrosselContainer}>
        <button className={styles.seta} onClick={() => scroll('left')}>&#10094;</button>

        <div className={styles.carrossel} ref={scrollRef}>
          {materias.map((materia, index) => (
            <div
              key={index}
              className={styles.cardMateria}
              style={{ backgroundColor: coresPorMateria[materia] || '#ffffff' }}
            >
              <div className={styles.tituloMateria}>{materia}</div>
            </div>
          ))}
        </div>

        <button className={styles.seta} onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
};

export { Painel };
