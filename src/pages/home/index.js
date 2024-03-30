import React from 'react'
import Header from '../../components/header/header';
import Profile from '../../components/profile/profile';
import { Link, useNavigate, useLocation } from 'react-router-dom';


function Home() {
    const produtos = [
        {nome: 'Batedeira', id:20},
        {nome: 'Ventilador', id:22},
        {nome: 'Computador', id:30},
    ]

    const location = useLocation();
    console.log(location);


    return (
        <div>
            {produtos.map((produto) =>(
                <Link to={`detalhes/${produto.id}`}>
                    <span style={{ display: 'block' }}>{produto.nome}</span>
                </Link>
            ))}
        </div>
    )
}

export default Home;