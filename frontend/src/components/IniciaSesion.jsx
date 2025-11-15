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
    <div className="min-h-screen bg-purple-900 text-white flex flex-col items-center justify-center p-4 lg:p-8">
      <div className="mt-6 text-center">
        <img
          src={logo}
          alt="Logo Mentor-IA"
          className="w-32 h-32 lg:w-48 lg:h-48 mx-auto mb-2"/>

        <h1 className="text-3xl lg:text-4xl font-semibold text-white">
          mentor-<span className="text-blue-400">IA</span>
        </h1>

        <p className="text-sm lg:text-base text-white mt-1">Iniciar sesión</p>
      </div>

{/* Formulario */}
      <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-xl p-6 lg:p-10 text-gray-800">
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 lg:text-base">Ingrese su gmail</label>
            <input
              type="email"
              value={gmail}
              onChange={(DatoRecibido) => setGmail(DatoRecibido.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 lg:py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 lg:text-base">Ingrese su contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(DatoRecibido) => setContraseña(DatoRecibido.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 lg:py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div className="flex justify-between items-center text-sm lg:text-base">
            <button type="button" className="text-blue-700 hover:underline">
              Olvidé mi contraseña
            </button>
        
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 lg:px-8 lg:py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Continuar
            </button>
          </div>
        </form>


        
      </div>
    </div>
  );
}