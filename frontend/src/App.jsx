
import React from "react";
import Login from "./components/Login";
import CrearCuenta from "./components/CrearCuenta";
import IniciarSesion from "./components/IniciaSesion";
import InterfazDesafio from "./components/InterfazDesafio";
import { Routes, Route } from "react-router-dom";
import Niveles from "./components/Niveles.jsx";
import Inicio from "./components/Inicio.jsx";
import Cuestionario from "./components/Cuestionario.jsx"
import Feedback from "./components/Feedback.jsx";

export default function App() {
  return (
    <div className="text-4xl font-bold text-center w-full h-full">
        <Routes>
          <Route index element={<Login />} />
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Inicio" element={<Inicio />}></Route>
          <Route path="/CrearCuenta" element={<CrearCuenta />}></Route>
          <Route path="/Cuestionario" element={<Cuestionario />}></Route>
          <Route path="/IniciaSesion" element={<IniciarSesion />}></Route>
          <Route path="/InterfazDesafio" element={<InterfazDesafio />}></Route>
          <Route path="/Niveles" element={<Niveles />}></Route>
          <Route path="/Feedback" element={<Feedback />}></Route>
        </Routes>
       
      </div> 
  );
}

