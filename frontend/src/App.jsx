
import React from "react";
import CodeEditor from "./components/CodeEditor";
import Login from "./components/Login";
import CrearCuenta from "./components/CrearCuenta";
import IniciarSesion from "./components/IniciaSesion";
import InterfazDesafio from "./components/InterfazDesafio";
import { Routes, Route } from "react-router-dom";
import Niveles from "./components/Niveles.jsx";
import Inicio from "./components/Inicio.jsx";
import Cuestionario from "./components/Cuestionario.jsx"
import PantallaCarga from "./components/PantallaCarga.jsx"

export default function App() {
  return (
    <div className="text-4xl font-bold text-blue-500 text-center mt-10">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/CrearCuenta" element={<CrearCuenta />}></Route>
          <Route path="/Cuestionario" element={<Cuestionario />}></Route>
          <Route path="/IniciaSesion" element={<IniciarSesion />}></Route>
          <Route path="/PantallaCarga" element={<PantallaCarga />}></Route>
          <Route path="/InterfazDesafio" element={<InterfazDesafio />}></Route>
          <Route path="/Niveles" element={<Niveles />}></Route>
        </Routes>
       
      </div> 
  );
}

