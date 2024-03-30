import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/userContext';
import './header.css'

function Header(){
    const {login, setLogin} = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <div className='header-container'>
            <nav>
                <ul className='itens'>

                    <Link to='/'>
                        <li>Home</li> 
                    </Link>

                    <Link to='/fotos'>
                        <li>Fotos</li>
                    </Link>

                    <Link to='/contato'>
                        <li>Contato</li>
                    </Link>

                    <li onClick={() => navigate('contato')}>Login</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header