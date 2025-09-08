import './App.css';
import { useEffect } from 'react';
import { Painel } from './components/Painel';
import { Cabecalho } from './components/Cabecalho';
import { Gamificacao } from './components/Gamificacao';

function App() {

  useEffect(() => {
    document.title = 'Kidschool - Aprendizagem'
  });

  return (
    <>
      <Cabecalho/>
      <Painel/>
      <Gamificacao/>
    </>
  );
};

export default App
