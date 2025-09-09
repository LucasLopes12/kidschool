// filepath: c:\Users\lopes\ams\TICEMTRILHAS\kidschool\kidschool\src\pages\Home.jsx
import '../App.css';
import { useEffect } from 'react';
import { Painel } from '../components/Painel';
import { Cabecalho } from '../components/Cabecalho';
import { Gamificacao } from '../components/Gamificacao';

function Home() {

    useEffect(() => {
        document.title = 'Kidschool - Aprendizagem'
    });

    return (
        <>
            <Cabecalho />
            <Painel />
            <Gamificacao />
        </>
    );
};

export default Home;