import React from 'react'
import Header from '../../../components/header/header';
import './styles.css'
import Video from '../../../assets/video.mp4';

function Home() {
    return (
        <>
        <Header />
        <div id='banner'></div>
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source src={Video}/>
                    Seu navegador não possui suporte para vídeos.
                </video>
            </div>
            <div id='sinopse'>
                <p className='description'>
                    Após quase um ano programando, eu sou o a minha melhor versão até então, estou destinado a coisas grandes e poderosas,
                    vou ser a melhor versão de mim todos os dias, o dinheiro vai vir até mim mediante o meu esforço, trabalho e dedicação, Amém.
                </p>
                <button className='button'>Comprar Ingresso</button>
            </div>
        </div>
        </>
    )
}

export default Home;