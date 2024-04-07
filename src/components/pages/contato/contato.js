import React from 'react'
import Footer from '../../footer/footer';
import './contato.css'
import Header from '../../../components/header/header';
import SocialMedia from '../../social media/socialmedia';



function Contato() {
    return (
        <>
        <Header />
        <div id='banner-contato'></div>
        <div className='ajuda'>
            <h1 className='title'>Precisando de ajuda?</h1>  
            <span className='contato'>Entre em contato conosco, afinal...</span>     
            <SocialMedia />
                <div className='actor-cards-container'>
                    <div className='cards-content'>
                         <div class="card banner-1">Robert Pattison - Batman</div>
                    </div>
                </div>
            <span className='telas'>O Morcegão ta louco para que você venha ver ele nas telas!</span>
        </div>
        <Footer />
        </>
    )
}

export default Contato;