import './App.css';
import React, {useEffect, useState} from 'react';
import Button from './components/button/button.js';

function App(){
  
  
  const [carregando, setCarregando] = useState(true)
  const [contador, setContador] = useState(0)

  useEffect(() => {
    console.log('carregou');

    return () => {
      
    }

  }, [contador])

  const alterarContador = (valor) => {
    setContador(contador + valor);
  };

  return (
    <>
    <div>
      {carregando? 
      <span>Carregando..</span> 
      :
      <div>
        <button onClick={() => setContador(contador + 1)}>Adicionar</button>
        <span>{contador}</span>
      <Button name='Alterar valor' active onClick={() => alterarContador(20)}/>
      </div>
      }
      <button onClick={() => setCarregando(!carregando)}>{carregando ? 'carregar site' : 'voltar'}</button>
    </div>
  
    </>
  );
}

export default App;
