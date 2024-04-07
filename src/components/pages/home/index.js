import React from 'react'
import Header from '../../../components/header/header';
import './styles.css'
import Cards from '../../cards/cards';
import Footer from '../../footer/footer';
import '../../responsive/responsive.css';
import Trailer from '../../trailer/trailer';

function Home() {
    return (
        <>
        <Header />
        <Trailer />
        <Cards />
        <Footer />
        </>
    )
}

export default Home;