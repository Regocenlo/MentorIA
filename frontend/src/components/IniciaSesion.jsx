import React, { useState } from "react";
import logo from "../assets/logo.png";
export default function Dashboard() {
  const [gmail, setGmail] = useState("");
  const [contraseña, setContraseña] = useState("");


  const handleLogin = (DatoRecibido) => {
 //Guarda los datos en la consola
  DatoRecibido.preventDefault();
  console.log("Gmail:", gmail);
  console.log("Contraseña:", contraseña);
  };

  return (
    <div className="min-h-screen bg-[#386996] text-white flex flex-col items-center p-2">
      <div className="mt-6 text-center">
        <img
          src={logo}
          alt="Logo Mentor-IA"
          className="w-40 h-40 mx-auto mb-2"/>

        <h1 className="text-3xl font-semibold text-white">
          mentor-<span className="text-blue-200">IA</span>
        </h1>

        <p className="text-sm text-white mt-1">Iniciar sesión</p>
      </div>


      <div className="mt-8 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-gray-800">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Ingrese su gmail</label>
            <input
              type="email"
              value={gmail}
              onChange={(DatoRecibido) => setGmail(DatoRecibido.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Ingrese su contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(DatoRecibido) => setContraseña(DatoRecibido.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div className="flex justify-between items-center text-sm">
            <button type="button" className="text-blue-700 hover:underline">
              Olvidé mi contraseña
            </button>
        
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Continuar
            </button>
          </div>
        </form>


        
      </div>
    </div>
  );
}