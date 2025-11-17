import React, { useState } from "react";
import logo from "../assets/logo.png";
 export default function Dashboard() {
  return (
    <div className="min-h-screen bg-purple-900 flex flex-col items-center justify-center text-white">
      <div className="text-center">
              <img
                src={logo}
                alt="Logo Mentor-IA"
                className="w-48 h-48 md:w48 md:h-48 mx-auto mb-4 animate-pulse"/>
      
              <h1 className="text-3xl md:text-5xl font-semibold text-white">
                mentor-<span className="text-blue-400">IA</span>
              </h1>
              <h2 className="text-lg md:text-2xl font-light text-gray-200">
                loading...</h2>

            </div>
    </div>
  );
}
 