
import React from "react";
import CodeEditor from "./components/CodeEditor";
import Login from "./components/Login";
import CrearCuenta from "./components/CrearCuenta";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="text-4xl font-bold text-blue-500 text-center mt-10">
      
        <Routes>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CrearCuenta" element={<CrearCuenta />}></Route>
        </Routes>
       
      </div> 
  );
}

