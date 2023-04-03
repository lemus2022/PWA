import { BrowserRouter, Route, Routes } from "react-router-dom";
import Begin from './components/Begin'
import Character from './components/Character'
import Example from "./components/classExample";
import React, { useState} from 'react';
import Feature from "./components/Features";

function App() {


  return (
   
    <div class="contenedor">
     
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Begin></Begin>}></Route>
      <Route path='/Character/:id' element={<Character></Character>}></Route>
      <Route path='/Features' element={<Feature></Feature>}></Route>
      <Route path='/classExmple' element={<Example></Example>}></Route>
      
     </Routes>
     </BrowserRouter>
     
    </div>

  );
}

export default App;

