import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'
import Logo from '../../assets/logo-batman.jpg';
import '../responsive/responsive.css';



function Header(){
    return(
        <header>
            <img alt='logo' id='logo' src={Logo}/>
            <nav>
                <ul>
                    <Link className='routes' to='/'>
                    <li>Home</li>
                    </Link>

                    <Link to ='/contato'>
                    <li>Contato</li>
                    </Link>

                    <Link to ='/fotos'>
                    <li>Fotos</li>
                    </Link>

                    <Link to ='/comentarios'>
                    <li>Comentários</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header