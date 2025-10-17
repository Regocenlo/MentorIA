
import React from "react";
import CodeEditor from "./components/CodeEditor";

export default function App() {
  return (
    <div className="text-4xl font-bold text-blue-500 text-center mt-10">
      Tailwind funciona 🚀
      <input type="checkbox"/> 
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      <div className="w-full max-w-3xl p-6">
        <h1 className="text-3xl font-bold mb-4">🧠 Editor con CodeMirror</h1>
        <CodeEditor />
      </div>
    </div>
    </div>
    
  );
}

