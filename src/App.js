import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home/index.js';
import Contato from './components/pages/contato/contato.js';
import Fotos from './components/pages/fotos/fotos.js';
import Comentarios from './components/pages/comentarios/comentarios.js';

function App(){

  return (
    <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/contato' element={<Contato />}></Route>
        <Route path='/fotos' element={<Fotos />}></Route>
        <Route path='/comentarios' element={<Comentarios />}></Route>
      </Routes>
   </BrowserRouter>
    </>
  );
}

export default App;
