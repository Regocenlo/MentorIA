import { useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
  const [gmail, setGmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [modoRegistro, setModoRegistro] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const navigate = useNavigate();

  const handleAuth = async (e) => {
    e.preventDefault();
    console.log("handleAuth se ejecutó. Modo registro:", modoRegistro);

    try {
      let resultado;

      if (modoRegistro) {
        // Registro nuevo
        resultado = await supabase.auth.signUp({
          email: gmail,
          password: contraseña,
          options: {
            emailRedirectTo: "http://localhost:5173/",
          },
        });
        console.log("Resultado de registro:", resultado);

        if (resultado.error) throw resultado.error;
        setMensaje("✅ Registro exitoso. Revisá tu correo para confirmar la cuenta.");
      } else {
        // Inicio de sesión
        resultado = await supabase.auth.signInWithPassword({
          email: gmail,
          password: contraseña,
        });
        console.log("Resultado de login:", resultado);

        if (resultado.error) throw resultado.error;
        setMensaje("Inicio de sesión exitoso ✅");

        navigate("/Inicio");

      }
    } catch (error) {
      console.error("Error en handleAuth:", error.message);
      setMensaje("❌ " + error.message);
    }
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
        <p className="text-sm lg:text-base text-white mt-1">
          {modoRegistro ? "Crear cuenta nueva" : "Iniciar sesión"}
        </p>
      </div>

{/* Formulario */}
      <div className="w-full max-w-md lg:max-w-lg bg-white rounded-2xl shadow-xl p-6 lg:p-10 text-gray-800">
        <form onSubmit={handleAuth} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1 lg:text-base">Ingrese su gmail</label>
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              placeholder="Correo Electrónico"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 lg:py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 lg:text-base">Ingrese su contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Contraseña"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 lg:py-3 text-sm lg:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"/>
          </div>

          <div className="flex justify-between items-center text-sm">
            <button
              type="button"
              className="text-blue-700 hover:underline"
              onClick={() => setModoRegistro(!modoRegistro)}
            >
              {modoRegistro ? "Ya tengo cuenta" : "Crear cuenta"}
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              {modoRegistro ? "Registrarme" : "Continuar"}
            </button>
          </div>
        </form>
        {mensaje && (
          <p className="mt-4 text-center text-sm text-gray-700">{mensaje}</p>
        )}


        
      </div>
    </div>
  );
}