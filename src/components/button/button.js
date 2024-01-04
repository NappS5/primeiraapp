import React from 'react'
import './button.css'

function Button({ name, active, onClick }) {
    return (
      <div className='button-container'>
        <p className='texto'>Nós iremos salvar todos os dados!</p>
        <button onClick={onClick} className={active ? 'button' : 'disabledButton'}>{name}</button>
      </div>
    );
  }

export default Button