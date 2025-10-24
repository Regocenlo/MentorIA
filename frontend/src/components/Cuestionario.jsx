import { useState } from "react";
const Pregunta = ({ numero, titulo, opciones, respuestaSeleccionada, onSeleccionar }) => (
  <div className="mb-8">
    <p className="text-lg font-medium mb-4">
      {numero}. {titulo}
    </p>

    <div className="flex justify-between gap-3">
      {opciones.map((opcion, index) => {
       const seleccionada = respuestaSeleccionada === opcion;

        return (
          <button
            key={index}
            onClick={() => onSeleccionar(opcion)}
            className={`flex-1 px-5 py-2 font-semibold rounded-full shadow-lg transition duration-200 ease-in-out
              ${
                seleccionada
                  ? "bg-purple-600 text-white hover:bg-purple-500" 
                  : "bg-white text-black hover:bg-purple-300" 
              }`}
          >
            {opcion}
          </button>
        );
      })}
    </div>
  </div>
);

export default function Cuestionario() {
 const [respuestas, setRespuestas] = useState({});
  const preguntas = [
    {
      numero: 1,
      titulo: "¿Cuál es tu nivel actual?",
      opciones: ["Principiante", "Intermedio", "Avanzado"],
    },
    {
      numero: 2,
      titulo: "¿Qué lenguaje querés practicar?",
      opciones: ["JavaScript", "Python", "C++"],
    },
    {
      numero: 3,
      titulo: "¿Qué campos te gustaría mejorar?",
      opciones: ["Lógica", "Sintaxis", "Ambos"],
    },
    
  ];

  return (
    <div className="min-h-screen bg-purple-900 text-white flex flex-col items-center p-8">
      
      <div className="w-full max-w-lg text-left">
      
        <div className="text-center mb-10">
          <h1 className="text-5xl font-bold mb-3 mt-2">¡Te damos la bienvenida! 👋</h1>
          <p className="text-sm font-semibold text-purple-100">
            Contanos un poco sobre vos para crear desafíos a tu medida.
          </p>
        </div>

        {preguntas.map((p) => (
          <Pregunta
            key={p.numero}
            numero={p.numero}
            titulo={p.titulo}
            opciones={p.opciones}
            respuestaSeleccionada={respuestas[p.numero]}
            onSeleccionar={(opcion) =>
              setRespuestas({ ...respuestas, [p.numero]: opcion })
            }
          />
        ))}

        <button className="w-full py-4 bg-white text-black text-lg font-bold rounded-lg mt-12 mb-4 hover:bg-purple-300 transition duration-200">
          Continuar
        </button>
      
      </div> 
    </div>
  );
}
