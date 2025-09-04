import './App.css'
import { useEffect } from 'react';
import { Painel } from './components/Painel'

function App() {

  useEffect(() => {
    document.title = 'Kidschool - Aprendizagem'
  })

  return (
    <Painel/>
  )
}

export default App
