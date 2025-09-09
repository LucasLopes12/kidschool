import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';
import Contato from './pages/Contato'; // 1. Importe a página de contato

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/contato" element={<Contato />} /> {/* 2. Adicione a rota */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
