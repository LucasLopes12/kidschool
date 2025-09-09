import React, { useRef } from 'react';
import styles from './Painel.module.css';

// Vamos criar uma lista de matérias para exibir
const materias = [
  { nome: 'Matemática', icone: '🧮' },
  { nome: 'Português', icone: '📚' },
  { nome: 'Ciências', icone: '🔬' },
  { nome: 'História', icone: '📜' },
  { nome: 'Geografia', icone: '🌍' },
  { nome: 'Artes', icone: '🎨' },
];

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
            <div key={index} className={styles.cardMateria}>
              <span className={styles.icone}>{materia.icone}</span>
              <h3 className={styles.nomeMateria}>{materia.nome}</h3>
            </div>
          ))}
        </div>

        <button className={styles.seta} onClick={() => scroll('right')}>&#10095;</button>
      </div>
    </div>
  );
};

export { Painel };
