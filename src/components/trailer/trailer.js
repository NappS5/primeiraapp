import React from 'react';
import './trailer.css';
import Video from '../../assets/video.mp4';
import {Link} from 'react-router-dom';



function Trailer (){
    return(
    <>
    <div id='banner'></div>
        <div id='trailer-container'>
            <div className='content'>
                <video controls className='trailer'>
                    <source src={Video}/>
                    Seu navegador não possui suporte para vídeos.
                </video>
            
                <div id='sinopse'>
                    <p className='description'>
                        Após quase um ano programando, eu sou o a minha melhor versão até então, estou destinado a coisas grandes e poderosas,
                        vou ser a melhor versão de mim todos os dias, o dinheiro vai vir até mim mediante o meu esforço, trabalho e dedicação, Amém.
                    </p>
                    <Link to='/ingresso' target='blank'>
                    <button className='button'>Comprar Ingresso</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Trailer