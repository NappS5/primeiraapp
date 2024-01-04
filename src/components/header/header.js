import React, { useContext } from 'react'
import { UserContext } from '../../contexts/userContext';
import './header.css'

function Header(){
    const [login, setLogin] = useContext(UserContext);

    return(
        <div className='header-container'>
            <nav>
                <ul className='itens'>
                    <li>Home</li>
                    <li>Fotos</li>
                    <li>Contato</li>
                    <li onClick={() => setLogin(!login)}>{login ? 'Deslogar' : 'Login'}</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header