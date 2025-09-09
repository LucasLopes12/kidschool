import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro'; // 1. Importe o componente de cadastro

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro" element={<Cadastro />} /> {/* 2. Adicione a rota para /cadastro */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
