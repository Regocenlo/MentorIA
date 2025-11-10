import React, from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/Inicio"); // 👈 después de 3 segundos redirige al login
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#747474] flex flex-col items-center justify-center text-white">
      <div className="text-center">
        <img
          src={logo}
          alt="Logo Mentor-IA"
          className="w-40 h-40 mx-auto mb-4 animate-pulse"
        />
        <h1 className="text-3xl font-semibold text-white">
          mentor-<span className="text-blue-400">IA</span>
        </h1>
        <h2 className="text-1xl font-light text-gray-200">loading...</h2>
      </div>
    </div>
  );
}

 
