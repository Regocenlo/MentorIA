import { useState } from "react";
import logo from "../assets/logo.png";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
export default function IniciaSesion() {
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

        navigate("/InterfazDesafio");

      }
    } catch (error) {
      console.error("Error en handleAuth:", error.message);
      setMensaje("❌ " + error.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#386996] text-white flex flex-col items-center p-2">
      <div className="mt-6 text-center">
        <img src={logo} alt="Logo Mentor-IA" className="w-40 h-40 mx-auto mb-2" />
        <h1 className="text-3xl font-semibold text-white">
          mentor-<span className="text-blue-200">IA</span>
        </h1>
        <p className="text-sm text-white mt-1">
          {modoRegistro ? "Crear cuenta nueva" : "Iniciar sesión"}
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-white rounded-2xl shadow-lg p-6 text-gray-800">
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Gmail</label>
            <input
              type="email"
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              placeholder="email@domain.com"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Contraseña</label>
            <input
              type="password"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="password"
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
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
