import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./paginas/Home";
import Sobre from "./paginas/Sobre";
import Contato from "./paginas/Contato";
import Login from "./paginas/Login"




function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login />} /> 
      </Routes>
    </> 
  );
}

export default App;
