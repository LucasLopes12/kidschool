import React, { useRef } from 'react';
import styles from './Painel.module.css';

const materias = [
  "Matemática", "Português", "História", "Geografia", "Ciências",
  "Física", "Química", "Biologia", "Inglês", "Educação Física",
  "Artes", "Filosofia", "Sociologia"
];

const coresPorMateria = {
  "Matemática": "#f28b82",       // vermelho pastel
  "Português": "#aecbfa",        // azul pastel
  "História": "#fff475",         // amarelo pastel
  "Geografia": "#d7aefb",        // roxo pastel
  "Ciências": "#a7ffeb",         // verde água pastel
  "Física": "#fdcfe8",           // rosa pastel
  "Química": "#cbf0f8",          // azul clarinho
  "Biologia": "#ccff90",         // verde pastel
  "Inglês": "#fbbc04",           // amarelo forte pastel
  "Educação Física": "#ffab91",  // laranja pastel
  "Artes": "#d7aefb",            // roxo pastel
  "Filosofia": "#fef08a",        // amarelo pastel
  "Sociologia": "#c8e6c9",       // verde claro pastel
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
