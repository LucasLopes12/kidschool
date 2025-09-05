import './App.css'
import { useEffect } from 'react';
import { Painel } from './components/Painel'
import { Cabecalho } from './components/Cabecalho'

function App() {

  useEffect(() => {
    document.title = 'Kidschool - Aprendizagem'
  })

  return (
    <>
      <Cabecalho/>
      <Painel/>
    </>
  )
}

export default App
